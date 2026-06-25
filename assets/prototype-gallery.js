/* Shared behavior for the prototype gallery details pages.
   Highlights the table-of-contents entry for the section currently in view. */
(function () {
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.details-toc-list a[href^="#"]'));
  if (!tocLinks.length || !('IntersectionObserver' in window)) return;

  var linkById = {};
  tocLinks.forEach(function (link) {
    linkById[link.getAttribute('href').slice(1)] = link;
  });

  var sections = Array.prototype.slice.call(document.querySelectorAll('.details-section[id]'));

  function setActive(id) {
    tocLinks.forEach(function (link) { link.classList.remove('is-active'); });
    if (linkById[id]) linkById[id].classList.add('is-active');
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '0px 0px -65% 0px', threshold: 0 });

  sections.forEach(function (section) { observer.observe(section); });
})();
