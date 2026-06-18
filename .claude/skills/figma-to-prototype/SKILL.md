---
name: figma-to-prototype
description: >
  Plan and build interactive prototypes from Figma designs using the Figma MCP.
  Use this skill whenever the user provides a Figma link and wants to turn a design
  into working code — whether that's a single component, a full screen, or a multi-step
  flow. Also triggers when the user says things like "build this from Figma", "prototype
  this design", "implement this Figma screen", "turn this design into code", or "make
  this interactive". Use even if they only ask for a plan first and say they'll execute later.
compatibility:
  required_mcps:
    - Figma MCP (connected in Claude.ai settings)
---

# Figma → Interactive Prototype Skill

This skill has two modes that flow in sequence:

1. **Plan mode** — Inspect the Figma design and produce a structured prototype plan
2. **Execute mode** — Build the prototype from the approved plan

The user may invoke either mode explicitly, or ask you to run both in one shot. Default to **Plan first, confirm, then Execute** unless they say otherwise.

---

## Rule 0 — Never fill gaps with assumptions (read the source, or ask)

This overrides everything below. Every value, dimension, color, position, layout, and behavior in the output must come from one of two places: **(a) read directly from the Figma source** (design context, metadata, variable defs, screenshot, or the Plugin API), or **(b) explicitly confirmed by the user.** There is no third source. You may not invent, approximate, "reason about," or carry over a plausible value — not for spacing, not for a hover color, not for where a popover sits relative to its trigger, not for anything.

This applies in particular to things that *feel* safe to guess:
- **Placement / positioning / alignment** of overlays, popovers, tooltips, menus relative to their trigger — read it from the in-context metadata (`get_metadata` gives exact x/y/width for the element and its anchor) rather than approximating "probably right-aligned" or "probably centered." Element placement is a frequent silent-assumption trap; treat it like any other spec.
- **Any interaction state** (hover/active/focus/disabled/loading) — read the variant, never assume a convention.
- **Anything labelled "display only," "incidental," or "obvious."** None of those lower the bar. A guessed value is a defect even inside a token reference (`var(--x)` whose value you never confirmed is still a guess).

**When the source is unavailable or ambiguous, or you cannot verify a value, STOP and ask the user a specific clarifying question.** Do not proceed on a best guess. "When in doubt, ask" is the required behavior, not a fallback. It is always better to ask one question than to ship an approximation the user has to catch and correct.

