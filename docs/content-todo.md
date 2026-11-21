# Content to-do (gaps the redesign could not fill without inventing facts)

Nothing on the site was made up. Where content was missing, the copy stays honest and generic. These items would
make the site stronger — each lists where to put it.

## Organisation

- [ ] **Social media profiles** (Instagram, Facebook, LinkedIn, YouTube …) — none were in the old site. Add full URLs
      to `site.social` in `src/data/site.ts`; they then appear in the footer, on the contact page and in JSON-LD
      `sameAs`.
- [ ] **Exact founding date** (registration date in AJPES). The site says "since 2024"; the timeline item
      "Društvo DRITZ uradno začne delovati" has only the year. Add a month in `src/data/timeline.ts` (e.g.
      `date: '2024-03'`) and reorder; optionally set `foundingDate` precisely in `src/lib/seo.ts`.
- [ ] **Registration numbers** (matična številka, davčna številka, TRR for donations) — useful on `/o-nas/` (the
      "Podatki o društvu" table: `src/components/pages/AboutPage.astro`, labels in `about.legal.rows`) and on
      `/podporniki/` for donors. Also consider the 1 % dohodnine donation option if the society is eligible.
- [ ] **Team / board**: names, roles and photos of the president, board and key volunteers. The About page
      currently says the society is run by volunteers. A team grid could be added to `AboutPage.astro` with data in
      `src/data/`.
- [ ] **Membership process**: how to become a member (form, fee, statute). The "Get involved" page currently
      routes everyone to the contact form.

## Activities

- [ ] **Workshops**: where, when, for which ages, cost, how to sign up. The old site only listed topics
      (programming, LEGO robotics, research methods, competition prep). Copy: `activitiesPage.detail` in
      `src/i18n/sl.ts`/`en.ts`.
- [ ] **FLL in Slovenia**: which competitions DRITZ helps organise (name, city, date), and whether DRITZ is an
      official partner/operational partner of FIRST in any country. The FLL page uses only what the old site said
      (helping organise, organisational and judging roles).
- [ ] **Per-country details** for Croatia, Serbia, Montenegro (partner organisations, events, years). Copy:
      `fllPage.countries.items`.
- [ ] **Upcoming events** — if DRITZ organises its own events, publish them as news posts; `Event` structured data
      can then be added (only for events the society runs).
- [ ] **More photos**: workshops (with consent from parents), team, competitions organised in the region. Add to
      `src/assets/images/` and reference from content.

## Supporters

- [ ] **Partner URLs**: add `url` to entries in `src/data/supporters.ts` if you want logos to link to partners.
- [ ] **Higher-resolution / SVG partner logos** (the Trimo and ETI files are small PNGs).
- [ ] Confirm the **individual donors** (Žan Močivnik, Urška Farčnik) are happy to be named publicly (they were on
      the old site).

## News

- [ ] **Adria region post** has no date (the old page had none). If there is a representative date, add `date:` to
      both `src/content/news/*/fll-regija-adrija.md` / `fll-adria-region.md`.
- [ ] **UK National Final 2024** says the final covered "Anglijo, Irsko, Wales in Škotsko" (as on the old site). This
      is most likely correct — IET runs the programme as "FIRST LEGO League UK & Ireland" — but please confirm.

- [ ] **Greece 2026 headline** ("Ekipa in prostovoljci Društva DRITZ z izjemnim uspehom …", kept from the old site)
      can be read as if Eco Robots (OŠ Šentvid) were a DRITZ team. If they are not, consider "Prostovoljci Društva
      DRITZ in slovenska ekipa z izjemnim uspehom …" (both language files of that post).
- [ ] Terminology: "sodnik" vs "ocenjevalec" are used as in the original posts. Pick one if FLL Slovenia has an
      official term for judges/referees.

## Legal (please confirm)

The privacy policy (`src/content/legal/*`) reflects how the site actually works. Please confirm these statements
are true for the society:

- [ ] "We have no access to the hosting provider's server logs and do not use them" (true for GitHub Pages).
- [ ] Message data is not shared with third parties unless required by law.
- [ ] Requests from data subjects are answered within one month (the GDPR deadline).
- [ ] If you enable a form service (`PUBLIC_FORM_ENDPOINT`) or analytics, update the policy first.
