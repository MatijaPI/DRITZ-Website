/**
 * A subtle trailing ring for fine pointers. The native cursor stays visible;
 * the ring grows over interactive elements. Magnetic pull on [data-magnetic].
 */
export function initCursor(): void {
  const ring = document.createElement('div');
  ring.className = 'cursor';
  ring.setAttribute('aria-hidden', 'true');
  document.body.append(ring);

  let x = -100;
  let y = -100;
  let rx = x;
  let ry = y;
  let raf = 0;
  let visible = false;

  const loop = () => {
    rx += (x - rx) * 0.2;
    ry += (y - ry) * 0.2;
    ring.style.translate = `${rx}px ${ry}px`;
    raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.1 ? requestAnimationFrame(loop) : 0;
  };

  window.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType !== 'mouse') return;
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        ring.classList.add('is-visible');
      }
      const interactive = (e.target as HTMLElement).closest('a, button, [data-cursor], input, textarea, select, label, summary');
      ring.classList.toggle('is-hover', Boolean(interactive));
      if (!raf) raf = requestAnimationFrame(loop);
    },
    { passive: true },
  );
  document.documentElement.addEventListener('pointerleave', () => {
    visible = false;
    ring.classList.remove('is-visible');
  });
  window.addEventListener('pointerdown', () => ring.classList.add('is-down'));
  window.addEventListener('pointerup', () => ring.classList.remove('is-down'));

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      el.style.transform = `translate(${dx * 10}px, ${dy * 8}px)`;
    });
    el.addEventListener('pointerleave', () => (el.style.transform = ''));
  });
}
