# SEO checklist

## What the site already does (implemented)

- [x] Semantic landmarks (`header`, `nav`, `main`, `footer`, `article`, `aside`), exactly one `<h1>` per page, logical heading order.
- [x] Unique, localized `<title>` (≤ ~65 chars incl. " | Društvo DRITZ") and meta description (120–160 chars) on every page.
- [x] Self-referencing canonical per language, `hreflang="sl"`, `hreflang="en"` and `hreflang="x-default"` (→ Slovenian) on every page pair, correct `<html lang>`.
- [x] `sitemap.xml` with both languages, `lastmod` and `xhtml:link` alternates; `robots.txt` points to it; the 404 page is `noindex` and not in the sitemap.
- [x] JSON-LD `@graph` on every page: `NGO`/`EducationalOrganization` (legal name, alternateName DRITZ, logo, address, foundingDate 2024, contactPoint, areaServed SI/HR/RS/ME, `sameAs` once social profiles are added), `WebSite` (`inLanguage`), `WebPage`/`AboutPage`/`ContactPage`/`CollectionPage`, `BreadcrumbList` on inner pages, `NewsArticle` on dated posts, `ItemList` on the news index, `FAQPage` on the FLL page (both languages, text identical to the visible FAQ — Google shows FAQ rich results almost only for government/health sites, so this is for entity understanding and AI search, not for a SERP feature). No `SearchAction` (the site has no search). No `Event` markup (all events so far were organised by others; add only for events DRITZ itself runs).
- [x] OpenGraph + Twitter Card on every page; generated 1200×630 OG images per page and per language (`/og/<lang>/<page>.jpg`, news posts include their photo).
- [x] Core Web Vitals: static HTML, AVIF/WebP `srcset` with width/height, lazy loading below the fold, only fonts preloaded, ~7 KB JS gzipped, no render-blocking third parties, CLS 0.
- [x] Old URLs preserved: `/`, `/novice/`, all 6 `/novice/<slug>/`, homepage anchors.
- [x] Internal linking: header + footer sitemap, breadcrumbs, related news, timeline → news, activity cards → pages.
- [x] Keywords placed naturally: "Društvo DRITZ", "FIRST LEGO League Slovenija", "tekmovanje FLL", "robotika za mlade/otroke", "delavnice robotike", "društvo za tehnologijo in znanost" (SL); "FIRST LEGO League Slovenia", "robotics workshops", "STEM / science society" (EN).
- [x] Favicon for Google Search: `src/assets/brand/mark.svg` is a full square tile with all artwork inside the inscribed circle, so it survives Google's circular crop. `favicon.ico` holds 32 and 48 px (Google wants a square icon in multiples of 48 px), plus `favicon.svg`, `apple-touch-icon.png` and manifest icons. Google re-crawls favicons slowly (days to weeks); see `design-system.md` to regenerate.
- [x] Google Search Console verification meta controlled by `PUBLIC_GOOGLE_SITE_VERIFICATION` (repository variable `GOOGLE_SITE_VERIFICATION`). Optional cookieless analytics, disabled by default.

## Deliberate choices

- The homepage `<h1>` is the motto ("Neznano je le še neraziskano."). Brand and topic keywords sit directly around
  it — the eyebrow above ("Društvo DRITZ · robotika · znanost · FIRST LEGO League"), the lead paragraph, the
  `<title>` and the meta description — and every inner page has a keyword-bearing `<h1>`/title. If rankings for
  generic queries lag, swap the hero eyebrow and `<h1>` roles in `src/components/home/Hero.astro`.
- Sitemap `lastmod`: news posts use `updated` or their publication `date`; static pages use `site.updated` in
  `src/data/site.ts` — bump it when you make substantial content changes. Pages that list news cards (home, news
  index, FLL) use the newest post `date` instead when it is later. Dates are deliberately **not** taken from git:
  the deploy checkout is shallow (`fetch-depth: 1`), all pages share the i18n string files, and refactors or
  formatting commits would report content changes that never happened.
