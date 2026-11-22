# Audit of the pre-redesign site

Date: 2026-11-21. Audited: branch `seo-nadgradnja` (commit `d3bb815`, the newest content) and the live site
https://dritz.si (served from `main`, commit `269da15`).

## 1. Stack, structure, deployment

| Item          | Finding                                                                                                                                                                                                                                                        |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stack         | Hand-written static HTML + one CSS file (`assets/css/styles.css`, 19 KB) + one JS file (`assets/js/main.js`: mobile menu, carousel, footer year). No build step.                                                                                               |
| Pages         | `index.html` (one-page site: `#drustvo`, `#o-drustvu`, `#aktivnosti`, `#podporniki`, `#kontakt`), `novice/index.html` + 6 article pages, `404.html`. Header/footer/`<head>` duplicated in all 8 files.                                                         |
| Assets        | 16 images in `assets/images/`, 33 MB repo. Photos are originals: `fll-delavnica*.jpg` 4.0 MB each (4080×3060), `fll-grcija-2026.png` 3.2 MB, `fll-uk-finals-2025.jpg` 2.3 MB. Logos as PNG only (500×500 vertical, 1000×500 horizontal, 1774×887 transparent). |
| Deployment    | GitHub Pages, "Deploy from a branch" (`main`, root). `CNAME` = `dritz.si`. `www.dritz.si` 301 → `dritz.si`. HTTP cache `max-age=600` (GitHub Pages default — no custom headers possible).                                                                      |
| Live vs. repo | **The live site is behind**: `main` does not contain the SEO work on `seo-nadgradnja`. Live `https://dritz.si/novice/`, `/sitemap.xml` and `/robots.txt` return **404**.                                                                                       |

## 2. SEO findings (problems that hurt ranking)

1. **Live site has no sitemap, no robots.txt and no news pages** (they exist only on an unmerged branch).
2. **Single-page architecture**: "about", "activities", "supporters" and "contact" were sections, not URLs — nothing to rank for queries such as "FIRST LEGO League Slovenija" beyond the homepage.
3. **No English version, no hreflang.**
4. `og:image` was the logo on a white background for every page except articles; no 1200×630 social images.
5. JSON-LD: valid `NGO` + `WebSite` on the homepage, but `areaServed` only "Slovenija" (activity spans SI/HR/RS/ME), no `sameAs`, no `contactPoint`; articles used `NewsArticle` correctly. Each article had a nested duplicate `@context`.
6. Meta descriptions of articles were truncated snippets ending in "…", not written descriptions.
7. Homepage hero H1 shared the screen with an **H2 used as a slogan** and H3 cards before any H2 section (heading order).
8. Google Fonts loaded from a third party (render-blocking CSS + privacy/GDPR concern in the EU).
9. `404.html` had `<link rel="canonical" href="https://dritz.si/404.html">` (should have no canonical, it is `noindex`).

## 3. UX, accessibility, performance findings

- **Performance**: mobile LCP 11.7 s on the live site (Lighthouse mobile performance 54) caused by multi-MB images, no responsive `srcset`, no modern formats; the LCP carousel image was a 1774×887 PNG.
- Colour palette used semi-transparent colours for text (`--text: #0000009a`), producing uneven contrast; Lighthouse accessibility 94 on live.
- The header logo had `loading="lazy"` although it is above the fold.
- Carousel auto-advances (handled reduced-motion and had a pause, good), but its first slide was just the logo.
- Duplicate copy: the hero, "quick cards" and about section repeated mission statements.
- Contact: `mailto:`/`tel:` links only, no form; no social links anywhere.
- No privacy policy (no cookies were set, which remains true).

## 4. Lighthouse — before vs. after

Measured with Lighthouse 13.6 (headless Chromium, default throttling). "Before" = live site and a local copy of
`seo-nadgradnja`; "after" = production build of this branch served locally (`npm run build` + static server).

