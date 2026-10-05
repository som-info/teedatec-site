/* Teedatec – Amir Namvar portfolio · vanilla JS, no dependencies */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');

  function tr(key, vars) {
    if (window.TeedaI18n) return window.TeedaI18n.t(key, vars) || key;
    return key;
  }

  /* ---------- i18n ---------- */
  if (window.TeedaI18n) window.TeedaI18n.init();

  /* ---------- Theme toggle ---------- */
  var toggle = document.querySelector('.theme-toggle');
  function applyTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (toggle) {
      var next = theme === 'dark' ? 'light' : 'dark';
      var labelKey = next === 'dark' ? 'theme_to_dark' : 'theme_to_light';
      toggle.setAttribute('aria-label', tr(labelKey));
      toggle.setAttribute('title', tr('theme_title'));
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
    navToggle.setAttribute('aria-label', open ? tr('nav_close') : tr('nav_open'));
    menu.classList.toggle('open', open);
  }
  if (navToggle && menu) {
    navToggle.addEventListener('click', function () {
      setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) {
      // Close on nav section links, but not on language pills
      if (e.target.closest('a[href^="#"]')) setMenu(false);
    });
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
  // Re-apply footer copy after year is set
  if (window.TeedaI18n) {
    var footerCopy = document.querySelector('[data-i18n-footer-copy]');
    if (footerCopy) {
      footerCopy.textContent = window.TeedaI18n.format(
        window.TeedaI18n.t('footer_copy'),
        { year: year ? year.textContent : String(new Date().getFullYear()) }
      );
    }
  }

  // Keep theme/nav aria labels in sync when language changes
  document.addEventListener('i18n:change', function () {
    applyTheme(root.getAttribute('data-theme') || 'light', false);
    if (navToggle) {
      var open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-label', open ? tr('nav_close') : tr('nav_open'));
    }
    if (year) {
      var fc = document.querySelector('[data-i18n-footer-copy]');
      if (fc) {
        fc.textContent = window.TeedaI18n.format(tr('footer_copy'), { year: year.textContent });
      }
    }
  });

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
    if (!v) {
      if (el.name === 'name') msg = tr('form_err_required_name');
      else if (el.name === 'email') msg = tr('form_err_required_email');
      else msg = tr('form_err_required_message');
    } else if (el.type === 'email' && !EMAIL_RE.test(v)) {
      msg = tr('form_err_email');
    } else if (el.name === 'message' && v.length < 10) {
      msg = tr('form_err_short');
    }
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
    var subject = tr('form_mailto_subject', { name: data.get('name') });
    var body = data.get('message') + '\n\n— ' + data.get('name') + ' (' + data.get('email') + ')';
    window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    setStatus(tr('form_mailto', { email: to }), 'ok');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = fields.map(validateField).every(Boolean);
    if (!ok) {
      var first = form.querySelector('[aria-invalid="true"]');
      if (first) first.focus();
      setStatus(tr('form_err_fields'), 'err');
      return;
    }
    var data = new FormData(form);
    if (data.get('_gotcha')) return; // bot
    var action = form.getAttribute('action') || '';
    if (action.indexOf(PLACEHOLDER) !== -1 || !window.fetch) { mailtoFallback(data); return; }

    submitBtn.disabled = true;
    setStatus(tr('form_sending'));
    fetch(action, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        form.reset();
        fields.forEach(function (el) { el.removeAttribute('aria-invalid'); });
        setStatus(tr('form_ok'), 'ok');
      })
      .catch(function () {
        setStatus(tr('form_fail'), 'err');
        mailtoFallback(data);
      })
      .finally(function () { submitBtn.disabled = false; });
  });
})();