If you catch yourself writing a value and you cannot point to the exact read or user statement it came from, that is a gap — resolve it by reading or asking before you write it. If a limitation prevents reading something (e.g. an asset URL you can't fetch), surface that limitation explicitly and ask how to proceed rather than filling the gap yourself.

---

## Phase 1: Design Inspection & Planning

### Step 1 — Fetch the design

Use the Figma MCP to get an overview of the file structure:

- Call `get_metadata` or `get_design_context` on the provided link
- Identify all top-level frames and pages
- Do not do a deep inspection yet — just enough to enumerate what exists

> **Tip:** If the Figma URL includes a `node-id`, note it but still list sibling frames so the user can confirm or expand scope.

---

### Step 2 — Confirm scope with the user

Present the frames/pages you found and ask the user which to include. Do not pick for them.

Example format:
```
I found the following frames in this file:
1. Login Screen
2. Dashboard / Overview
3. Dashboard / Analytics
4. Settings — Profile
5. Settings — Notifications

Which frame(s) would you like to prototype?
```

Wait for the user's answer before continuing.

---

### Step 3 — Gather remaining requirements from the user

With scope confirmed, collect three required inputs. If any are missing, ask — do not assume or infer defaults.

**Purpose / audience** — Who is this for and what is the goal?
- Stakeholder review (look, feel, and interactions — visual fidelity is the priority)
- Developer handoff (production-ready, well-structured code is the priority)
- Personal reference / exploration
- Other

**Fidelity level** — What level of interactivity is needed? These are additive — the user can pick multiple:
- Static render (pixel-faithful, no interactions)
- Clickable states (hover, active, focus styles)
- Interactive flow (working navigation, modals, drawers, screen transitions)
- Data-driven (dynamic state, form validation, fake data)
- Animated (entrance animations, transitions between states)

**Technology** — What should it be built in? Use the guidance below to help the user decide if they're unsure:

| Goal | Recommended |
|------|-------------|
| Stakeholder review, static or light interactions | HTML/CSS/JS |
| Stakeholder review, multi-screen flow with state | HTML/CSS/JS or React |
| Complex state, many interactive components | React |
| Developer handoff, component-driven codebase | React |
| Must run outside of chat without a build step | HTML/CSS/JS |

Options:
- HTML/CSS/JS (single file)
- React (`.jsx`)
- Other (please specify)

All options render inline in chat. Only ask about file download if the user mentions wanting to use the code outside of chat.

> Only proceed to Step 4 once purpose, fidelity, and technology are all confirmed.

---

### Step 4 — Deep inspect the scoped frames

With scope confirmed, do a thorough Figma inspection of only the target frames:

- `get_design_context` on each target frame and its key components
- `get_variable_defs` if design tokens/variables are present
- Note component variants, Auto Layout properties, and any interaction hints

---

### Step 5 — Produce the Prototype Plan

Output the plan as a structured document. Sections 1–4 reflect confirmed user inputs. Sections 5–9 come from the deep Figma inspection.

---

#### 📋 Prototype Plan Template

```
## Prototype Plan: [Design Name]

### 1. Scope (confirmed by user)
- Target frames/screens: [exactly what the user selected]
- Out of scope: [anything explicitly excluded]

### 2. Purpose / Audience (confirmed by user)
- [Stakeholder review / Developer handoff / Personal reference / Other]
- Goal: [what the user said they need this for]

### 3. Fidelity Level (confirmed by user)
- [List the confirmed fidelity options]

### 4. Technology (confirmed by user)
- Technology: [HTML/CSS/JS / React / other]
- Styling approach: [as specified, or derived from framework choice]
- State management: [as needed given fidelity level]

### 5. Component Breakdown
| Figma Component | Code Component | Props/Variants | Notes |
|----------------|---------------|----------------|-------|
| ...            | ...           | ...            | ...   |

### 6. Design Tokens
- Color palette: [list primary colors and their roles]
- Typography: [font families, weights, sizes for key text styles]
- Spacing scale: [key spacing values]
- Border radii, shadows: [as needed]

### 7. Interaction Map
(Only populated if fidelity includes clickable states or above)
| Trigger | Element | Action | Result |
|---------|---------|--------|--------|
| Click   | Button  | ...    | ...    |
| Hover   | Card    | ...    | ...    |

### 8. Asset Strategy
- Images: [use Figma image fills / placeholder URLs / omit]
- Icons: [inline SVG / text placeholder]
- Fonts: [Google Fonts CDN / system fallback]

### 9. Known Complexity / Risks
- [Any components that look tricky to implement faithfully]
- [Any ambiguities in the design]
- [Anything that will need approximation]
```

---

### Step 6 — Confirm the Plan

Present the plan and ask for approval before building. Surface any open questions from the deep inspection — particularly:

- Interactions that are implicit in the design but not captured in Figma's static data (e.g. modals, drawers, tooltips)
- Assets or fonts that may need special handling
- Anything that will require intentional approximation

---

## Phase 2: Execution

Once the plan is approved, build the prototype following the approved plan and the frontend-design skill guidelines (read `/mnt/skills/public/frontend-design/SKILL.md` if not already in context).

### Execution principles

**If the technology is HTML/CSS/JS, ignore React/framework Code Connect mappings.** `get_design_context` may return framework-specific component code — `import { Button } from '@mui/material'`, `<CodeConnectSnippet>` wrappers, React JSX — when a node has Code Connect mappings. For an HTML/CSS/JS prototype these are noise: never import a component library or emit React because Figma suggested it. Build plain HTML/CSS/JS that reproduces the design. When a Code Connect snippet *replaces* a node's real styling (so you can't see its fills/border/padding/typography), re-fetch that node with `get_design_context`'s `disableCodeConnect: true` to get the raw design, then translate it by hand. The mapping tells you *which* design-system component it is, not *how to build it here*.