- "Celje" is in the home meta description ("Društvo DRITZ iz Celja …" / "… from Celje, Slovenia …") and in the
  Organization address, but not in the home `<title>`: the title is already ~54 characters, and the repo does not
  say where workshops take place, so "robotika v Celju" would promise more than we can back up. For local queries
  rely on a Google Business Profile (step 9 below).

## Manual steps after deploying (do these in order)

1. **Deploy** — merge to `main` after switching Pages to "GitHub Actions" (see `deployment.md`). Check
   https://dritz.si/, https://dritz.si/en/, https://dritz.si/sitemap.xml and https://dritz.si/robots.txt load.
2. **Google Search Console** → https://search.google.com/search-console
   - If `dritz.si` is not yet a property: _Add property → Domain → `dritz.si`_ and verify with the **DNS TXT
     record** Google shows (add it at your domain registrar). This covers http/https and www.
   - Alternative (URL-prefix property `https://dritz.si/`): choose _HTML tag_, copy only the `content` value,
     add it as repository variable `GOOGLE_SITE_VERIFICATION` (Settings → Secrets and variables → Actions →
     Variables), re-run the deploy workflow, then press _Verify_.
3. **Submit the sitemap**: Search Console → _Sitemaps_ → enter `sitemap.xml` → Submit. If an old sitemap URL is
   listed with errors, remove it.
4. **Request indexing** (URL Inspection → _Request indexing_) for: `/`, `/en/`, `/o-nas/`, `/first-lego-league/`,
   `/en/first-lego-league/`, `/novice/`, `/aktivnosti/`, `/podporniki/`, `/kontakt/`.
5. **International targeting**: after a few days check _Pages_ report for "Alternate page with proper canonical"
   (expected/OK) and that both languages are indexed.
6. **Rich results test**: https://search.google.com/test/rich-results — test `/` (Organization), one article
   (Article, Breadcrumb). Also https://validator.schema.org/ for the full graph.
7. **Core Web Vitals**: PageSpeed Insights https://pagespeed.web.dev/ for `/` and `/en/` (mobile + desktop). The
   field-data (CrUX) section fills in after enough real traffic; Search Console → _Core Web Vitals_.
8. **Social previews**: paste URLs into https://www.opengraph.xyz/ or the LinkedIn Post Inspector
   https://www.linkedin.com/post-inspector/ and the Facebook Sharing Debugger
   https://developers.facebook.com/tools/debug/ (click _Scrape again_ to refresh cached previews).
9. **Google Business Profile** (optional but useful for the brand query "Društvo DRITZ"): https://business.google.com/
   → create a profile for the society at Medlog 52A, Celje, category e.g. "Non-profit organization" /
   "Educational institution". Only list the address publicly if you are happy for it to appear on Maps (you can
   hide it and set a service area: Slovenia). Link to https://dritz.si/.
10. **Bing Webmaster Tools** (optional): https://www.bing.com/webmasters → import from Google Search Console.
11. **Social profiles** (still empty): add the society's official profile URLs to `site.social` in
    `src/data/site.ts` — they appear in the footer/contact page and in the Organization `sameAs`, which helps Google connect the brand.
12. **Backlinks**: ask partners (FLL organisers in SI/HR/RS/ME, schools, sponsors Sensum, Dewesoft, ETI, Trimo) to
    link to https://dritz.si/ or https://dritz.si/en/.
13. **Favicon**: after deploying a new icon, run URL Inspection → _Request indexing_ on `/`. The new favicon can
    take days to weeks to appear in results.
14. **Keep publishing**: one news post per event in both languages keeps the site fresh (see README → "Adding a
    news post").

## Re-checking after changes

```sh
npm run build && npx serve dist   # then run Lighthouse in Chrome DevTools on / and /en/
```
