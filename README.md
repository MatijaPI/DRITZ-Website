# Društvo DRITZ — dritz.si

Website of **Društvo DRITZ** (_Društvo za raziskovanje in izobraževanje o tehnologiji in znanosti_) — robotics,
science and FIRST LEGO League for young people in Slovenia and the region.

- Slovenian (default) at `/`, English at `/en/`.
- Static site built with **Astro 7 + TypeScript**, deployed to **GitHub Pages** via GitHub Actions.
- Design: "Blueprint Lab" — see [`docs/design-system.md`](docs/design-system.md).

| Docs                                                 |                                                                   |
| ---------------------------------------------------- | ----------------------------------------------------------------- |
| [`docs/PLAN.md`](docs/PLAN.md)                       | plan, information architecture, ownership                         |
| [`docs/audit.md`](docs/audit.md)                     | audit of the old site, content inventory, Lighthouse before/after |
| [`docs/architecture.md`](docs/architecture.md)       | stack decision, folder structure, routing, JS modules             |
| [`docs/design-research.md`](docs/design-research.md) | Awwwards research and which techniques were applied               |
| [`docs/design-system.md`](docs/design-system.md)     | tokens, typography, motion, components                            |
| [`docs/brand-copy.md`](docs/brand-copy.md)           | motto candidates, manifesto, voice                                |
| [`docs/seo-checklist.md`](docs/seo-checklist.md)     | what is implemented + manual steps after deploying                |
| [`docs/deployment.md`](docs/deployment.md)           | push → deploy, one-time Pages setup, rollback, security headers   |
| [`docs/content-todo.md`](docs/content-todo.md)       | content gaps to fill                                              |

## Quick start

Requires Node.js ≥ 22.23 (Node 24 recommended).

```sh
npm ci            # install
npm run dev       # http://localhost:4321  (English: http://localhost:4321/en/)
npm run build     # translation check + production build → dist/
npm run preview   # serve dist/ locally
npm run lint      # ESLint + Prettier
npm run check     # TypeScript / Astro type check
```

## Deploying

Merge to `main` → GitHub Actions builds and publishes to https://dritz.si. **Before the first deploy, switch
Settings → Pages → Source to "GitHub Actions".** Details: [`docs/deployment.md`](docs/deployment.md).

## Editing content

| What                                                                                     | Where                                                                         |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| All texts (menus, headings, page copy, buttons, form messages, meta titles/descriptions) | `src/i18n/sl.ts` and `src/i18n/en.ts`                                         |
| Motto (+ alternatives)                                                                   | `src/i18n/motto.ts` → change `ACTIVE_MOTTO`                                   |
| Contact details, legal name, social profiles                                             | `src/data/site.ts`                                                            |
| Supporters per season + logos                                                            | `src/data/supporters.ts` (logo files in `src/assets/images/`)                 |
| Timeline milestones                                                                      | `src/data/timeline.ts` (+ texts under `timeline.items` in the i18n files)     |
| News posts                                                                               | `src/content/news/sl/*.md` and `src/content/news/en/*.md`                     |
| Privacy policy                                                                           | `src/content/legal/sl/zasebnost.md`, `src/content/legal/en/privacy.md`        |
| Photos                                                                                   | `src/assets/images/` (any size — the build makes AVIF/WebP in several widths) |

### Translations

- `sl.ts` is the reference. Every key must exist in `en.ts` with the same structure; TypeScript and
  `npm run check:i18n` (run automatically by `npm run build`) fail if a key, array length or `{placeholder}`
  differs, or if a string is empty.
- To change a text, edit the value in **both** files. Keep `{placeholders}` (e.g. `{year}`) unchanged.
- In manifesto lines, `*word*` marks an amber highlight.
- Meta descriptions: aim for 120–160 characters; titles: ≤ ~55 characters (" | Društvo DRITZ" is added).

### Adding a news post

1. Put the photo in `src/assets/images/` (e.g. `fll-zagreb-2027.jpg`).
2. Create **two** files with the same `translationKey` — the **file name is the URL slug** (lowercase ASCII,
   digits, hyphens):

   `src/content/news/sl/fll-zagreb-2027.md` → https://dritz.si/novice/fll-zagreb-2027/

   ```md
   ---
   translationKey: zagreb-2027
   title: 'Polni naslov novice (H1)'
   seoTitle: Kratek naslov do 60 znakov
   description: 'Opis za Google, 120–160 znakov, s ključnimi besedami, kot so FIRST LEGO League, Društvo DRITZ …'
   excerpt: 'Kratek povzetek za kartico (1–2 stavka).'
   date: 2027-03-15
   location: Zagreb, Hrvaška
   image: ../../../assets/images/fll-zagreb-2027.jpg
   imageAlt: Opis fotografije (kaj je na njej)
   ---

   Besedilo novice v Markdownu …
   ```

   `src/content/news/en/fll-zagreb-2027.md` → https://dritz.si/en/news/fll-zagreb-2027/ (same front matter
   fields in English, same `translationKey`, same `image`).

3. `npm run dev` to check, then commit and push. The news list, homepage, sitemap, hreflang and OG image update
   automatically. If the date is unknown, omit `date` and set `dateLabel: "…"` instead. `draft: true` hides a post.

### Adding a new page (both languages)

1. Add a route key to `src/i18n/routes.ts`, e.g. `camps: { sl: '/tabori/', en: '/en/camps/' }`.
2. Add its texts (at least `meta.title`, `meta.description`, `hero`) under a new key in **both** `sl.ts` and `en.ts`.
3. Create a page component `src/components/pages/CampsPage.astro` (copy `JoinPage.astro` as a template) that
   renders `<BaseLayout locale alternates={routes.camps} …>`.
4. Create the two thin route files: `src/pages/tabori.astro` and `src/pages/en/camps.astro`:

   ```astro
   ---
   import CampsPage from '../components/pages/CampsPage.astro';
   ---

   <CampsPage locale="sl" />
   ```

5. Add the page to the navigation in `src/components/layout/Header.astro` / `Footer.astro` if needed, and an OG
   image entry in `src/pages/og/[locale]/[...id].jpg.ts`. The sitemap picks the page up from `routes.ts`.

## SEO notes

- Canonical, hreflang (`sl`, `en`, `x-default` → Slovenian), OG/Twitter tags and JSON-LD are generated in
  `src/layouts/BaseLayout.astro` + `src/lib/seo.ts`.
- `sitemap.xml` is generated by `src/pages/sitemap.xml.ts` (both languages with alternates).
- OG images (1200×630) are generated at build time by `src/pages/og/[locale]/[...id].jpg.ts`.
- Search Console verification: set the repository variable `GOOGLE_SITE_VERIFICATION` (see `.env.example`).
- After deploying, follow [`docs/seo-checklist.md`](docs/seo-checklist.md).

## Privacy

No cookies, no trackers, no third-party requests (fonts are self-hosted). `localStorage` stores only the chosen
language/theme and whether the language banner was dismissed. Optional cookieless analytics can be enabled via
environment variables (off by default) — update the privacy policy first.

## Licences

Code © Društvo DRITZ. Fonts: Bricolage Grotesque, Inter, JetBrains Mono — SIL Open Font License 1.1
(`src/assets/fonts/OFL-LICENSE.txt`). Partner logos belong to their owners.