**Extract design tokens first.** Before writing any component code, declare the design's tokens — colors, font sizes/families/weights, line heights, spacing, radii, borders, shadows — as CSS custom properties or a JS constants object. This keeps the output faithful and easy to tweak.

**Never inline raw values — all token-mapped properties are tokens, not just colors.** Design systems tokenize far more than color: font sizes, font families, font weights, line heights, spacing/padding/gaps, border radii, border widths, shadows, and sizes are commonly bound to variables too. Every such value in the output must reference a token (CSS variable), never a raw literal in a rule. The only place raw values appear is the token-definition layer at the top (e.g. `:root`), which maps token names to the design system's values. Resolve each token from its own variable definition, not from a consuming node's resolved value — read the bound variable (`boundVariables`), then follow the alias chain via `figma.variables.getVariableByIdAsync` to the primitive that defines the value, and name the CSS variable after the semantic token. Two tokens may currently resolve to the same value, but that is incidental and irrelevant — always pull from the definition so the binding is correct even if values diverge later. Document the alias chain in a comment (e.g. `Button/Color/Ghost/Background/Hover → Color/Neutral/200`). The same applies to states. If a value is NOT mapped to any token in the design, do not invent one — flag it to the user and ask. Never fabricate values (e.g. a hover tint or an arbitrary spacing) the design doesn't specify.

Prefer relative units where the design system does (e.g. font sizes in `rem`), and document the px equivalent in a comment (e.g. `--font-body: 0.875rem; /* 14px */`).

**Set every text element's font properties explicitly from tokens.** Do not rely on inherited browser defaults — an element with no `font-size` silently falls back to the UA default (typically 16px), which breaks fidelity and is easy to miss. Each text element should set its size, weight, and line-height from tokens, matching its peers (e.g. a label next to a value should share the body font size unless the design says otherwise).

```css
:root {
  --color-primary: #...;
  --color-surface: #...;
  --font-heading: 'Font Name', serif;
  --radius-card: 12px;
  /* etc. */
}
```

**Build bottom-up.** Implement leaf components first (buttons, inputs, tags, icons), then compose them into larger layouts. This mirrors how Figma components work.

**Build reusable, generic components — not one-offs tied to a specific instance.** Figma designs are component-driven, and a pattern shown on one element (an editable cell in one column, a status badge on one row, a specific button) almost always recurs elsewhere. Even when asked to implement it for a single instance, build it as a reusable component: use generic, role-based class names (`editable-cell`, `cell-field`, `cell-menu` — not `assignee-cell`, `assignee-field`) and drive behavior through configuration/parameters (e.g. a `setupEditableCell(cell, { value, options, heading, onChange })` function) rather than hard-coding the specific field's data or labels inside the logic. The instance-specific details (its options, its data binding, its labels) are passed in at the call site. This way the same component serves future columns/rows without a rewrite, and matches how the design system itself is structured.

**Centralize shared styles; never duplicate a declaration block.** When two or more elements share styling, define it once and reuse it — do not copy a rule and tweak it. Reuse happens at two levels, and the **markup level is the one that matters**:
- **In the markup (preferred):** give a recurring element ONE base class plus small modifier classes for the genuine differences (`.icon-btn` + `.icon-btn--lg` + `.icon-btn--reveal`), not a distinct class per instance (`.filter-toggle-btn`, `.action-btn`, `.edit-btn`, … each with its own full rule). Grouping selectors in the CSS while leaving a unique class on every element only de-duplicates the *stylesheet*, not the *design* — the parallel class names remain, and so does the temptation to re-add per-instance styles. Push the reuse into the HTML.
- **Make variants cheap with private custom properties.** Expose what a variant changes (size, color, radius, glyph) as `--_*` custom properties on the base, so a modifier retargets them by setting a few variables instead of re-declaring layout — e.g. `.icon-btn { --_size: 24px; width: var(--_size); … }` and `.icon-btn--lg { --_size: 32px; }`.

