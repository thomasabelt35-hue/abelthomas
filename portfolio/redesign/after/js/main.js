(function () {
  'use strict';
  /* Demo enquiries are sent to Abel Thomas's WhatsApp. Replace for a real business. */
  var WHATSAPP = '233247142992';
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };

  var burger = $('#burger'), menu = $('#menu');
  function setMenu(o) { burger.classList.toggle('open', o); menu.classList.toggle('open', o); burger.setAttribute('aria-expanded', String(o)); document.body.style.overflow = o ? 'hidden' : ''; }
  burger.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
  $$('#menu a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  $('#send').addEventListener('click', function () {
    var n = $('#n').value.trim(), m = $('#m').value.trim(), d = $('#d').value.trim();
    var t = '[Demo website: Northline Engineering concept] Hello, ' + (n ? "I'm " + n + '. ' : '') +
      'I would like to discuss: ' + $('#s').value + '.' + (d ? ' Preferred time to connect: ' + d + '.' : '') + (m ? '\n' + m : '');
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(t), '_blank', 'noopener');
  });

  var lb = $('#lb'), img = $('#lb img');
  $$('.project-image').forEach(function (b) {
    b.addEventListener('click', function () { img.src = b.dataset.full; img.alt = b.querySelector('img').alt; lb.hidden = false; });
  });
  function closeLb() { lb.hidden = true; }
  $('#lbx').addEventListener('click', closeLb);
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeLb(); setMenu(false); } });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: 0.12 });
    $$('.reveal').forEach(function (el) { io.observe(el); });
  } else { $$('.reveal').forEach(function (el) { el.classList.add('in'); }); }

  $('#yr').textContent = new Date().getFullYear();
})();
