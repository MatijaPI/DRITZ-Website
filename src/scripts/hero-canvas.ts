/**
 * Hero background: PCB-style traces on the blueprint grid with signal pulses
 * travelling along them. Pure 2D canvas, ~4 KB. Loaded on idle, paused when
 * off-screen or in a background tab, never loaded with reduced motion.
 * The static CSS grid underneath is the no-JS / reduced-motion fallback.
 */
type Pt = { x: number; y: number };
type Trace = { pts: Pt[]; len: number; seg: number[]; color: 0 | 1 };
type Pulse = { trace: Trace; d: number; speed: number };

const CELL = 24;
const DIRS: Pt[] = [
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 },
  { x: -1, y: 1 },
  { x: -1, y: 0 },
  { x: -1, y: -1 },
  { x: 0, y: -1 },
  { x: 1, y: -1 },
];

function rand(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

export function initHeroCanvas(canvas: HTMLCanvasElement): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const staticLayer = document.createElement('canvas');
  const sctx = staticLayer.getContext('2d');
  if (!sctx) return;

  let w = 0;
  let h = 0;
  let dpr = 1;
  let traces: Trace[] = [];
  let pulses: Pulse[] = [];
  let running = false;
  let inView = true;
  let raf = 0;
  const pointer = { x: -9999, y: -9999, active: false };
  let colors = readColors();

  function readColors() {
    const cs = getComputedStyle(document.documentElement);
    const light = document.documentElement.dataset.theme === 'light';
    return {
      trace: light ? 'rgba(16, 23, 42, 0.13)' : 'rgba(155, 175, 220, 0.16)',
      pad: light ? 'rgba(16, 23, 42, 0.22)' : 'rgba(185, 194, 216, 0.28)',
      a: cs.getPropertyValue('--amber-500').trim() || '#ffb300',
      b: light ? '#4a6b00' : cs.getPropertyValue('--lime-500').trim() || '#9bd21c',
      glow: light ? 'rgba(255, 179, 0, 0.12)' : 'rgba(255, 179, 0, 0.10)',
    };
  }

  function buildTraces(): void {
    const cols = Math.ceil(w / CELL);
    const rows = Math.ceil(h / CELL);
    const occupied = new Set<string>();
    const count = Math.round(Math.min(70, Math.max(18, (w * h) / 16000)));
    traces = [];
    for (let i = 0; i < count; i++) {
      // Bias starting points to the right half, away from the headline.
      let cx = Math.floor(rand(cols * (w > 900 ? 0.42 : 0.05), cols));
      let cy = Math.floor(rand(0, rows));
      let dir = Math.floor(rand(0, 8));
      const pts: Pt[] = [{ x: cx * CELL, y: cy * CELL }];
      const steps = Math.floor(rand(6, 22));
      for (let s = 0; s < steps; s++) {
        if (Math.random() < 0.28) dir = (dir + (Math.random() < 0.5 ? 1 : 7)) % 8;
        const d = DIRS[dir]!;
        const nx = cx + d.x;
        const ny = cy + d.y;
        const key = `${nx},${ny}`;
        if (nx < 0 || ny < 0 || nx > cols || ny > rows || occupied.has(key)) break;
        occupied.add(key);
        cx = nx;
        cy = ny;
        const last = pts[pts.length - 1]!;
        const prev = pts[pts.length - 2];
        const pt = { x: cx * CELL, y: cy * CELL };
        // Merge collinear points so each segment is a straight run.
        if (
          prev &&
          Math.sign(last.x - prev.x) === Math.sign(pt.x - last.x) &&
          Math.sign(last.y - prev.y) === Math.sign(pt.y - last.y)
        ) {
          pts[pts.length - 1] = pt;
        } else pts.push(pt);
      }
      if (pts.length < 2) continue;
      const seg: number[] = [];
      let len = 0;
      for (let p = 1; p < pts.length; p++) {
        const l = Math.hypot(pts[p]!.x - pts[p - 1]!.x, pts[p]!.y - pts[p - 1]!.y);
        seg.push(l);
        len += l;
      }
      if (len < CELL * 3) continue;
      traces.push({ pts, len, seg, color: Math.random() < 0.72 ? 0 : 1 });
    }
    pulses = traces.filter(() => Math.random() < 0.55).map((trace) => ({ trace, d: rand(0, trace.len), speed: rand(40, 110) }));
  }

  function drawStatic(): void {
    staticLayer.width = w * dpr;
    staticLayer.height = h * dpr;
    sctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    sctx!.lineWidth = 1.25;
    sctx!.lineJoin = 'round';
    sctx!.lineCap = 'round';
    for (const t of traces) {
      sctx!.strokeStyle = colors.trace;
      sctx!.beginPath();
      t.pts.forEach((p, i) => (i ? sctx!.lineTo(p.x, p.y) : sctx!.moveTo(p.x, p.y)));
      sctx!.stroke();
      const end = t.pts[t.pts.length - 1]!;
      const start = t.pts[0]!;
      sctx!.fillStyle = colors.pad;
      sctx!.beginPath();
      sctx!.arc(end.x, end.y, 3, 0, Math.PI * 2);
      sctx!.fill();
      sctx!.strokeStyle = colors.pad;
      sctx!.beginPath();
      sctx!.arc(start.x, start.y, 4.5, 0, Math.PI * 2);
      sctx!.stroke();
    }
  }

  function pointAt(t: Trace, d: number): Pt {
    let rest = d;
    for (let i = 0; i < t.seg.length; i++) {
      const l = t.seg[i]!;
      if (rest <= l) {
        const a = t.pts[i]!;
        const b = t.pts[i + 1]!;
        const k = rest / l;
        return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k };
      }
      rest -= l;
    }
    return t.pts[t.pts.length - 1]!;
  }

  function resize(): void {
    const rect = canvas.getBoundingClientRect();
    w = Math.max(1, Math.round(rect.width));
    h = Math.max(1, Math.round(rect.height));
    dpr = Math.min(window.devicePixelRatio || 1, w < 700 ? 1.25 : 1.75);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    buildTraces();
    drawStatic();
  }

  let last = performance.now();
  function frame(now: number): void {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    ctx!.setTransform(1, 0, 0, 1, 0, 0);
    ctx!.clearRect(0, 0, canvas.width, canvas.height);
    ctx!.drawImage(staticLayer, 0, 0);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (pointer.active) {
      const g = ctx!.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 220);
      g.addColorStop(0, colors.glow);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx!.fillStyle = g;
      ctx!.fillRect(pointer.x - 220, pointer.y - 220, 440, 440);
    }

    for (const p of pulses) {
      const near = pointer.active
        ? Math.max(0, 1 - Math.hypot(pointAt(p.trace, p.d).x - pointer.x, pointAt(p.trace, p.d).y - pointer.y) / 260)
        : 0;
      p.d += p.speed * (1 + near * 2.5) * dt;
      if (p.d > p.trace.len + 60) p.d = -rand(20, 200);
      if (p.d < 0) continue;
      const color = p.trace.color ? colors.b : colors.a;
      const tail = 46;
      const head = pointAt(p.trace, Math.min(p.d, p.trace.len));
      const tailPt = pointAt(p.trace, Math.max(0, p.d - tail));
      const grad = ctx!.createLinearGradient(tailPt.x, tailPt.y, head.x, head.y);
      grad.addColorStop(0, 'rgba(0,0,0,0)');
      grad.addColorStop(1, color);
      ctx!.strokeStyle = grad;
      ctx!.lineWidth = 2;
      ctx!.beginPath();
      const steps = 6;
      for (let s = 0; s <= steps; s++) {
        const q = pointAt(p.trace, Math.max(0, p.d - tail + (tail * s) / steps));
        if (s) ctx!.lineTo(q.x, q.y);
        else ctx!.moveTo(q.x, q.y);
      }
      ctx!.stroke();
      if (p.d <= p.trace.len) {
        ctx!.fillStyle = color;
        ctx!.shadowColor = color;
        ctx!.shadowBlur = 12;
        ctx!.beginPath();
        ctx!.arc(head.x, head.y, 2.2, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.shadowBlur = 0;
      }
    }
    raf = requestAnimationFrame(frame);
  }

  const paused = () => document.documentElement.dataset.motion === 'paused';

  function start(): void {
    if (running || !inView || document.hidden || paused()) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }

  function stop(): void {
    running = false;
    cancelAnimationFrame(raf);
  }

  resize();
  canvas.classList.add('is-ready');
  start();

  let resizeTimer: number | undefined;
  new ResizeObserver(() => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resize, 150);
  }).observe(canvas);

  new IntersectionObserver(([entry]) => {
    inView = Boolean(entry?.isIntersecting);
    if (inView) start();
    else stop();
  }).observe(canvas);

  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

  new MutationObserver((records) => {
    if (records.some((r) => r.attributeName === 'data-theme')) {
      colors = readColors();
      drawStatic();
    }
    if (paused()) stop();
    else start();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-motion'] });

  const host = canvas.parentElement ?? canvas;
  host.addEventListener(
    'pointermove',
    (e) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.active = true;
    },
    { passive: true },
  );
  host.addEventListener('pointerleave', () => (pointer.active = false));
}
