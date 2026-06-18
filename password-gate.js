(function () {
  var STORAGE_PREFIX = "prototype_access_granted_v2:";

  // Normalize any URL (relative or absolute) to origin + pathname, so the grant
  // stored when a gallery card is clicked matches the check the destination page
  // runs on itself. Query strings and hashes are ignored.
  function keyFor(url) {
    var u = new URL(url, window.location.href);
    return STORAGE_PREFIX + u.origin + u.pathname;
  }

  function isAllowed(url) {
    return sessionStorage.getItem(keyFor(url)) === "1";
  }

  function allow(url) {
    sessionStorage.setItem(keyFor(url), "1");
  }

  function getMeta(name) {
    var m = document.querySelector('meta[name="' + name + '"]');
    return m ? m.getAttribute("content") : null;
  }

  // ---- Prototype page guard ----
  // A protected page declares <meta name="prototype-password" content="..."> in
  // <head>. Include this script synchronously (no `defer`) right after that meta
  // so the guard runs BEFORE the body parses — a direct visitor is prompted over a
  // blank page and bounced back to the gallery on failure, never seeing the content.
  // (Light, client-side only: the password is visible in the page source.)
  function guardPage() {
    var pw = getMeta("prototype-password");
    if (!pw) return;
    if (isAllowed(window.location.href)) return;

    var title = getMeta("prototype-title") || "this prototype";
    var input = window.prompt("Enter password for " + title + ":");
    if (input === pw) {
      allow(window.location.href);
      return;
    }
    if (input !== null) {
      window.alert("Incorrect password.");
    }
    window.location.replace(getMeta("prototype-back") || "index.html");
  }

  // Run the guard the instant this script executes (before <body> when loaded
  // synchronously in <head>).
  guardPage();

  // ---- Gallery link interception ----
  // Prompt for the password before navigating from a gallery card, and record the
  // grant so the destination page's guard doesn't prompt again this session.
  function wirePrototypeLink(link) {
    var expectedPassword = link.getAttribute("data-prototype-password") || "";
    var prototypeTitle = link.getAttribute("data-prototype-title") || "this prototype";
    var href = link.getAttribute("href");

    if (!expectedPassword || !href) {
      return;
    }

    link.addEventListener("click", function (event) {
      if (isAllowed(href)) {
        return;
      }

      event.preventDefault();

      var input = window.prompt("Enter password for " + prototypeTitle + ":");

      if (input === null) {
        return;
      }

      if (input !== expectedPassword) {
        window.alert("Incorrect password.");
        return;
      }

      allow(href);
      window.location.href = href;
    });
  }

  function wireLinks() {
    var links = document.querySelectorAll("a.card-link[data-prototype-password]");
    links.forEach(wirePrototypeLink);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireLinks);
  } else {
    wireLinks();
  }
})();
