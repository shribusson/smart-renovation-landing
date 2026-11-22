(function () {
  const THEMES = {
    base: {
      css: '/themes/base.css',
      photo: '/assets/hero-dark.jpg',
      accent: '#C5A065',
      fonts:
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap',
    },
    d1: {
      css: '/themes/d1.css',
      photo: '/assets/hero-light.jpg',
      accent: '#8B5E34',
      fonts:
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Lora:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap',
    },
    d2: {
      css: '/themes/d2.css',
      photo: '/assets/hero-light.jpg',
      accent: '#D9480F',
      fonts:
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700;800&display=swap',
    },
    d3: {
      css: '/themes/d3.css',
      photo: '/assets/hero-dark.jpg',
      accent: '#D6B47C',
      fonts:
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap',
    },
  };

  const root = document.documentElement;
  const rawDefault = root.dataset.defaultDesign;
  const defaultDesign = THEMES[rawDefault] ? rawDefault : 'base';

  function ensureFont(fontsUrl) {
    if (!fontsUrl) return;
    let fontLink = document.getElementById('themeFontLink');
    if (!fontLink) {
      const existing = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).find((el) =>
        (el.getAttribute('href') || '').includes('fonts.googleapis.com')
      );
      if (existing && existing.getAttribute('href') === fontsUrl) {
        existing.id = 'themeFontLink';
        return;
      }
      fontLink = document.createElement('link');
      fontLink.id = 'themeFontLink';
      fontLink.rel = 'stylesheet';
      document.head.appendChild(fontLink);
    }
    if (fontLink.getAttribute('href') !== fontsUrl) {
      fontLink.setAttribute('href', fontsUrl);
    }
  }

  function applyDesign(designKey, updateHistory) {
    const key = THEMES[designKey] ? designKey : defaultDesign;
    const cfg = THEMES[key];

    root.dataset.design = key;

    const themeLink = document.getElementById('themeStylesheet');
    if (themeLink && themeLink.getAttribute('href') !== cfg.css) {
      themeLink.setAttribute('href', cfg.css);
    }

    ensureFont(cfg.fonts);

    document.querySelectorAll('.hero-photo-frame img').forEach((img) => {
      if (img.getAttribute('src') !== cfg.photo) {
        img.setAttribute('src', cfg.photo);
      }
    });

    document.querySelectorAll('.brand-mark svg path').forEach((el) => {
      el.setAttribute('stroke', cfg.accent);
    });
    document.querySelectorAll('.brand-mark svg circle').forEach((el) => {
      el.setAttribute('fill', cfg.accent);
    });

    document.querySelectorAll('[data-design-btn]').forEach((btn) => {
      const isActive = btn.dataset.designBtn === key;
      btn.classList.toggle('is-current', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    document.querySelectorAll('a[data-copy-link]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;
      try {
        const url = new URL(href, window.location.origin);
        if (key === 'base') {
          url.searchParams.delete('design');
        } else {
          url.searchParams.set('design', key);
        }
        link.setAttribute('href', url.toString());
      } catch (_) {
        // Keep original href on unexpected values
      }
    });

    if (updateHistory && window.history && window.history.replaceState) {
      const nextUrl = new URL(window.location.href);
      if (key === defaultDesign) {
        nextUrl.searchParams.delete('design');
      } else {
        nextUrl.searchParams.set('design', key);
      }
      const relative = nextUrl.pathname + nextUrl.search + nextUrl.hash;
      window.history.replaceState(null, '', relative);
    }
  }

  document.querySelectorAll('[data-design-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyDesign(btn.dataset.designBtn, true);
    });
  });

  const urlDesign = new URLSearchParams(window.location.search).get('design');
  const initialDesign = THEMES[urlDesign] ? urlDesign : defaultDesign;
  applyDesign(initialDesign, false);
})();
