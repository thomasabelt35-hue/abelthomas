(function () {
  'use strict';
  var S = window.SITE || {};
  var P = window.PROJECTS || [];
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (t) { var d = document.createElement('div'); d.textContent = t == null ? '' : t; return d.innerHTML; };

  /* ---------- Contact details ---------- */
  var waOk = /^\d{8,15}$/.test(S.whatsapp || '');
  var waUrl = waOk
    ? 'https://wa.me/' + S.whatsapp + '?text=' + encodeURIComponent(S.whatsappMessage || '')
    : '#contact';
  $$('[data-whatsapp]').forEach(function (a) {
    a.href = waUrl;
    if (!waOk) { a.removeAttribute('target'); }
  });
  $$('[data-email]').forEach(function (a) { a.href = 'mailto:' + (S.email || ''); });
  $$('[data-email-text]').forEach(function (el) { el.textContent = S.email || ''; });
  $$('[data-email]:empty').forEach(function (el) { el.textContent = S.email || ''; });
  $$('[data-site="location"]').forEach(function (el) { el.textContent = S.location || ''; });
  $$('[data-site="whatsapp-label"]').forEach(function (el) {
    el.textContent = waOk ? '+' + S.whatsapp : '[Add your WhatsApp number in assets/js/data.js]';
  });

  /* ---------- Social icons ---------- */
  var icons = {
    instagram: 'M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.9 1.4 1.4 0 000-2.9z',
    twitter: 'M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l7.9-9.1L1 2h7l4.8 6.4L18.2 2zm-1.2 18h1.9L7 3.9H5L17 20z',
    facebook: 'M24 12a12 12 0 10-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0024 12z',
    github: 'M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z',
    linkedin: 'M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zm1.8 13.1H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z'
  };
  var rail = $('#rail');
  Object.keys(S.socials || {}).forEach(function (k) {
    var url = S.socials[k];
    if (!url || !icons[k]) return;
    var a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', k);
    a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + icons[k] + '"/></svg>';
    rail.appendChild(a);
  });

  /* ---------- Portfolio ---------- */
  var grid = $('#projects'), filters = $('#filters');
  function card(p) {
    var thumb = p.image
      ? '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + ' website preview" loading="lazy" width="640" height="400">'
      : '<div class="mock" aria-hidden="true"><i></i><i></i><i></i><b></b></div>';
    var badge = p.placeholder ? '<span class="badge">Placeholder</span>' : '';
    var tags = (p.tags || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    var links = (p.live ? '<a href="' + esc(p.live) + '" target="_blank" rel="noopener">' + esc(p.liveLabel || 'View Live Demo') + ' &rarr;</a>' : '') +
                (p.code ? '<a href="' + esc(p.code) + '" target="_blank" rel="noopener">Code</a>' : '') +
                (p.showLive && !p.live ? '<button type="button" disabled>View Live Demo</button>' : '');
    return '<article class="project reveal" data-type="' + esc(p.type) + '">' +
      '<div class="thumb">' + thumb + badge + '</div>' +
      '<div class="p-body"><span class="p-type">' + esc(p.type) + '</span>' +
      '<h3>' + esc(p.title) + '</h3><p>' + esc(p.description) + '</p>' +
      '<ul class="tags">' + tags + '</ul>' +
      (links ? '<div class="p-links">' + links + '</div>' : '') + '</div></article>';
  }
  grid.innerHTML = P.map(card).join('');
  var types = ['All'].concat(P.map(function (p) { return p.type; }).filter(function (t, i, a) { return t && a.indexOf(t) === i; }));
  if (types.length > 2) {
    filters.innerHTML = types.map(function (t, i) {
      return '<button type="button" data-f="' + esc(t) + '" class="' + (i ? '' : 'active') + '">' + esc(t) + '</button>';
    }).join('');
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      $$('button', filters).forEach(function (x) { x.classList.toggle('active', x === b); });
      $$('.project', grid).forEach(function (c) {
        c.classList.toggle('hide', b.dataset.f !== 'All' && c.dataset.type !== b.dataset.f);
      });
    });
  } else { filters.remove(); }

  /* ---------- Reveal on scroll (with stagger) ---------- */
  $$('.cards, .projects, .hero-copy, .contact-grid').forEach(function (grp) {
    $$('.reveal', grp).forEach(function (el, i) { el.style.setProperty('--d', (i * 0.09) + 's'); });
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    $$('.reveal').forEach(function (el) { io.observe(el); });
  } else { $$('.reveal').forEach(function (el) { el.classList.add('in'); }); }

  /* ---------- Header, menu ---------- */
  var header = $('#header'), burger = $('#burger'), nav = $('#nav');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 20); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  function closeMenu() { burger.classList.remove('open'); nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
  burger.addEventListener('click', function () {
    var open = !nav.classList.contains('open');
    burger.classList.toggle('open', open); nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open)); document.body.style.overflow = open ? 'hidden' : '';
  });
  $$('a', nav).forEach(function (a) { a.addEventListener('click', closeMenu); });

  /* ---------- Active section, dots, pager ---------- */
  var secs = $$('main .panel'), dots = $('#dots');
  dots.innerHTML = secs.map(function (s, i) { return '<button type="button" data-i="' + i + '" tabindex="-1"></button>'; }).join('');
  dots.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (b) secs[b.dataset.i].scrollIntoView({ behavior: 'smooth' });
  });
  var prev = $('#pg-prev'), next = $('#pg-next');
  function setActive(i) {
    var id = secs[i].id;
    $$('[data-nav]').forEach(function (a) { a.classList.toggle('active', a.dataset.nav === id); });
    $$('button', dots).forEach(function (d, k) { d.classList.toggle('active', k === i); });
    var p = secs[i - 1], n = secs[i + 1];
    prev.classList.toggle('off', !p); next.classList.toggle('off', !n);
    if (p) { prev.href = '#' + p.id; $('em', prev).textContent = p.dataset.title; }
    if (n) { next.href = '#' + n.id; $('em', next).textContent = n.dataset.title; }
  }
  var current = 0; setActive(0);
  function detect() {
    var mid = window.innerHeight * 0.4, idx = 0;
    secs.forEach(function (s, i) { if (s.getBoundingClientRect().top <= mid) idx = i; });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) idx = secs.length - 1;
    if (idx !== current) { current = idx; setActive(idx); }
  }
  window.addEventListener('scroll', detect, { passive: true }); detect();

  /* ---------- Contact form (no backend, no stored data) ---------- */
  function message() {
    var name = $('#f-name').value.trim(), type = $('#f-type').value, msg = $('#f-msg').value.trim();
    return 'Hello Abel, ' + (name ? "I'm " + name + '. ' : '') + 'I need: ' + type + '.' + (msg ? '\n\n' + msg : '');
  }
  $('#send-wa').addEventListener('click', function () {
    if (!waOk) { alert('Add your WhatsApp number in assets/js/data.js first.'); return; }
    window.open('https://wa.me/' + S.whatsapp + '?text=' + encodeURIComponent(message()), '_blank', 'noopener');
  });
  $('#send-mail').addEventListener('click', function () {
    window.location.href = 'mailto:' + (S.email || '') + '?subject=' + encodeURIComponent('Website project enquiry') + '&body=' + encodeURIComponent(message());
  });

  $('#year').textContent = new Date().getFullYear();
})();
