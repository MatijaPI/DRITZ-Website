/**
 * Site-wide progressive enhancement. Everything here is optional: the site is
 * fully usable without JavaScript. Heavy modules are imported lazily.
 */
import { initHeader, initMobileMenu, initTheme } from './ui.ts';
import { initLanguage } from './language.ts';
import { initReveals, initCounters, initStagger, initCycle } from './motion.ts';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

initTheme();
initHeader();
initMobileMenu();
initLanguage();
initStagger();
initReveals(reducedMotion);
initCounters(reducedMotion);
initCycle(reducedMotion);

// Pause / play for all ambient animation (WCAG 2.2.2).
document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]').forEach((btn) =>
  btn.addEventListener('click', () => {
    const root = document.documentElement;
    const paused = root.dataset.motion !== 'paused';
    if (paused) root.dataset.motion = 'paused';
    else delete root.dataset.motion;
    document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]').forEach((b) => {
      b.setAttribute('aria-pressed', String(paused));
      b.setAttribute('aria-label', (paused ? b.dataset.labelPlay : b.dataset.labelPause) ?? '');
    });
  }),
);

const idle = (fn: () => void) =>
  'requestIdleCallback' in window ? window.requestIdleCallback(fn, { timeout: 2000 }) : setTimeout(fn, 600);

if (!reducedMotion) {
  const canvas = document.querySelector<HTMLCanvasElement>('[data-hero-canvas]');
  if (canvas) idle(() => void import('./hero-canvas.ts').then((m) => m.initHeroCanvas(canvas)));

  if (finePointer) {
    idle(() => void import('./cursor.ts').then((m) => m.initCursor()));
    idle(() => void import('./smooth-scroll.ts').then((m) => m.initSmoothScroll()));
  }
}
