# prototypes

HTML prototype gallery for stakeholder review, hosted on GitHub Pages.

## Live URL

- https://hannah-hospicelink.github.io/prototypes/

## Repository Structure

- `index.html` - Landing page with prototype cards
- `smart-routing-grid-scheduling.html` - Current prototype
- `password-gate.js` - Click-time password prompt for prototype links
- `screenshots/` - Thumbnail images used by cards

## How Access Protection Works

This repo uses a lightweight client-side password check:

- Password prompt appears after clicking a `View prototype` link
- Password can be different for each prototype card
- Successful entry is remembered per prototype for the current browser tab session

Implementation details:

- `password-gate.js` intercepts links matching:
  - `a.card-link[data-prototype-password]`
- Each card link can define:
  - `data-prototype-title="..."`
  - `data-prototype-password="..."`

### Important Security Note

This is intentionally light protection for preview purposes only.
Because this is static client-side code, passwords can be discovered by someone inspecting source.

## Add a New Prototype

1. Add your prototype file to the repo root, for example:
   - `new-prototype.html`
2. (Optional) Add a screenshot in `screenshots/`.
3. Duplicate an existing card in `index.html` and update:
   - Card title and description
   - Link `href`
   - `data-prototype-title`
   - `data-prototype-password`
4. Insert the new card before existing cards so the newest prototype appears first on the landing page.

Example link:

```html
<a
  class="card-link"
  href="new-prototype.html"
  data-prototype-title="New Prototype"
  data-prototype-password="replace-with-password"
>View prototype</a>
```

## GitHub Pages Setup

1. In GitHub, open the repository settings.
2. Go to **Pages**.
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
4. Save.

After deployment, `index.html` is served at the site root.

## Local Preview

Open `index.html` directly in a browser, or run a simple local static server.

## Stakeholder Sharing Checklist

Use this quick pass before sending links for review:

1. Confirm each prototype card has the correct `href`, title, and description in `index.html`.
2. Verify each prototype link has the intended `data-prototype-password` value.
3. Open the live site in an incognito window and click each `View prototype` link:
  - Ensure a password prompt appears.
  - Ensure incorrect password is rejected.
  - Ensure correct password opens the expected prototype.
4. Confirm screenshots (if used) load correctly from `screenshots/`.
5. Rotate passwords when sharing with a new stakeholder group by updating `data-prototype-password` values in `index.html`.
