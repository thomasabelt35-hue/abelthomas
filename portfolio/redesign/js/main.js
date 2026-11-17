(function () {
  'use strict';
  var $ = function (s) { return document.querySelector(s); };
  var stage = $('#stage'), scaler = $('#scaler'), range = $('#range'), handle = $('#handle');
  var modes = { d: { w: 1280, h: 800, max: 1100 }, m: { w: 390, h: 800, max: 300 } };
  var mode = 'd';

  function layout() {
    var m = modes[mode];
    var avail = stage.parentNode.clientWidth;
    var width = Math.min(avail, m.max);
    var scale = width / m.w;
    stage.style.width = width + 'px';
    stage.style.height = Math.round(m.h * scale) + 'px';
    scaler.style.width = m.w + 'px';
    scaler.style.height = m.h + 'px';
    scaler.style.transform = 'scale(' + scale + ')';
  }

  function slide() { stage.style.setProperty('--x', range.value + '%'); }
  range.addEventListener('input', slide);

  document.querySelectorAll('.seg button').forEach(function (b) {
    b.addEventListener('click', function () {
      mode = b.dataset.m;
      document.querySelectorAll('.seg button').forEach(function (x) {
        var active = x === b;
        x.classList.toggle('on', active);
        x.setAttribute('aria-pressed', String(active));
      });
      layout();
    });
  });

  function setFromPointer(event) {
    var bounds = stage.getBoundingClientRect();
    var percent = ((event.clientX - bounds.left) / bounds.width) * 100;
    range.value = String(Math.max(0, Math.min(100, percent)));
    slide();
  }
  handle.addEventListener('pointerdown', function (event) {
    event.preventDefault();
    handle.setPointerCapture(event.pointerId);
    setFromPointer(event);
  });
  handle.addEventListener('pointermove', function (event) {
    if (handle.hasPointerCapture(event.pointerId)) setFromPointer(event);
  });
  handle.addEventListener('pointerup', function (event) {
    if (handle.hasPointerCapture(event.pointerId)) handle.releasePointerCapture(event.pointerId);
  });
  window.addEventListener('resize', layout);
  layout(); slide();
  $('#yr').textContent = new Date().getFullYear();
})();
