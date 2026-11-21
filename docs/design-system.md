# DRITZ design system — "Blueprint Lab"

A dark engineering canvas, a faint blueprint grid, and the DRITZ amber as the signal that something is alive.
The identity grows out of the existing logo: every letter of "DRITZ" is a science object drawn in a thick
rounded line (rocket D, 5G/signal R, iodine-tile I, syringe-and-DNA T, robot-arm Z). The site keeps that line
language — icons, the robot-arm illustration and the region diagram all use rounded strokes.

Source of truth: `src/styles/tokens.css` (tokens), `src/styles/global.css` (base + primitives).

## Logo

- `src/assets/brand/logo-horizontal.svg` and `logo-vertical.svg` were **traced from the original PNGs** (potrace,
  then rounded to 0.1 units, ~38 KB / 44 KB). They use `fill="currentColor"` and a path with `id="dritz"`, so
  `<Logo />` references the cached file with `<use href="…#dritz">` and colours it from CSS (`--logo-ink`).
- `<Logo letter={0..4} />` crops one icon-letter (used in the "What does DRITZ stand for?" acronym block and
  as the iodine-tile illustration on the Activities page).
- Favicon/app icon: `src/assets/brand/mark.svg` — a rounded "D" whose window and speed lines echo the logo's
  rocket. Regenerate the PNG/ICO set with `node scripts/generate-icons.ts`.
- The original PNG logos remain at `/assets/images/logo-*.png`.

## Colour

| Token                | Dark (default)        | Light           | Use                                        |
| -------------------- | --------------------- | --------------- | ------------------------------------------ |
| `--bg`               | `#070a12` ink         | `#fbf9f3` paper | page background                            |
| `--bg-elevated`      | `#0b1020`             | `#ffffff`       | footer, manifesto, CTA                     |
| `--surface`          | ink 72 %              | white 78 %      | cards                                      |
| `--text`             | `#f4f1e8`             | `#070a12`       | body text                                  |
| `--text-muted`       | `#b9c2d8`             | `#3d4766`       | secondary text (AA on bg)                  |
| `--accent`           | `#ffb300`             | `#ffb300`       | DRITZ amber: buttons, markers, highlights  |
| `--accent-text`      | `#ffc233`             | `#8a5a00`       | amber used **as text** (AA in both themes) |
| `--go` / `--go-text` | `#9bd21c` / `#b4e34a` | `#4a6b00`       | lime: "status OK", second pulse colour     |
| `--alert`            | `#ff5a4e`             | `#b3261e`       | form errors only                           |

Brand colours evolve the old palette: amber `#ffb300` (unchanged), lime `#8ac500` → `#9bd21c`, red `#ae0000` →
`#ff5a4e` (used sparingly). Amber is never used for body-size text on the light theme — `--accent-text` swaps to a
dark amber there.

## Typography

| Role    | Font                            | Notes                                                              |
| ------- | ------------------------------- | ------------------------------------------------------------------ |
| Display | **Bricolage Grotesque** 500–800 | headlines, numbers, manifesto; tight tracking (−0.035em)           |
| Body    | **Inter** 400–800               | 16–18 px fluid, line-height 1.65                                   |
| Mono    | **JetBrains Mono** 400–700      | eyebrows, labels, buttons, dates — the "engineering console" voice |

### Fonts

Self-hosted variable WOFF2 files in `src/assets/fonts/`, subset to Basic Latin + Latin-1 + `č ć đ š ž` (+ capitals),
`ø` and typographic punctuation, with the optical-size axis pinned (35 KB + 29 KB + 29 KB). `font-display: swap`,
metric-adjusted fallbacks, display + body fonts preloaded. To regenerate (e.g. to add characters):

```sh
pip install fonttools brotli
fonttools varLib.instancer "Inter[opsz,wght].ttf" opsz=14 wght=400:800 -o inter-i.ttf
pyftsubset inter-i.ttf --unicodes="U+0020-007E,U+00A0-00FF,U+0106-0107,U+010C-010D,U+0110-0111,U+0152-0153,U+0160-0161,U+0178,U+017D-017E,U+02C6,U+02DC,U+2010-2027,U+2030,U+2039-203A,U+20AC,U+2122,U+2190-2193,U+2197,U+2212,U+2713,U+00D7" \
  --layout-features="kern,liga,calt,tnum,case,ccmp,locl,mark,mkmk" --flavor=woff2 --no-hinting --desubroutinize --output-file=inter-var.woff2
```

(Bricolage: `opsz=48 wdth=100 wght=500:800`; JetBrains Mono: `wght=400:700`.) Sources: Google Fonts repository, SIL OFL 1.1.

