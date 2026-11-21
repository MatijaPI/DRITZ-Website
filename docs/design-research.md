# Design research: award-winning sites for the DRITZ "Blueprint Lab" redesign

Inspiration only. No branding, copy, code or assets from the sites below go into the DRITZ site.

## 1) Method

- **Date:** 2026-11-21.
- **Browsed on Awwwards:** `awwwards.com/websites/` (latest winners), plus the category filters
  `/websites/technology/`, `/websites/science/`, `/websites/education/`, `/websites/non-profit/` and
  `/websites/social-responsibility/`. I also opened the individual `awwwards.com/sites/<name>` page for each
  site I studied, which lists the award, date, jury and Developer Award scores, tags, palette and the
  "highlighted elements" videos.
- **Live sites:** I downloaded each homepage's HTML (curl, desktop Chrome UA) and read the source for
  libraries, fonts, easings, durations, `prefers-reduced-motion`, ARIA and `<canvas>`/`<video>` usage. I also
  pulled each page's text into a section-by-section outline.
- **Access limitations (please read):**
  - I had **no rendered, interactive browser**, so I did not watch any motion myself. Motion notes come from
    three places: (a) easing and duration values in the shipped source, (b) libraries the page loads, and
    (c) Awwwards' own labels for its "highlighted elements". Where a note rests only on the Awwwards
    description, it says **(from Awwwards description only)**.
  - Single-page apps built with Next.js or a custom app ship most of their code in bundles. For those sites,
    detection is partial and fonts often could not be identified.
  - The Awwwards **non-profit** filter shows mostly older winners (2021–2024, and most entries are studios with
    "non" in the name). For recent non-profit and NGO work I used the **Social Responsibility** filter instead.
  - The **science** filter's newest winner is from Feb 2026. Everything else below is from Oct–Nov 2026.

## 2) Site-by-site notes

### 2.1 ZIRKA Interceptor (`zrk.technology`)

- **Award:** SOTD + Developer Award, 9 Nov 2026. Dev scores: Animations 7.6, Accessibility 6.6. Tags: Technology,
  3D, Microinteractions. Built with Webflow; assets made in After Effects and Blender.
- **Palette:** two colours, #FC4F00 orange on #000. A single hot accent on black, close to our amber-on-ink idea.
- **Typography and labels:** a HUD-style status strip with a live local clock, a coordinate line, a
  "system response" readout and a unit status. Specs are numbered `001`–`005`, features are lettered `A`–`E`,
  data cards use uppercase mono-style labels with `//` and `};` separators, and slide counters read `01 / 05`.
  This "engineering console" language is the most directly relevant reference for Blueprint Lab.
- **Hero and loader:** a short declarative headline (about 48 characters). The loader shows a percentage and a
  crosshair widget with live X/Y coordinates.
- **Storytelling:** chapters (threat, features, history timeline, cost comparison, effectiveness, system,
  roadmap) with big-number stat callouts and an image-caption timeline (place + year).
- **Motion (from source):** GSAP 3.12/3.13 with ScrollTrigger and Observer, plus Lenis smooth scroll. Easings:
  `cubic-bezier(0.25,1,0.5,1)` used 8 times, `cubic-bezier(0.22,1,0.36,1)`, `power2.out` and `power3.out`.
  Durations are mostly 0.4 / 0.6 / 0.8 / 1 s. Scroll-scrubbed tweens use `ease: none`. Awwwards highlights hover
  animations, 3D scroll and transition animations.
- **Performance and accessibility:** GSAP is loaded from the CDN several times over, alongside jQuery and
  Webflow chunks. There are muted autoplay `<video>` elements. The source has no `prefers-reduced-motion` and
  almost no ARIA. The Accessibility sub-score (6.6) is the lowest of its six.

### 2.2 Cyera AI Guardian (`secure-the-unknown.cyera.com`)

- **Award:** SOTD + Developer Award, 11 Nov 2026, by Active Theory. Dev scores: Animations 8.8, WPO 8.2,
  Accessibility 7.0. Tags: Startups, WebGL.
- **Concept (from Awwwards description only):** you pilot a vessel through three "planets", each with a mini-game.
  It is a full WebGL experience.
