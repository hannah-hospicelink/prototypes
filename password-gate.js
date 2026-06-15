(function () {
  var STORAGE_PREFIX = "prototype_access_granted_v2:";

  function keyForHref(href) {
    return STORAGE_PREFIX + href;
  }

  function isAllowed(href) {
    return sessionStorage.getItem(keyForHref(href)) === "1";
  }

  function allow(href) {
    sessionStorage.setItem(keyForHref(href), "1");
  }

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

  function init() {
    var links = document.querySelectorAll("a.card-link[data-prototype-password]");
    links.forEach(wirePrototypeLink);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