### Fluid type scale (`--step-*`, 360 → 1440 px)

`-1` 13–14 · `0` 16–18 · `1` 19–22 · `2` 22–30 · `3` 27–40 · `4` 33–56 · `5` 38–76 · `6` 42–100 px.
Helpers: `.display`, `.h1`, `.h2`, `.h3`, `.lead`, `.eyebrow`, `.mono`.

## Space, layout, radii, shadows

- Spacing: `--space-3xs` 4 px … `--space-3xl` 80–144 px (fluid at the large end).
- Container 76 rem (`.container`), narrow 46 rem (`.container--narrow`), fluid gutter 20–48 px.
- Radii: 4 / 8 / 14 / 22 px / pill.
- Shadows: `--shadow-s|m|l`, `--shadow-glow` (amber ring for primary hover).
- `.blueprint` — the 24 px / 120 px CSS grid backdrop.

## Motion

| Token                                    | Value                               | Use                                   |
| ---------------------------------------- | ----------------------------------- | ------------------------------------- |
| `--ease-out`                             | `cubic-bezier(0.22, 1, 0.36, 1)`    | almost everything                     |
| `--ease-in-out`                          | `cubic-bezier(0.65, 0, 0.35, 1)`    | image clip reveals, loops             |
| `--ease-spring`                          | `cubic-bezier(0.34, 1.56, 0.64, 1)` | icon pops                             |
| `--dur-fast` / `base` / `slow` / `xslow` | 200 / 350 / 800 / 1400 ms           | hovers / UI / reveals / large reveals |
| `--stagger`                              | 70 ms                               | list reveals                          |

Language: precise and mechanical, like a plotter drawing a circuit. Words slide out of masks, traces draw
themselves, signals pulse along lines. Rules:

1. Content is visible without JS. Hiding for an entrance only happens under `html.js` **and**
   `prefers-reduced-motion: no-preference`.
2. Above-the-fold text never starts at `opacity: 0` (protects LCP).
3. Only `transform`, `opacity`, `clip-path` and canvas are animated.
4. Every looping animation (canvas, marquee, region pulses, robot arm, CTA border, typewriter) stops with the
   hero's pause button (`html[data-motion=paused]`) and is off with reduced motion.
5. No scroll-jacking; Lenis smooth scrolling only for mouse/trackpad users.

## Components

| Component               | File                                   | Notes                                                                          |
| ----------------------- | -------------------------------------- | ------------------------------------------------------------------------------ |
| Button                  | `.btn`, `.btn--primary`, `.btn--ghost` | mono label, pill, amber sheen sweep on hover, `data-magnetic`                  |
| Arrow link              | `.link-arrow`                          | underline grows from left, arrow nudges                                        |
| Card                    | `.card`, `.card--bracket`              | blueprint corner brackets appear on hover/focus                                |
| Eyebrow                 | `.eyebrow`                             | mono, amber square marker, numbered `01 // …` on the homepage                  |
| SplitText               | `ui/SplitText.astro`                   | masked word reveal; `onLoad` for above-the-fold                                |
| SectionHead / PageHero  | `ui/`                                  | eyebrow + split heading + intro                                                |
| NewsCard                | `ui/NewsCard.astro`                    | AVIF/WebP, zoom on hover, whole-card link, featured variant                    |
| Logo / Icon             | `ui/`                                  | traced wordmark; 25 stroke icons in the logo's line style                      |
| RobotArm                | `ui/RobotArm.astro`                    | animated SVG illustration                                                      |
| Hero                    | `home/Hero.astro`                      | canvas circuit traces, typewriter motto (no CLS), console panel, vertical logo |
| Manifesto               | `sections/Manifesto.astro`             | full-screen; words light up line by line, `*word*` = highlight                 |
| Acronym                 | `sections/Acronym.astro`               | D-R-I-T-Z decoded with the logo's icon-letters                                 |
| Stats                   | `sections/Stats.astro`                 | count-up numbers (final value is in the HTML)                                  |
| RegionMap               | `sections/RegionMap.astro`             | schematic SVG of SI/HR/RS/ME with signal pulses                                |
| Timeline                | `sections/Timeline.astro`              | scroll-driven progress line (`animation-timeline: view()`), alternating cards  |
| SupportersMarquee       | `sections/SupportersMarquee.astro`     | CSS marquee, pauses on hover/focus                                             |
| CtaBand                 | `sections/CtaBand.astro`               | animated conic-gradient border (`@property`)                                   |
| ContactForm             | `sections/ContactForm.astro`           | validation, honeypot, mailto or endpoint                                       |
| LangSwitch / LangBanner | `layout/`                              | SI                                                                             | EN pill; dismissible suggestion |
