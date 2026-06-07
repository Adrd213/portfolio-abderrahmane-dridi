/* =========================================================
   Portfolio BTS SIO - DRIDI Abd Errahmane
   main.js — Navigation, thème clair/sombre
   ========================================================= */

// --- Thème clair / sombre ---
(function () {
  const STORAGE_KEY = 'bts-sio-theme';
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (btn) {
      btn.textContent = theme === 'dark' ? '☾ Thème sombre' : '☀ Thème clair';
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Charger le thème sauvegardé ou détecter la préférence système
  const saved = localStorage.getItem(STORAGE_KEY);
  const preferred = 'dark'; // Thème sombre par défaut
  applyTheme(saved || preferred);

  if (btn) {
    btn.addEventListener('click', function () {
      const current = root.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
})();

// --- Navigation mobile (hamburger) ---
(function () {
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }
})();

// --- Dropdowns ---
(function () {
  const toggles = document.querySelectorAll('.nav-dropdown-toggle');

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const menu = toggle.nextElementSibling;
      const isOpen = menu.classList.contains('open');

      // Fermer tous les autres menus
      document.querySelectorAll('.dropdown-menu.open').forEach(function (m) {
        m.classList.remove('open');
      });
      document.querySelectorAll('.nav-dropdown-toggle.open').forEach(function (t) {
        t.classList.remove('open');
      });

      if (!isOpen) {
        menu.classList.add('open');
        toggle.classList.add('open');
      }
    });
  });

  // Fermer les dropdowns si on clique ailleurs
  document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-menu.open').forEach(function (m) {
      m.classList.remove('open');
    });
    document.querySelectorAll('.nav-dropdown-toggle.open').forEach(function (t) {
      t.classList.remove('open');
    });
  });
})();

// --- Marquer le lien actif dans la navigation ---
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
})();