- **From source:** two variable fonts, Haffer and Season Mix (VF woff2), so one file per family covers every
  weight. Palette is #441363 / #6D2D93 purple. The page references SplitText and has only a small HTML shell;
  the app loads afterwards.
- **Takeaway:** strong craft, but the format is a campaign microsite. It is the opposite of what an NGO content
  site needs.

### 2.3 D2C Life Science (`d2c-lifescience.com`)

- **Award:** SOTD + Developer Award, 22 Feb 2026, by Iron Velvet. Category: Science. Tags: Minimal, 3D. Uses GSAP,
  Three.js and Blender.
- **Built with Astro:** the source shows Astro islands (`Preloader`, `SmoothScroll`, `PageHomeContainer`,
  header components, all `client:load`). It proves an award-level site can run on our stack.
- **Concept (from Awwwards description only):** a self-solving Rubik's cube that bursts and morphs into a pill to
  present six pillars. One "hero object" carries the whole story.
- **Composition:** a two-colour muted palette (#879186 / #E6F7ED), a short two-part headline, and very minimal
  navigation (just "Contact us").
- **Accessibility:** no skip link or ARIA visible in the text capture.

### 2.4 Creative Reference Library (`crl-2026.webflow.io`)

- **Award:** SOTD + Developer Award, 10 Nov 2026. Tags: Culture & Education, Typography, WebGL, GSAP. Dev scores:
  WPO 7.8, Accessibility 7.0.
- **Typography:** condensed display face (Oswald 200–700), black and white only. Editorial metadata such as
  `/V.01`, `(2026)`, a "Library (20)" count, and category counts in parentheses.
- **Interactions (Awwwards highlights):** a WebGL wheel gallery, a list-to-carousel transition, a footer "letter
  playground" (physics-like letters) and an intro loader.
- **From source:** the external `main.js` is **about 897 KB**. It bundles Three.js/WebGL, GSAP + ScrollTrigger and
  Lenis, and it **does** check `prefers-reduced-motion` (in both the inline CSS and the JS). The menu toggle has
  a text label (Menu/Close).

### 2.5 197 Historias Ilustradas (`197historiasilustradas.com`)

- **Award:** SOTD + Developer Award, 20 Nov 2026. Tags: Culture & Education, Social responsibility, Storytelling.
  Uses Next.js, GSAP and Three.js. Dev scores: WPO 8.2, Accessibility 7.4, Semantics 7.8.
- **Structure:** a memorial archive. One collection can be switched between **Grid / List / Gallery** views, a
  large numeral ("197") anchors the hero, and the site is bilingual (ES/EN, `lang="es-ES"`).
- **Accessibility:** a visible **skip link** ("Omitir"). The tone is calm, with restrained motion that serves the
  content (from Awwwards "Clean" tag + description).
- **Takeaway for DRITZ:** offering several views of one collection suits a competitions/projects archive.

### 2.6 Preymaker (`preymaker.com`)

- **Award:** SOTD + Developer Award, 14 Nov 2026. Category: Technology. Built with React/Next.js, Sanity and WebGL.
  Dev scores: Animations 8.0, Accessibility 7.8 (high for an award site), WPO 7.0.
- **Highlights (from Awwwards description only):** a mask transition between pages, a menu interaction, a
  preloader, and case-study pages.
- **From source:** good ARIA coverage (28 `aria-label`, `aria-live`, `aria-modal`, `aria-expanded`). The downside
  is a **3.6 MB homepage HTML** with 18 `<video>` elements, which is why its WPO score is the weakest of its six.

### 2.7 Where Opportunity Takes Root (`opportunity.waltonfamilyfoundation.org`)

- **Award:** Honorable Mention, 21 Oct 2026, by Gladeye, for a foundation. Tags: Social responsibility, Scrolling,
  Transitions, Data Visualization, Storytelling, Microinteractions. Palette: #E7E72B yellow + #B3CF3C lime, close
  to our amber + lime pairing.
- **Storytelling:** eight numbered chapters marked `( 01 )`…`( 08 )`, a `01/08` counter next to "Full Report", and
  big-number stats ("67%", "1 in 3", "7 in 10"), each with a **Share** button. It closes with a chapter index.
- **Motion (from source):** Next.js, many Lottie references, about 9 `<canvas>` elements, and a springy overshoot
  easing `cubic-bezier(0.34,1.56,0.64,1)`. Awwwards highlights a loading transition, scroll transitions and
  animated infographics.
- **Accessibility:** most images have empty alt text, and the text capture shows some empty headings and
  duplicated split text. These are pitfalls to avoid when splitting headlines into spans.

### 2.8 Omni (`omni.org`)

- **Award:** Honorable Mention, 11 Oct 2026, by Emerald, for a non-profit social-science consultancy. Tags:
  Institutions, Social Responsibility, Microinteractions. Palette: #FF5E34 + #921C4C.
- **Typography:** Typekit display + **Sometype Mono** (Google Fonts) for labels. The eyebrow label sits above an
  H1 ("Nonprofit … Consultancy" eyebrow).
- **Motion (from source):** GSAP 3.12 + ScrollTrigger + SplitType for line reveals. Awwwards highlights CTA hover,
  pattern animations and a homepage "sunburst" interaction.
- **Content model:** five equal focus-area cards, project and publication card grids, a testimonial, and a
  newsletter form with success and error states. It is a sensible NGO information architecture that stays
  lively through micro-interactions rather than 3D.

### 2.9 DeepBook (`deepbook-v2-wip.webflow.io`)

- **Award:** SOTD, 3 Nov 2026, by HOLOGRAPHIK + AKKA. Tags: Technology, Clean, Data Visualization. Palette:
  #1E6EF3 / #6A7681.
- **From source:** GSAP 3.15 with ScrollTrigger, SplitText, CustomEase, **DrawSVG**, MorphSVG and Draggable, plus
  Lenis, Lottie and Swiper. There is a `<canvas data-hero-canvas>` hero and an Inter body face. Easings are
  `cubic-bezier(0.16,1,0.3,1)` (expo-out) and `cubic-bezier(0.65,0,0.35,1)` (in-out). It **has a
  `prefers-reduced-motion` branch**, which sets durations to 0.01.
- **Highlights (Awwwards):** animated line illustrations, hover interactions, footer hover, full-page scroll
  sections.

## 3) Cross-cutting techniques catalogue

1. **Engineering-console labelling.** Mono uppercase labels, numbering (`001`, `A–E`, `( 01 )`), slash separators,
   counters (`01/08`), and live readouts (clock, coordinates). Seen on ZIRKA, Walton, CRL and Omni. It is cheap
   (text + CSS) and very characterful.
2. **One canvas hero, then light DOM.** Most sites keep the heavy visual in a single hero canvas (DeepBook, D2C)
   and use DOM/SVG for the rest.
3. **Split-text reveals.** Lines or words rise behind a mask (SplitText/SplitType on Omni, DeepBook, Cyera, ZIRKA).
   Typical timing is 0.6–1.0 s with a strong ease-out.
4. **Ease-out family dominates.** `cubic-bezier(0.16,1,0.3,1)`, `(0.22,1,0.36,1)` and `(0.25,1,0.5,1)` for entrances;
   `(0.65,0,0.35,1)` for state changes; an overshoot `(0.34,1.56,0.64,1)` reserved for small playful UI.
   Hovers run at 0.3–0.4 s; reveals at 0.6–1 s.
5. **Line drawing.** SVG stroke draw-on (DeepBook uses DrawSVG). A natural fit for circuit traces and can be done
   with CSS `stroke-dashoffset`.
6. **Big-number stat callouts** with chapter numbering (Walton, ZIRKA), sometimes with per-stat share actions.
7. **Several views of one collection** (Grid/List/Gallery on 197; list-to-carousel on CRL).
8. **Loader as brand moment.** Percentage + crosshair (ZIRKA), intro loader (CRL, D2C). Often a performance and
   accessibility cost.
9. **Page transitions.** Mask/wipe transitions (Preymaker), done in JS inside SPAs. **None of the sites studied
   use native CSS cross-document view transitions**, so this is an opportunity to get the same feel for free on a
   multi-page static site.
10. **Smooth-scroll libraries** (Lenis on ZIRKA, CRL, DeepBook, D2C). Common, but they override native scrolling.
11. **Reduced motion is the exception.** Only CRL and DeepBook visibly handle `prefers-reduced-motion`.
    Accessibility is consistently the lowest Developer Award sub-score (6.6–7.8).
12. **Weight problems in award winners.** CRL ships about 897 KB of JS, Preymaker 3.6 MB of HTML with 18 videos,
    ZIRKA loads GSAP from the CDN several times. Award juries tolerate this; a Lighthouse 95+ mobile budget does not.

## 4) What we apply to DRITZ and why

| Technique                                                                                                                                 | Where on DRITZ                                    | Implementation                                                                                                                                                             | Performance & reduced-motion notes                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Circuit-trace hero: traces grow along a blueprint grid, nodes pulse amber/lime (inspired by single hero canvas + line-drawing, §3.2/§3.5) | Hero                                              | Vanilla JS `<canvas>` 2D, under 5 KB, started after first paint (`requestIdleCallback`); static SVG/CSS grid underneath as the LCP-safe background                         | DPR capped at 2. Paused when off-screen (IntersectionObserver) and on `visibilitychange`. Reduced motion: draw one static frame. Headline stays HTML so LCP is text.      |
| Kinetic headline: per-line mask reveal, a variable-font weight shift on Bricolage Grotesque (§3.3)                                        | Hero, manifesto                                   | Server-rendered line spans (Astro), CSS `@keyframes` translateY 0.8 s `cubic-bezier(0.22,1,0.36,1)`, 60–80 ms stagger                                                      | Full sentence also exposed via `aria-label` / visually-hidden text so screen readers do not read fragments (Walton pitfall). Reduced motion: opacity-only fade at 200 ms. |
| Console labels: JetBrains Mono uppercase eyebrows, `001`-style numbering, `//` separators, `01/06` counters (§3.1, ZIRKA/Omni)            | Section headers, news-card meta, timeline, footer | CSS only (`counter()` for numbering)                                                                                                                                       | Mono font subset to Latin Ext (č, š, ž, ć, đ) and loaded `font-display: swap`; labels are static text, zero JS.                                                           |
| Scroll reveals for manifesto statements and stat callouts ("4 countries", teams, years) (§3.6)                                            | Manifesto section, about                          | CSS scroll-driven animations (`animation-timeline: view()`) with an IntersectionObserver class-toggle fallback (~1 KB)                                                     | Only transform/opacity are animated. Reduced motion: content visible with no transform. Numbers are real text from the start; no count-up hiding the value.               |
| Timeline with a trace that "solders" each milestone node as it enters view (§3.5)                                                         | Timeline (history / FLL seasons)                  | Inline SVG path + `stroke-dashoffset` driven by `animation-timeline: view()`; IO fallback                                                                                  | Path length precomputed at build time. Reduced motion: fully drawn path. Semantic `<ol>` underneath.                                                                      |
| Partner marquee                                                                                                                           | Partner/sponsor strip                             | CSS-only `@keyframes` translateX on a duplicated list (duplicate is `aria-hidden`), 40–60 s linear                                                                         | Pauses on hover/focus-within. Reduced motion: static wrapping grid. Logos as SVG/AVIF with explicit width/height.                                                         |
| News cards: hover lifts a blueprint "corner bracket" frame, amber underline draws in, image scales 1.03 (§3.4)                            | News cards (`/novice`)                            | CSS only, 0.35 s `cubic-bezier(0.16,1,0.3,1)`; whole card clickable via a stretched link                                                                                   | Same effect on `:focus-visible`. Images lazy-loaded with `aspect-ratio` set (CLS 0).                                                                                      |
| Grid/List toggle for the news or projects archive (197's multi-view idea, §3.7)                                                           | News index, later competitions archive            | Vanilla JS swapping a `data-view` attribute; view transition between states via `document.startViewTransition` where supported                                             | Real `<button aria-pressed>`; choice kept in `localStorage`. Without JS the list view is the default.                                                                     |
| Cross-document view transitions: header persists, page content wipes upward, a news-card image morphs into the article hero (§3.9)        | All page navigations                              | CSS only: `@view-transition { navigation: auto; }` + `view-transition-name` on header and card image ↔ article hero                                                        | Zero JS. Progressive enhancement (unsupported browsers just navigate). Keep under 400 ms. Disable under `prefers-reduced-motion: reduce`.                                 |
| Subtle cursor follower: small amber ring that eases behind the pointer and snaps to interactive elements                                  | Desktop only, site-wide                           | Vanilla JS (~1.5 KB), one `transform` per rAF, lerp 0.15; `pointer-events: none`                                                                                           | Only with `(hover: hover) and (pointer: fine)`. **Native cursor stays visible.** Off with reduced motion. Stops its rAF loop when idle.                                   |
| Navigation with a live "status strip" (local time Ljubljana, next FLL event countdown) (ZIRKA HUD idea, §3.1)                             | Header / mobile menu                              | Static HTML from Astro build; tiny inline script updates the clock once a minute                                                                                           | Not an `aria-live` region (would be noisy). Mobile menu is a native `<dialog>` or a disclosure button with `aria-expanded`.                                               |
| Playful 404: "trace lost". A circuit trace runs off the grid and the visitor can click nodes to reconnect it                              | 404 page                                          | Reuse the hero canvas module with a different seed; plain links as the actual exit                                                                                         | Loads only on 404. Reduced motion: static illustration.                                                                                                                   |
| Signal-red used only for live/"now" states (registration open, event today)                                                               | Badges, status strip                              | CSS tokens                                                                                                                                                                 | Never the only cue: always paired with text. Checked for contrast against ink-navy.                                                                                       |
| Motion tokens                                                                                                                             | Global                                            | CSS custom properties: `--ease-out: cubic-bezier(0.22,1,0.36,1)`, `--ease-io: cubic-bezier(0.65,0,0.35,1)`, `--dur-ui: 200ms`, `--dur-hover: 350ms`, `--dur-reveal: 800ms` | One global `@media (prefers-reduced-motion: reduce)` block collapses durations. All motion respects it (§3.11).                                                           |

## 5) What we deliberately do NOT apply and why

- **Full WebGL / Three.js scenes** (Cyera, CRL wheel gallery, D2C morphing object). They pull in 150–900 KB of JS,
  GPU and battery cost on mid-range phones, and a main-thread hit that breaks Lighthouse 95+ mobile. A 2D canvas
  and SVG deliver the blueprint look at a fraction of the cost.
- **Scroll-jacking and smooth-scroll libraries** (Lenis, full-page snap scroll on DeepBook). They override native
  scroll, keyboard, find-in-page and assistive tech, and add JS. Native scroll + CSS scroll-driven animations
  instead.
- **Hiding the native cursor.** It hurts usability, accessibility and touch/stylus users. The follower is purely
  decorative and sits on top of the real cursor.
- **Autoplay background video** (ZIRKA, Preymaker's 18 videos). Heavy LCP and data cost for families on mobile.
  Any video stays click-to-play with a poster image.
- **Blocking preloaders / percentage intros** (ZIRKA, CRL, D2C). They delay content and LCP for a static site
  that loads fast anyway. The hero animation starts after content is visible.
- **GSAP + SplitText + Lottie stacks.** Every effect we need is reachable with CSS + under 10 KB vanilla JS total.
  Avoid duplicated CDN libraries, jQuery, and third-party animation runtimes.
- **Count-up numbers that start at 0.** If JS fails or reduced motion is on, the real value must already be in
  the HTML.
- **Character-level split text without an accessible label** (the Walton-style duplication). Line-level spans
  only, with the full string available to assistive tech.
- **Game-like or campaign navigation** (Cyera's planets). DRITZ visitors (teachers, parents, mentors, sponsors)
  need fast access to competitions, registration and news; experimental IA would get in the way.
- **Copying any site's visual identity.** We borrow principles (console labels, line drawing, multi-view
  archive, chapter numbering), not layouts, palettes, type pairings or assets.
