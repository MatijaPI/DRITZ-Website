# Architecture

## Why Astro (and not hand-written HTML any more)

| Need                                                      | Hand-written HTML           | Astro (static output)                                       |
| --------------------------------------------------------- | --------------------------- | ----------------------------------------------------------- |
| Shared header/footer/head on ~42 pages (21 × 2 languages) | copy-paste in every file    | one layout + components                                     |
| hreflang pairs, localized slugs, sitemap alternates       | manual, error-prone         | generated from `src/i18n/routes.ts` + content collection    |
| Translation completeness                                  | no check                    | `scripts/check-i18n.ts` fails the build                     |
| Responsive AVIF/WebP images with width/height             | manual `cwebp` runs         | `astro:assets` at build time                                |
| News posts                                                | duplicate a whole HTML file | one Markdown file per language                              |
| Per-page OG images                                        | none                        | generated at build time (satori + sharp)                    |
| Hosting                                                   | GitHub Pages                | **still GitHub Pages** — output is plain static HTML/CSS/JS |

Astro ships zero JavaScript by default; the only client JS is ~7 KB gzipped of small vanilla modules, most of it
lazy-loaded. Next.js was rejected (its strengths need a server runtime; heavier client bundle). GSAP/Three.js
were rejected: every effect on the site is achievable with CSS + a 2D canvas.

## Deployment target

GitHub Pages with the custom domain `dritz.si`. The build runs in GitHub Actions
(`.github/workflows/deploy.yml`) and publishes `dist/` with `actions/deploy-pages`. `public/CNAME` is copied into
`dist/` so the custom domain is preserved. **One-time switch:** Settings → Pages → Source → "GitHub Actions"
(see `deployment.md`).

GitHub Pages limitations and how they are handled:

- **No HTTP headers** → Content-Security-Policy is delivered as a `<meta>` tag with hashes for every inline script
  (Astro `security.csp`), `referrer` policy as `<meta name="referrer">`. HSTS/`X-Content-Type-Options`/
  `frame-ancestors` cannot be set (documented in `deployment.md` in case the site moves to Netlify/Cloudflare).
- **No server redirects** → no URL was changed; all old URLs still resolve.
- **One 404 page** → `404.html` is bilingual (Slovenian first, English first on `/en/…` URLs).
- **Cache headers** fixed at `max-age=600`; asset file names are content-hashed (`/_astro/*.[hash].*`), so
  updates are never stale.

## Folder structure

```
.github/workflows/      deploy.yml (Pages), ci.yml (PR checks)
docs/                   audit, plan, research, design system, brand copy, SEO checklist, deployment, content TODO
public/                 copied verbatim: CNAME, robots.txt, favicons, manifest, humans.txt, legacy logo PNGs
scripts/                check-i18n.ts (build gate), generate-icons.ts (favicon set from the mark)
src/
  assets/brand/         traced SVG logo (horizontal + vertical), favicon mark
  assets/fonts/         subset variable WOFF2 fonts (+ static TTFs for OG images)
  assets/images/        source photos and partner logos (optimised at build time)
  components/
    layout/             Header, Footer, LangSwitch, LangBanner, Breadcrumbs, Analytics
    home/               Hero
    sections/           Manifesto, Acronym, ActivityCards, Stats, RegionMap, Timeline, SupportersMarquee, CtaBand, ContactTeaser, ContactForm, Values
    ui/                 Logo, Icon, SplitText, SectionHead, PageHero, NewsCard, RobotArm
    pages/              one component per page type, rendered by both language routes
  content/              news/<lang>/<slug>.md, legal/<lang>/*.md (+ src/content.config.ts schemas)
  data/                 site.ts (contact, legal name, socials, env), supporters.ts, timeline.ts, activities.ts
  i18n/                 sl.ts, en.ts (all strings), motto.ts, routes.ts, config.ts, index.ts (helpers)
  layouts/              BaseLayout.astro (head, SEO, JSON-LD, theme/lang bootstrap)
  lib/                  seo.ts (JSON-LD builders), news.ts (collection helpers), og.ts (OG renderer)
  pages/                routes: Slovenian at root, English under en/; sitemap.xml.ts; og/[locale]/[...id].jpg.ts
  scripts/              client modules: main, ui, language, motion, hero-canvas, cursor, smooth-scroll
  styles/               tokens.css, fonts.css, global.css
```

## Routing & i18n

- `astro.config.mjs` → `i18n: { defaultLocale: 'sl', locales: ['sl', 'en'], routing: { prefixDefaultLocale: false } }`.
- Each page exists as two thin route files (e.g. `src/pages/o-nas.astro` and `src/pages/en/about.astro`) that render
  the same page component with a `locale` prop.
- `src/i18n/routes.ts` is the single source of localized paths. `BaseLayout` receives the page's `alternates`
  and emits canonical + hreflang (+ `x-default` → Slovenian); the language switcher uses the same map.
- News posts are paired by `translationKey`; the file name is the slug.
- The language switcher stores the choice in `localStorage` (`dritz-lang`). A tiny inline script redirects only
  when (a) the visitor previously chose the other language, (b) they arrived from outside the site and (c) the
  user agent is not a crawler. Search engines therefore always get the URL they requested.

## Client-side JavaScript

| Module                                            | Loaded                                           | Purpose                                                                                |
| ------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------- |
| inline head script                                | always (≈0.5 KB)                                 | theme + `js` class before paint, remembered language                                   |
| `main.ts` + `ui.ts` + `language.ts` + `motion.ts` | always, deferred module (2.8 KB gz)              | menu, theme toggle, header state, reveals, counters, typewriter, banner, pause control |
| `hero-canvas.ts`                                  | idle, homepage only, not with reduced motion     | circuit-trace animation                                                                |
| `cursor.ts`                                       | idle, fine pointer only, not with reduced motion | cursor ring + magnetic buttons                                                         |
| `ContactForm` script                              | contact pages                                    | validation, honeypot, mailto/endpoint submit                                           |

Everything degrades gracefully: without JavaScript, all content is visible, links work and the contact form
falls back to a `mailto:` form action.
