/* ============================================================
   MediSphere Template – Main JS
   Handles: theme toggle, RTL toggle, mobile menu, accordion,
   scroll animations, counters, form validation, toast.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Theme (Dark / Light) ---------- */
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('ms-theme') || 'light';
  root.setAttribute('data-theme', savedTheme);

  document.addEventListener('click', function (e) {
    const themeBtn = e.target.closest('[data-toggle="theme"]');
    if (!themeBtn) return;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('ms-theme', next);
    const icon = themeBtn.querySelector('i');
    if (icon) icon.className = next === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
  });

  /* ---------- RTL Toggle ---------- */
  const savedDir = localStorage.getItem('ms-dir') || 'ltr';
  root.setAttribute('dir', savedDir);

  document.addEventListener('click', function (e) {
    const rtlBtn = e.target.closest('[data-toggle="rtl"]');
    if (!rtlBtn) return;
    const next = root.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
    root.setAttribute('dir', next);
    localStorage.setItem('ms-dir', next);
  });

  /* ---------- Mobile Menu ---------- */
  document.addEventListener('click', function (e) {
    const burger = e.target.closest('[data-toggle="menu"]');
    if (burger) {
      const menu = document.querySelector('.ms-menu');
      if (menu) menu.classList.toggle('open');
    }
  });

  /* ---------- Accordion ---------- */
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.ms-acc-btn');
    if (!btn) return;
    const item = btn.parentElement;
    const wasOpen = item.classList.contains('open');
    item.parentElement.querySelectorAll('.ms-acc-item').forEach(el => el.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });

  /* ---------- AOS (simple IntersectionObserver) ---------- */
  const aosEls = document.querySelectorAll('[data-aos]');
  if ('IntersectionObserver' in window && aosEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-aos-delay') || 0;
          setTimeout(() => entry.target.classList.add('aos-in'), delay);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    aosEls.forEach(el => io.observe(el));
  } else {
    aosEls.forEach(el => el.classList.add('aos-in'));
  }

  /* ---------- Counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const cIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        const dur = 1600;
        const start = performance.now();
        function step(now) {
          const p = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(target * ease).toLocaleString() + suffix;
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = target.toLocaleString() + suffix;
        }
        requestAnimationFrame(step);
        cIO.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(el => cIO.observe(el));
  }

  /* ---------- Toast helper ---------- */
  window.msToast = function (msg, type) {
    let toast = document.querySelector('.ms-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'ms-toast';
      toast.innerHTML = '<i class="ri-checkbox-circle-fill"></i><span></span>';
      document.body.appendChild(toast);
    }
    toast.classList.toggle('error', type === 'error');
    toast.querySelector('i').className = type === 'error' ? 'ri-error-warning-fill' : 'ri-checkbox-circle-fill';
    toast.querySelector('span').textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 3500);
  };

  /* ---------- Form Validation ---------- */
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('[required]').forEach(input => {
        const field = input.closest('.ms-field') || input.closest('.ms-check');
        if (!field) return;
        const val = input.type === 'checkbox' ? input.checked : (input.value || '').trim();
        let ok = !!val;
        if (ok && input.type === 'email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        if (ok && input.type === 'tel') ok = /^[\d\s+()-]{7,}$/.test(val);
        field.classList.toggle('invalid', !ok);
        if (!ok) valid = false;
      });
      if (valid) {
        window.msToast('Thank you! We\'ll be in touch shortly.');
        form.reset();
      } else {
        window.msToast('Please complete all required fields.', 'error');
      }
    });
    form.querySelectorAll('input, textarea, select').forEach(input => {
      input.addEventListener('input', () => {
        const field = input.closest('.ms-field') || input.closest('.ms-check');
        if (field) field.classList.remove('invalid');
      });
    });
  });

  /* ---------- Upload display ---------- */
  document.querySelectorAll('.ms-upload').forEach(box => {
    const input = box.querySelector('input[type="file"]');
    const label = box.querySelector('[data-upload-label]');
    if (!input) return;
    box.addEventListener('click', () => input.click());
    input.addEventListener('change', () => {
      if (input.files && input.files[0] && label) label.textContent = input.files[0].name;
    });
  });

  /* ---------- Year ---------- */
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
