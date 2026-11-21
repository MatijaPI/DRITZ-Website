import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/**
 * Inertial smooth scrolling for mouse/trackpad users only (loaded lazily, never
 * with reduced motion or touch). Native scrolling, keyboard and find-in-page keep working.
 */
export function initSmoothScroll(): void {
  const lenis = new Lenis({
    lerp: 0.12,
    anchors: { offset: -80 },
    autoRaf: true,
    prevent: (node) => node.closest('[data-mobile-menu]') !== null,
  });
  document.addEventListener('visibilitychange', () => (document.hidden ? lenis.stop() : lenis.start()));
}