| Page                                                  | Mode    | Perf | A11y | Best pr. | SEO | LCP               |
| ----------------------------------------------------- | ------- | ---- | ---- | -------- | --- | ----------------- |
| **Before** — live `https://dritz.si/`                 | mobile  | 54   | 94   | 96       | 100 | 11.7 s            |
| **Before** — live `https://dritz.si/`                 | desktop | 57   | 94   | 96       | 92  | 4.8 s             |
| Before — `/` (seo-nadgradnja, local)                  | mobile  | 66   | 96   | 96       | 100 | 14.9 s            |
| Before — `/novice/` (local)                           | mobile  | 75   | 98   | 96       | 100 | 27.7 s            |
| Before — article (local)                              | mobile  | 75   | 100  | 96       | 100 | 17.0 s            |
| **After** — `/`                                       | mobile  | 100  | 100  | 100      | 100 | 1.1 s             |
| **After** — `/`                                       | desktop | 100  | 100  | 100      | 100 | 0.3 s             |
| After — `/en/`                                        | mobile  | 99   | 100  | 100      | 100 | 2.1 s → see below |
| After — `/novice/`                                    | mobile  | 99   | 100  | 100      | 100 | 2.0 s → see below |
| After — `/novice/fll-open-international-grcija-2026/` | mobile  | 100  | 100  | 100      | 100 | 0.8 s             |
| After — `/first-lego-league/`                         | mobile  | 100  | 100  | 100      | 100 | 0.8 s             |

The final re-run after the LCP fixes (eager featured image, hero text that never starts invisible) is recorded in
the "Final scores" table at the end of this file.

## 5. Content inventory and what happened to it

Everything was preserved or migrated; nothing was dropped silently.

