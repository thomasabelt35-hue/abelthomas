(function () {
  'use strict';

  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('main-nav');

  function setMenu(open) {
    toggle.classList.toggle('open', open);
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  }

  toggle.addEventListener('click', function () {
    setMenu(!nav.classList.contains('open'));
  });

  nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function () { setMenu(false); });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setMenu(false);
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.service-item, .visual-grid figure, .steps li').forEach(function (item) {
      observer.observe(item);
    });
  }

  document.getElementById('year').textContent = new Date().getFullYear();
})();
