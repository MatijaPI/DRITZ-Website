const LANG_KEY = 'dritz-lang';
const BANNER_KEY = 'dritz-lang-banner-dismissed';

function store(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * Remembers an explicit language choice (switcher or banner) and shows the
 * suggestion banner to visitors whose browser language differs from the page.
 * Never redirects automatically — the early redirect in BaseLayout only acts
 * on a choice the visitor made themselves.
 */
export function initLanguage(): void {
  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest<HTMLElement>('[data-set-lang]');
    if (link?.dataset.setLang) store(LANG_KEY, link.dataset.setLang);
  });

  const banner = document.querySelector<HTMLElement>('[data-lang-banner]');
  if (!banner) return;
  const pageLang = document.documentElement.dataset.locale;
  const target = banner.dataset.targetLang;
  if (read(LANG_KEY) || read(BANNER_KEY)) return;

  const browser = (navigator.languages?.[0] ?? navigator.language ?? '').toLowerCase();
  const browserIsSl = browser.startsWith('sl');
  // Suggest English to non-Slovenian browsers on Slovenian pages, and Slovenian to Slovenian browsers on English pages.
  const suggest = (pageLang === 'sl' && target === 'en' && !browserIsSl) || (pageLang === 'en' && target === 'sl' && browserIsSl);
  if (!suggest) return;

  window.setTimeout(() => {
    banner.hidden = false;
  }, 1200);
  banner.querySelector('[data-lang-dismiss]')?.addEventListener('click', () => {
    banner.hidden = true;
    store(BANNER_KEY, '1');
    store(LANG_KEY, pageLang ?? 'sl');
  });
}
