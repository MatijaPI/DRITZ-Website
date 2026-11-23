/** Sets --reveal-i / --i indexes used by CSS for staggered transitions. */
export function initStagger(): void {
  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      (child as HTMLElement).style.setProperty('--reveal-i', String(i));
      (child as HTMLElement).style.setProperty('--i', String(i));
    });
  });
}

/** Adds `.is-visible` when an element scrolls into view (once). */
export function initReveals(reduced: boolean): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-split], [data-reveal-image], [data-inview]');
  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  targets.forEach((el) => io.observe(el));
}

/** Counts numbers up when visible. The final value is already in the HTML. */
export function initCounters(reduced: boolean): void {
  if (reduced || !('IntersectionObserver' in window)) return;
  const counters = document.querySelectorAll<HTMLElement>('[data-count]');
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        const el = entry.target as HTMLElement;
        const end = Number(el.dataset.count);
        const start = end > 1000 ? end - 24 : 0;
        const duration = 1600;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 4);
          el.textContent = String(Math.round(start + (end - start) * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        el.textContent = String(start);
        requestAnimationFrame(tick);
      }
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => io.observe(el));
}

/**
 * Cycles the last word of the motto (decorative; aria-hidden). The real
 * sentence stays in the DOM for assistive tech and search engines.
 */
export function initCycle(reduced: boolean): void {
  if (reduced) return;
  document.querySelectorAll<HTMLElement>('[data-cycle]').forEach((el) => {
    const words = (el.dataset.cycle ?? '').split('|').filter(Boolean);
    const slot = el.querySelector<HTMLElement>('[data-cycle-word]');
    if (!slot || words.length < 2) return;
    // Keep the accessible name stable while the visible word changes.
    el.setAttribute('aria-label', (el.textContent ?? '').replace(/\s+/g, ' ').trim());
    let i = 0;
    let timer: number | undefined;
    const typeWord = (word: string, done: () => void) => {
      let n = 0;
      const step = () => {
        slot.textContent = word.slice(0, ++n);
        if (n < word.length) timer = window.setTimeout(step, 55);
        else done();
      };
      step();
    };
    const eraseWord = (done: () => void) => {
      const step = () => {
        const text = slot.textContent ?? '';
        if (text.length > 0) {
          slot.textContent = text.slice(0, -1);
          timer = window.setTimeout(step, 28);
        } else done();
      };
      step();
    };
    const next = () => {
      if (document.documentElement.dataset.motion === 'paused') return void (timer = window.setTimeout(next, 1000));
      i = (i + 1) % words.length;
      eraseWord(() => typeWord(words[i]!, () => (timer = window.setTimeout(next, 2600))));
    };
    const start = () => (timer = window.setTimeout(next, 3200));
    const io = new IntersectionObserver(([entry]) => {
      window.clearTimeout(timer);
      if (entry?.isIntersecting) start();
    });
    io.observe(el);
    document.addEventListener('visibilitychange', () => {
      window.clearTimeout(timer);
      if (!document.hidden) start();
    });
  });
}
