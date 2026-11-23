# DRITZ redesign — plan

Status: executed on branch `redesign` (forked from `seo-nadgradnja`, which contains the newest content).

## 1. Stack decision

**Astro 7 (static output) + TypeScript + plain CSS (custom properties) + small vanilla TS modules.**
Deployed to **GitHub Pages via GitHub Actions** (`.github/workflows/deploy.yml`), custom domain `dritz.si`
kept through `public/CNAME`.

Why migrate away from hand-written HTML (details in [`architecture.md`](architecture.md)):

- The header, footer and `<head>` were copy-pasted into 8 files; a bilingual site would double that to ~40.
- A bilingual site needs per-page hreflang pairs, localized slugs, a sitemap with alternates, and a key-parity
  check for translations — all trivial at build time, error-prone by hand.
- Photos were 2–4 MB JPEG/PNG originals (mobile LCP 11.7 s on the live site). Astro's image pipeline emits
  AVIF/WebP `srcset` with explicit dimensions automatically.
- News becomes a Markdown content collection, so a new post is one file per language.
- Output is still plain static HTML/CSS/JS — the same hosting model as before.

Rejected: Next.js (needs a Node/edge runtime for its best features; heavier client JS), Eleventy (fine, but
weaker typed content/image story), GSAP/Three.js (the motion we need is achievable in < 15 KB of vanilla JS + CSS).

## 2. Information architecture

| Key          | Slovenian (default, root)      | English                                |
| ------------ | ------------------------------ | -------------------------------------- |
| home         | `/`                            | `/en/`                                 |
| about        | `/o-nas/`                      | `/en/about/`                           |
| activities   | `/aktivnosti/`                 | `/en/activities/`                      |
| fll          | `/first-lego-league/`          | `/en/first-lego-league/`               |
| news index   | `/novice/` (preserved)         | `/en/news/`                            |
| news article | `/novice/<slug>/` (all 6 kept) | `/en/news/<english-slug>/`             |
| supporters   | `/podporniki/`                 | `/en/supporters/`                      |
| get involved | `/pridruzite-se/`              | `/en/get-involved/`                    |
| contact      | `/kontakt/`                    | `/en/contact/`                         |
| privacy      | `/zasebnost/`                  | `/en/privacy/`                         |
| 404          | `/404.html` (bilingual)        | same file, switches to EN under `/en/` |

The old one-page anchors (`/#drustvo`, `/#o-drustvu`, `/#aktivnosti`, `/#podporniki`, `/#kontakt`) remain as
section ids on the new homepage, so old deep links still land on the matching section. No existing URL
changes, therefore no redirects are needed (GitHub Pages cannot issue real 301s anyway).

## 3. Design direction — "Blueprint Lab"

Dark ink canvas (`#070A12`) with a faint engineering grid, the DRITZ amber (`#FFB300`) as the signal colour,
lime (`#9BD21C`, evolved from `#8AC500`) as the "go" colour and a sparing signal red. The traced line-art
logo is rendered in warm paper-white on dark. Typography: **Bricolage Grotesque** (display, variable width for
long Slovenian words), **Inter** (body), **JetBrains Mono** (console-style labels, numbering, data).
Motion language: precise and mechanical, like a plotter drawing a circuit — masked line reveals, traces
that draw themselves, signal pulses. See [`design-research.md`](design-research.md) and
[`design-system.md`](design-system.md).

## 4. i18n approach

- Astro `i18n` config: `defaultLocale: 'sl'`, `prefixDefaultLocale: false`, so Slovenian lives at root.
- `src/i18n/sl.ts` and `src/i18n/en.ts` hold every UI string and page copy; `en.ts` is typed against the
  shape of `sl.ts`, and `scripts/check-i18n.ts` (run before every build) fails on any missing/extra key and
  on news posts without a counterpart.
- `src/i18n/routes.ts` maps route keys to localized paths; the language switcher, hreflang tags and sitemap
  alternates are all derived from it (news pairs are linked through a shared `translationKey`).
- The switcher remembers the choice in `localStorage`. Crawlers are never redirected; a dismissible banner
  suggests English to non-Slovenian browsers.

## 5. Task breakdown & ownership

| #   | Task                                                                      | Owner                                                    |
| --- | ------------------------------------------------------------------------- | -------------------------------------------------------- |
| 1   | Audit (`audit.md`), baseline Lighthouse                                   | lead                                                     |
| 2   | Design research (`design-research.md`)                                    | sub-agent: research                                      |
| 3   | Scaffold, tokens, layout shell, i18n + routing, SEO head, OG images       | lead                                                     |
| 4   | Brand copy & motto (`brand-copy.md`), page copy SL/EN                     | lead                                                     |
| 5   | English translations of the 6 news posts + privacy policy SL/EN           | sub-agent: content (separate files under `src/content/`) |
| 6   | Pages, components, animations                                             | lead                                                     |
| 7   | Browser QA (Playwright) at 375/768/1440, themes, reduced motion, keyboard | lead                                                     |
| 8   | Lighthouse before/after, link + metadata checks                           | lead                                                     |
| 9   | Native-language review of SL and EN copy                                  | sub-agent: language editor                               |
| 10  | Skeptical final review (SEO, a11y, perf, facts, interactivity)            | sub-agent: reviewer                                      |
| 11  | README, `deployment.md`, `seo-checklist.md`, `content-todo.md`            | lead                                                     |