**Know what NOT to merge.** Generalize only what is genuinely the same component. Keep separate:
- Elements with different interaction states — a decorative remove-✕ with no hover/focus is not the same component as a ghost icon button, even if both center an icon; folding it in would give it states it shouldn't have.
- Interactive controls vs non-interactive icon wrappers (a `<button>` vs a `<span>` that only centers a glyph).
- Classes that exist as **JS hooks**. Keep the hook class on the element for the script to select, but move its styling into the shared base/modifier — the hook class should carry no styles of its own.

**Audit for duplication before presenting.** Scan the stylesheet for repeated declaration blocks and for the same class defined across multiple rule blocks; consolidate any real duplication into a base class or grouped selector. A class legitimately appears in more than one block only as *base + override*, where the blocks set **different** properties — never the same property with a conflicting value (that's the cascade-collision bug from the "one component — one base class" pattern below).

**Leave no dead code.** When an interaction or structure changes, remove code that no longer serves a purpose — don't keep it because it seems harmless. For example, if a click handler moves from the row to a button, remove any `stopPropagation` that existed only to manage the old parent handler. Orphaned handlers, unused classes, and defensive code for removed behavior all add confusion and should be deleted as part of the change.

**Cache-bust external CSS/JS, and bump the version on every change.** When a prototype references external asset files (`<link href="styles.css">`, `<script src="app.js">`) rather than inlining them, append a version query string — e.g. `href="smart-routing.css?v=2026-06-18"` — so browsers don't serve a stale cached copy after the file changes. This is not optional once assets are external: a cached old stylesheet produces confusing, hard-to-diagnose "it looks broken but the code is correct" reports. Every time you edit a referenced asset, bump its version (a date stamp or incrementing integer), and update the query in **every** HTML file that links that asset (keep them in sync). Inline `<style>`/`<script>` blocks don't need this — only externally-referenced files do.

**Implement one interaction at a time.** Don't try to wire up all interactions simultaneously. Get the static render right, then layer in hover states, then click behavior, then transitions.

**Animate all state transitions.** Any interaction that changes visible state must use a transition — never switch abruptly. This applies universally regardless of whether "Animated" was selected as a fidelity level (that option covers entrance animations and motion design; transitions are always expected):
- Expanding/collapsing — `max-height` or `height` transition, not instant toggle
- Showing/hiding elements — fade with `opacity` + `visibility`, not `display: none` swap
- Screen transitions — slide or fade between views
- Hover/active states — `transition` on color, background, transform, shadow
- Drawers, modals, tooltips — entrance and exit animations
Use CSS transitions and animations wherever possible. Prefer `transition: all 0.2s ease` as a baseline and adjust timing to feel natural for the interaction type.

**Expand/collapse height animations — avoid `max-height`.** CSS can't transition `height: auto`, and the common `max-height` workaround produces poor easing: the animation is calculated against the inflated max value, so it appears to lag then snap. Prefer:
- **CSS Grid row trick (best for HTML/CSS, no JS):** wrap the collapsible content in a container with `display: grid; grid-template-rows: 0fr` (collapsed) → `1fr` (expanded), transitioning `grid-template-rows`. The inner element needs `overflow: hidden; min-height: 0`. This animates the true content height with correct easing.
- **`height` + JS measurement:** read the element's `scrollHeight`, set it explicitly, then transition `height`. Use when you need finer control.

Some Figma designs use effects (blurs, gradients, overlays) that are tedious to replicate pixel-perfectly. When approximating, note it in a code comment so the user knows what was simplified:
```css
/* Figma uses a 3-layer blur stack here; simplified to a single box-shadow */
```

**Use the Figma MCP for assets.** If the design uses specific image fills or icon SVGs, use `get_screenshot` or `get_design_context` to retrieve them rather than guessing.

**Extracting icons faithfully — never approximate shapes.** `get_design_context` often returns icons as asset-URL image references (`<img src={figma.com/api/mcp/asset/...} />`), not inline geometry. Do not substitute hand-drawn or look-alike SVGs — fidelity requires the real paths. Instead:
- Use `use_figma` to run `node.exportAsync({ format: 'SVG_STRING' })` on the icon node to get the true vector path data.
- Exported icons may come wrapped in a component-set sheet (multiple variants, an annotation rect); extract just the target variant's `<path>` and frame it with an appropriate `viewBox` rather than rescaling coordinates by hand.
- An icon's stated dimensions usually refer to its **frame** (which often includes padding around the artwork), not the artwork alone. For example, a "16px icon" may be a 16×16 frame with 2px padding and a 12px glyph inside. Reproduce the wrapper + padding so the icon occupies the correct total footprint, rather than sizing the raw SVG to the frame's outer dimension (which would make the artwork too large).

**Components with a `State` variant property MUST implement those states — this is required, not optional.** If a component defines a `State` property, the prototype has to reproduce every state it declares. The possible states are **Default, Hover, Focus, Active, Disabled, and Loading** (a given component may define any subset). Map each to the correct CSS: Hover→`:hover`, Active/Pressed→`:active`, Focus→`:focus-visible`, Disabled→`:disabled` or a `.disabled` class with `pointer-events: none`, Loading→a loading class/spinner. This applies to any component with an interaction (rows, buttons, inputs, chips, toggles, menu items, links, cards — anything). Shipping only the Default state (or only Hover) is incomplete; read the component's full `State` set and implement each declared state.

**Read each state from the variant; don't invent it — and don't assume where the change lives.** To get a state's true styling: find the instance's main component via `getMainComponentAsync`, walk up to its `COMPONENT_SET` parent, and locate the variant matching the target state with the **same other variant properties** as the placed instance (e.g. `Style=Ghost` vs `Style=Filled`, `Size=Medium` vs `Small`, resolve to different styling). Critically, **the visual change for a state often lives on a nested element, not the obvious one** — a tertiary/ghost text button's Hover state may keep the text color identical and instead add a background fill on the inner `_BaseButton` wrapper; a link's hover may be a color change plus underline; a focus state is usually an outline on the frame. So compare the **full node tree** of the Default vs target-state variant (fills, opacity, strokes, effects, text-decoration at every level) to find what actually changes, rather than checking only the text node or assuming a convention. Read resolved values and bound tokens for whatever differs. Interactive text (links) should also be keyboard-focusable (`tabindex`/`<a>`) and use a pointer cursor. The `State` property may sit on a wrapper component rather than the innermost element, so search up and across the instance tree to find the component set that actually carries it. Never fabricate a state style. If no matching variant or token exists, flag it and ask.

**Every state must be traced to a specific component variant — an unverified state is a defect, no exceptions.** When adding any interactive element, every state must be traced to a specific component variant, and a hover/active/focus that wasn't read from the component is a defect even if it uses a token and even if the turn is "display only." Using a `var(--token)` reference does NOT satisfy this if you didn't confirm the component specifies that token — a plausible-looking reference whose value you guessed is still a guess. "Display only," "incidental," or "no new functionality" never lowers this bar: any value written into the artifact is either traced to the design or explicitly flagged to the user as unverified (with what you'd need to confirm it). Flag unverified states rather than letting them ride.

**Always resolve instance-level overrides before implementing.** A component's base vector fill and size are NOT necessarily what renders — the placed instance can override color, size, and other properties. Read the resolved fill/size on the actual instance in context (via `use_figma` walking the node's `fills`/`width`/`height`), not the master component's intrinsic values. For example, a note icon whose base vector is gray may be overridden to amber at the instance. The same applies to text color, opacity, and dimensions on any overridable node.

### Output format

Build to the technology confirmed in the plan — React or HTML, rendered inline in chat. If the user has indicated they want to use the code outside of chat, also write the file to the repo and offer to open it.

---

## Phase 3: Responsive Behavior (post-build, gated on user input)

Responsive behavior is a deliberate, separate phase done *after* the initial faithful build is verified — not assumed during the build. A Figma frame is a single fixed width; it does not tell you how the layout should adapt. Do not invent responsive rules silently.

**Responsiveness means both directions.** It is not only shrinking. The layout must behave when the viewport is *narrower* than the design (columns shrink, content reflows or scrolls) and when it is *wider* (does the grid stretch, stay fixed and left-align, center, or cap at a max width?). Both ends commonly have problems that the fixed-width build hides. Check both.

**This phase requires the user's input on how to proceed.** Before writing any responsive CSS, ask how the layout should behave, because the design usually doesn't specify it. Typical questions:
- How should the layout behave as it grows *wider* than the current content? (stretch columns / fixed width left-aligned / centered / max-width cap)
- How should it behave as it *narrows*? (fluid shrink, then horizontal scroll past a min width; or reflow; or stack)
- What is the narrowest target (desktop, tablet, mobile)?
- For multi-column detail panels: shrink in place, or reduce column count at breakpoints?

If the user has supplied responsive/breakpoint frames in Figma, inspect those for the answer instead of asking.

**After implementing, verify at multiple widths** — screenshot the output at several viewport widths (e.g. the design width, a narrow width, and a wide width) and confirm there is no clipping, awkward stretching, or broken reflow at any of them.

---

## Common Patterns to Watch For

**Variants & states:** Figma components often have multiple variants (Default, Hover, Disabled, Active). Map these to CSS classes or React props, not separate components.

**Visibility-toggle chevrons point toward the action, not the current state.** For expand/collapse toggles, the chevron indicates what a click will do: chevron-down in the collapsed state (click to expand) and chevron-up in the expanded state (click to collapse). This is always true for this type of toggle. When the exported icon is a single chevron, rotate it accordingly (e.g. an up-chevron asset is rotated 180° while collapsed, 0° while expanded) and animate the rotation.

**Auto Layout — Flexbox/Grid:** Figma's Auto Layout maps directly. Horizontal auto-layout = `display: flex; flex-direction: row`. Vertical = column. Gap = `gap`. Fill container = `flex: 1`. Hug contents = `width: fit-content`.

**Constraints — Responsive behavior:** Figma constraints (left/right, center, stretch) translate to CSS positioning and width behavior. "Stretch" = `width: 100%`. "Center" = `margin: auto`.

**Component properties:** Figma component properties (boolean toggles, text overrides, nested instance swaps) become React props. Identify these in `get_design_context` output.

**Overlays and modals:** Often invisible in the static frame — ask the user if there are modal/drawer interactions before concluding the interaction map is complete.

**Horizontally-scrolling tables need a single shared-width track.** When a table scrolls horizontally, the header, the rows, and any expandable child content must all derive their width from one common element (e.g. an inner `grid-track` wrapper sized to content, with header/rows/panels set to `width: 100%` of it). If each resolves its own width independently (e.g. via separate `min-width: 100%`), they desync once scrolling starts — producing a white gap on one side of the header and expandable panels that stay pinned to the viewport instead of scrolling with their row. Verify by scrolling fully right at a narrow width and confirming header, rows, and expanded panels share an identical measured width.

**Badges and indicators are often absolutely-positioned overlays, not inline content.** Count badges, notification dots, status pips, and similar indicators are frequently pinned to a corner of their parent (e.g. overhanging the top-right) via `layoutPositioning: ABSOLUTE` and `constraints` (e.g. horizontal `MAX`, vertical `MIN`) in Figma — not laid out inline within the element's text/content flow. Check `layoutPositioning` and `constraints` on the element: if absolute, reproduce it with `position: absolute` on a `position: relative` parent, offset to overhang the corner. Rendering it inline (as part of the label) is a common and visible mistake.

**Overlay UI must render in a top-level layer, not nested inside an overflow-clipped container.** Dropdowns, popovers, tooltips, menus, and similar overlays that visually escape their trigger's bounds will be clipped if they're `position: absolute` inside an ancestor with `overflow` set (e.g. a scrollable table, a card with `overflow: hidden`). Instead, render the overlay in a top-level layer — append it to `document.body` (or a dedicated portal root) with `position: fixed`, positioned at the trigger via `getBoundingClientRect()`, and a high `z-index`. Reposition on `scroll` (capture phase) and `resize`, and include the overlay element in any click-outside check since it now lives outside the trigger's DOM subtree. This keeps the overlay floating above content without being clipped and without expanding the container.

**Expandable rows: row + detail are one bordered container; the divider sits below the detail.** When a row expands to reveal detail content, the row and its detail belong in a single container with no border between them. The row divider goes at the bottom of the whole expandable unit (after the detail), separating it from the next row — not between the row and its own detail. Put the border on the row wrapper (containing both the main row and the panel), not on the main-row element. This is usually visible in the mockup; check where the divider falls relative to expanded content.

**Form controls (`<button>`, `<input>`, `<select>`, `<textarea>`) do NOT inherit `font-family` — set it explicitly or they silently fall back to a UA font.** When a chip, pill, or label is built as a `<button>` (e.g. a toggle chip or a text button), its text will render in the browser's default form font (often Arial), not the design's font — so a `font-weight: 500` looks wrong even though the weight value is correct, because it's Arial-500 instead of the intended typeface-500. Add `font-family: inherit` (and verify `font-size`/`font-weight` too) on every interactive form-control element. Catch it by measuring computed `font-family` on the element in the render, not just by reading the CSS — the wrong font is easy to miss visually until compared side by side with a non-button instance of the same component.

**One component — one base class with context modifiers; never redefine the same class name twice.** When the same Figma component appears in multiple contexts (e.g. a chip in a toolbar and the same chip inside a filter input), define a single base class for the shared properties and express per-context differences with scoped modifiers (`.context-a .chip { font-size: ... }`, `.context-b .chip { ... }`) — do NOT write two separate rule blocks with the same class name. Duplicate same-class blocks silently collide via the cascade: the later definition wins for every property it sets, so the first context renders with the second's values (a real, hard-to-spot bug). Read the component in each context to confirm which properties actually differ, and scope only those.

**After replacing or rebuilding a CSS/JS block, scan for orphaned braces and now-undefined references.** A find-and-replace that swaps out a rule or function can leave a dangling `}` (or drop a `const` other code still references). These break silently — CSS stops applying at the stray brace; a `var(--x)` pointing at a deleted token resolves to nothing (e.g. `width` becomes 0). After any structural edit, verify the file parses and renders: check for balanced braces around the edited region, grep that referenced tokens/constants are still defined, and re-run the headless render looking for console/page errors and zero-sized or unstyled elements.

**Don't rebuild a container's `innerHTML` inside a click handler for an element within it — update in place.** When a click on a list item (a checkbox option, a toggle row) handler responds by re-rendering the whole list via `innerHTML = ...`, the clicked element is detached from the DOM mid-event. Any later handler in the same event dispatch that calls `container.contains(e.target)` — most commonly a document-level click-outside handler that closes the popover/menu — now sees the target as outside (it's detached) and fires, so the overlay closes the instant you toggle an item. Symptoms: the popover vanishes on the first option click; toggles appear not to work. Fix: update only the affected element in place (toggle its class, swap just its checkbox icon) instead of rebuilding the list; if a full re-render is unavoidable, guard the outside-click check (e.g. ignore targets no longer connected to the document, or stop propagation on the item click). This is easy to miss because the data and re-render logic are both correct — only the event-ordering interaction breaks.

---

## Verify before presenting — compare against the mockup, with an important caveat

Reasoning about code is not enough to catch errors like clipped content, overflow, misalignment, wrong widths, missing backgrounds, or mispositioned elements. Before presenting, verify the output against the design. There are two comparison sources, and you must know which one is actually available to you:

**IMPORTANT capability caveat — confirm before relying on visual diffing.** The intended ideal is to render the output and visually diff it against the Figma mockup image. But `get_screenshot` returns an image hosted at a short-lived URL, and in many environments (e.g. a sandbox with no bash network egress) that URL CANNOT be downloaded or viewed. If you cannot fetch and `view` the Figma screenshot, you cannot do a true visual diff — do not claim or assume you can. Surface this limitation to the user explicitly rather than silently proceeding, because it changes how verification works and how much confidence the output warrants.

**Primary, always-available baseline: the Plugin-API geometry.** Whether or not you can view the mockup image, read the exact specs from `use_figma` (fills, strokes, radii, sizes, padding, gaps, `layoutPositioning`, `constraints`, bound tokens) and check the coded output property-by-property against them. This geometry is the literal source of truth and does not depend on network access. Be thorough — read every property of every element you're reproducing, not a sample.

Procedure:
1. Write the prototype file to the repo (e.g. `smart-routing/new-screen.html` or a descriptively named file at the root).
2. Attempt to capture the Figma reference with `get_screenshot` and view it. If the image cannot be fetched/viewed, say so and fall back to the geometry baseline — do not pretend a visual diff happened.
3. Compare property-by-property against the Plugin-API geometry: backgrounds/fills (present at all? correct token?), text colors, borders, radii, exact sizes, padding, gaps, element positioning (inline vs absolutely-positioned/corner-pinned), and trigger interactions that reveal hidden content (expand panels, open menus) so those states are checked too.
4. Looking only at your own code and declaring a match is NOT verification — you must check it against the design's actual values. Errors like a missing button background or an inline-vs-corner-pinned badge are easy to gloss over otherwise. Per Rule 0, this includes **placement/positioning** — confirm where each element sits (and where overlays anchor relative to their trigger) against the in-context metadata, not against your assumption of where it "should" go.
5. Fix discrepancies and re-verify until the output matches. Only then present.

### Also scan for raw values before presenting

It's easy to tokenize colors and fonts but leave raw literals behind in padding, gaps, sizes, icon dimensions, border widths, radii, or motion timings. Before presenting, grep the output for numeric literals in CSS rules and confirm each is either a token reference or legitimately belongs to the token-definition layer. For example:

```bash
grep -nE ':[^;{]*[0-9]+(px|rem|em|s)\b' output.html \
  | grep -vE 'var\(--' \
  | grep -vE 'viewBox|d="|0fr|1fr|flex: [0-9]'
```

Any hit that isn't a deliberate exception (token definitions, SVG path geometry, keyframe percentages, intrinsic per-element dimensions you've chosen to leave inline) should become a token. Run this sweep as a standard check — spot-fixing one value at a time tends to miss the rest.

---

## Quality Checklist (before presenting output)

- [ ] **Output visually compared against the Figma mockup (including expanded/interactive states)**
- [ ] No content clipped or overflowing unintentionally; text wraps where it should
- [ ] Design tokens match the Figma source, resolved from token definitions
- [ ] All in-scope components are rendered
- [ ] Approved interactions are functional
- [ ] No hardcoded values (color, font, spacing, radii, etc.) in rules that should be tokens; raw values only in the token-definition layer
- [ ] Every text element sets font size/weight/line-height from tokens (no reliance on inherited browser defaults)
- [ ] Typography matches (font, size, weight, line-height)
- [ ] Spacing and layout proportions are faithful
- [ ] Interaction states (hover/focus/etc.) pulled from component variants
- [ ] No dead code left from changes
- [ ] No duplicated declaration blocks; styling shared by 2+ elements is centralized into a base class (+ modifiers for variants), with reuse pushed into the markup — not just grouped selectors over per-instance class names
- [ ] Code is clean and commented where approximations were made
- [ ] Prototype file written to the repo so it can be opened directly in a browser
- [ ] External CSS/JS references carry a version query (`?v=…`) that was bumped for this change, synced across every HTML file that links them
