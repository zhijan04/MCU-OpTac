/* Operativo Táctico · Grupo MCU */
(function () {
  'use strict';

  // Número de WhatsApp confirmado en el tríptico: 33 4368 5894 (México, +52)
  var WHATSAPP_NUMBER = '523343685894';

  // Enlaces de WhatsApp con mensaje inicial de cotización
  document.querySelectorAll('.js-wa').forEach(function (a) {
    var msg = a.getAttribute('data-msg') || 'Hola, me gustaría solicitar una cotización.';
    a.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
  });

  // Encabezado al hacer scroll
  var header = document.querySelector('.site-header');
  var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Menú móvil
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
  }
  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); toggle.focus(); }
  });
  window.matchMedia('(min-width: 961px)').addEventListener('change', function (m) { if (m.matches) setMenu(false); });

  // Sección activa en la navegación
  var links = Array.prototype.slice.call(document.querySelectorAll('.main-nav ul a'));
  var map = {};
  links.forEach(function (l) { map[l.getAttribute('href').slice(1)] = l; });
  var ids = ['inicio', 'categorias', 'uniformes', 'accesorios', 'vehiculos', 'nosotros', 'contacto'];
  var sections = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.id === 'categorias' ? 'inicio' : en.target.id;
        links.forEach(function (l) { l.classList.remove('is-active'); l.removeAttribute('aria-current'); });
        if (map[id]) { map[id].classList.add('is-active'); map[id].setAttribute('aria-current', 'true'); }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
