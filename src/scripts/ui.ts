const THEME_KEY = 'dritz-theme';

export function initTheme(): void {
  const root = document.documentElement;
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');
  const sync = () => {
    const light = root.dataset.theme === 'light';
    buttons.forEach((b) => {
      b.setAttribute('aria-label', (light ? b.dataset.labelDark : b.dataset.labelLight) ?? '');
      b.setAttribute('aria-pressed', String(light));
    });
  };
  buttons.forEach((b) =>
    b.addEventListener('click', () => {
      const next = root.dataset.theme === 'light' ? 'dark' : 'light';
      const apply = () => {
        root.dataset.theme = next;
        sync();
      };
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {
        /* storage unavailable — theme still switches for this page */
      }
      const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
      if (doc.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
        doc.startViewTransition(apply);
      else apply();
    }),
  );
  sync();
}

export function initHeader(): void {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;
  let lastY = window.scrollY;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    header.toggleAttribute('data-scrolled', y > 8);
    const menuOpen = header.querySelector('[data-mobile-menu][data-open]');
    header.toggleAttribute('data-hidden', !menuOpen && y > 480 && y > lastY + 4);
    if (y < lastY - 4 || y < 480) header.removeAttribute('data-hidden');
    lastY = y;
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

export function initMobileMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  if (!toggle || !menu) return;
  const main = document.getElementById('main');
  const footer = document.querySelector<HTMLElement>('.site-footer');

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', (open ? toggle.dataset.labelClose : toggle.dataset.labelOpen) ?? '');
    menu.hidden = !open;
    menu.toggleAttribute('data-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    [main, footer].forEach((el) => el && (el.inert = open));
    if (open) menu.querySelector<HTMLElement>('a')?.focus();
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 72em)').addEventListener('change', (e) => e.matches && setOpen(false));
}
