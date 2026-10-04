/* Teedatec – Amir Namvar portfolio · vanilla JS, no dependencies */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');

  /* ---------- Theme toggle ---------- */
  var toggle = document.querySelector('.theme-toggle');
  function applyTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (toggle) {
      var next = theme === 'dark' ? 'light' : 'dark';
      toggle.setAttribute('aria-label', 'Switch to ' + next + ' theme');
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    }
    if (persist) { try { localStorage.setItem('theme', theme); } catch (e) { /* storage unavailable */ } }
  }
  applyTheme(root.getAttribute('data-theme') || 'light', false);
  if (toggle) {
    toggle.addEventListener('click', function () {
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
    });
  }
  // Follow OS changes only if the user hasn't chosen explicitly
  if (window.matchMedia) {
    var mq = matchMedia('(prefers-color-scheme: dark)');
    var onChange = function (e) {
      var saved = null;
      try { saved = localStorage.getItem('theme'); } catch (err) { /* ignore */ }
      if (!saved) applyTheme(e.matches ? 'dark' : 'light', false);
    };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
  }

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  function setMenu(open) {
    if (!navToggle || !menu) return;
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('open', open);
  }
  if (navToggle && menu) {
    navToggle.addEventListener('click', function () {
      setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); navToggle.focus(); }
    });
    window.addEventListener('resize', function () { if (window.innerWidth > 980) setMenu(false); });
  }

  /* ---------- Header shadow + active link ---------- */
  var header = document.querySelector('.site-header');
  var onScroll = function () { if (header) header.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var links = menu ? Array.prototype.slice.call(menu.querySelectorAll('a[href^="#"]')) : [];
  if ('IntersectionObserver' in window && links.length) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('active'); a.removeAttribute('aria-current'); });
        var link = byId[en.target.id];
        if (link) { link.classList.add('active'); link.setAttribute('aria-current', 'true'); }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
    var hero = document.querySelector('.hero');
    if (hero) spy.observe(hero); // clears highlight when back at the top
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Contact form ---------- */
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = form.querySelector('.form-status');
  var submitBtn = form.querySelector('button[type="submit"]');
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  // TODO(owner): replace YOUR_FORM_ID in index.html's form `action`. While the placeholder is
  // present, submissions fall back to a pre-filled mailto: link.
  var PLACEHOLDER = 'YOUR_FORM_ID';

  function validateField(el) {
    var err = document.getElementById(el.id + '-err');
    var v = el.value.trim();
    var msg = '';
    if (!v) msg = 'Please enter your ' + (el.name === 'message' ? 'message' : el.name) + '.';
    else if (el.type === 'email' && !EMAIL_RE.test(v)) msg = 'Please enter a valid email address.';
    else if (el.name === 'message' && v.length < 10) msg = 'Please write at least 10 characters.';
    el.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (msg) el.setAttribute('aria-describedby', err.id); else el.removeAttribute('aria-describedby');
    if (err) err.textContent = msg;
    return !msg;
  }
  var fields = Array.prototype.slice.call(form.querySelectorAll('input[required], textarea[required]'));
  fields.forEach(function (el) {
    el.addEventListener('blur', function () { if (el.value) validateField(el); });
    el.addEventListener('input', function () { if (el.getAttribute('aria-invalid') === 'true') validateField(el); });
  });

  function setStatus(text, kind) {
    status.textContent = text;
    status.className = 'form-status' + (kind ? ' ' + kind : '');
  }
  function mailtoFallback(data) {
    var to = form.getAttribute('data-mailto') || 'infosomamir@gmail.com';
    var subject = 'Project inquiry from ' + data.get('name');
    var body = data.get('message') + '\n\n— ' + data.get('name') + ' (' + data.get('email') + ')';
    window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    setStatus('Opening your email app… If nothing happens, email me at ' + to + '.', 'ok');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = fields.map(validateField).every(Boolean);
    if (!ok) {
      var first = form.querySelector('[aria-invalid="true"]');
      if (first) first.focus();
      setStatus('Please fix the highlighted fields.', 'err');
      return;
    }
    var data = new FormData(form);
    if (data.get('_gotcha')) return; // bot
    var action = form.getAttribute('action') || '';
    if (action.indexOf(PLACEHOLDER) !== -1 || !window.fetch) { mailtoFallback(data); return; }

    submitBtn.disabled = true;
    setStatus('Sending…');
    fetch(action, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        form.reset();
        fields.forEach(function (el) { el.removeAttribute('aria-invalid'); });
        setStatus('Thanks! Your message has been sent. I\'ll get back to you soon.', 'ok');
      })
      .catch(function () {
        setStatus('Sorry, the message could not be sent. Opening your email app instead…', 'err');
        mailtoFallback(data);
      })
      .finally(function () { submitBtn.disabled = false; });
  });
})();