| Old content                                                                                  | New location                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero title, slogan, lead, motto »Raziskujemo neznano, izobražujemo za prihodnost.«           | Reworked into the new motto/manifesto (meaning kept, see `brand-copy.md`); lead copy reused on `/` and `/o-nas/`. At the client's request the old motto is no longer shown on the site. The old slogan's idea lives on in the manifesto ("Gradimo skupaj …") and the runner-up motto "Gradimo prihodnost. Kocko za kocko."                                                              |
| "Kdo smo", mission, vision, activities text                                                  | `/o-nas/` (story, mission, vision), `/aktivnosti/`, homepage "Kdo smo".                                                                                                                                                                                                                                                                                                                 |
| News cards + 6 articles                                                                      | `/novice/` + `/novice/<same slug>/` (all 6 URLs unchanged), English versions under `/en/news/`. Wording kept; only clear typos fixed (listed in the content agent's report: "skrbela in" → "skrbela za", "Velik hvala" → "Velika hvala", "Slovenskega FLL programa" → "slovenskega programa FLL", hyphen → en dash, "so se sezone" → "so se tekmovanja sezone", lowercase after colon). |
| Supporters 2024/25 and 2025/26, logos, "HVALA!" text                                         | `/podporniki/` (full list per season + thank-you text) and the homepage marquee.                                                                                                                                                                                                                                                                                                        |
| Contact: address, e-mail, phone                                                              | Footer (every page), homepage `#kontakt`, `/kontakt/` (+ form), JSON-LD.                                                                                                                                                                                                                                                                                                                |
| Carousel photos (`fll-maroko.png`, `fll-uk-final-2024.png`, logo)                            | `fll-uk-final-2024.png` is the image of its news article; `fll-maroko.png` illustrates the "Role of Društvo DRITZ" section on `/first-lego-league/`; the logo became the SVG wordmark.                                                                                                                                                                                                  |
| Logo PNGs                                                                                    | Kept at the same URLs in `public/assets/images/` (used by JSON-LD and possibly by third parties); the site itself uses the new traced SVG.                                                                                                                                                                                                                                              |
| Photo URLs `/assets/images/*.jpg                                                             | png`                                                                                                                                                                                                                                                                                                                                                                                    | **Not kept** at the old URLs (the build serves optimised AVIF/WebP from `/_astro/`). They were only referenced by the old pages; no redirect is possible on GitHub Pages. |
| `/assets/css/styles.css`, `/assets/js/main.js`                                               | Removed (replaced by hashed bundles).                                                                                                                                                                                                                                                                                                                                                   |
| Old one-page anchors `/#o-drustvu`, `/#aktivnosti`, `/#podporniki`, `/#kontakt`, `/#drustvo` | Still exist as section ids on the new homepage.                                                                                                                                                                                                                                                                                                                                         |

## Final scores

Final run on the production build (`npm run build`, served statically), Lighthouse 13.6, 2026-11-21.
Mobile = default mobile emulation with simulated slow 4G; desktop = `--preset=desktop`.

| Page                                                 | Mobile P / A / BP / SEO | Mobile LCP | Desktop P / A / BP / SEO | Desktop LCP |
| ---------------------------------------------------- | ----------------------- | ---------- | ------------------------ | ----------- |
| `/`                                                  | 100 / 100 / 100 / 100   | 1.05 s     | 100 / 100 / 100 / 100    | 0.29 s      |
| `/en/`                                               | 100 / 100 / 100 / 100   | 1.06 s     | 100 / 100 / 100 / 100    | 0.29 s      |
| `/o-nas/`                                            | 100 / 100 / 100 / 100   | 1.66 s     | 100 / 100 / 100 / 100    | 0.40 s      |
| `/en/about/`                                         | 100 / 100 / 100 / 100   | 1.66 s     | 100 / 100 / 100 / 100    | 0.21 s      |
| `/first-lego-league/`                                | 100 / 100 / 100 / 100   | 0.75 s     | 100 / 100 / 100 / 100    | 0.21 s      |
| `/en/first-lego-league/`                             | 100 / 100 / 100 / 100   | 0.76 s     | 100 / 100 / 100 / 100    | 0.21 s      |
| `/novice/`                                           | 99 / 100 / 100 / 100    | 1.98 s     | 100 / 100 / 100 / 100    | 0.44 s      |
| `/en/news/`                                          | 99 / 100 / 100 / 100    | 1.96 s     | 100 / 100 / 100 / 100    | 0.43 s      |
| `/novice/fll-open-european-championship-bodo-2024/`  | 100 / 100 / 100 / 100   | 0.76 s     | 100 / 100 / 100 / 100    | 0.21 s      |
| `/en/news/fll-open-european-championship-bodo-2024/` | 100 / 100 / 100 / 100   | 0.76 s     | 100 / 100 / 100 / 100    | 0.21 s      |
| `/kontakt/`                                          | 100 / 100 / 100 / 100   | 0.91 s     | 100 / 100 / 100 / 100    | 0.25 s      |
| `/en/contact/`                                       | 100 / 100 / 100 / 100   | 0.91 s     | 100 / 100 / 100 / 100    | 0.25 s      |
| `/aktivnosti/`                                       | 100 / 100 / 100 / 100   | 0.76 s     | 100 / 100 / 100 / 100    | 0.41 s      |
| `/podporniki/`                                       | 100 / 100 / 100 / 100   | 0.76 s     | 100 / 100 / 100 / 100    | 0.21 s      |
| `/pridruzite-se/`                                    | 100 / 100 / 100 / 100   | 0.76 s     | 100 / 100 / 100 / 100    | 0.21 s      |

CLS 0.000 and TBT ≤ 46 ms on every page. Other checks on the final build: 0 axe-core violations (dark + light,
375 and 1440 px), 0 broken internal links, 0 console errors with the CSP enabled, no horizontal overflow from
320 px up, 66/66 scripted interaction checks passing (menu, theme, language switcher on all 11 page pairs,
remembered language, language banner, form validation/honeypot/topic preselect, keyboard/skip link, reduced
motion, no-JS rendering).

Real-world numbers on GitHub Pages will differ slightly (CDN latency); re-check with PageSpeed Insights after
deploying (see `seo-checklist.md`).
