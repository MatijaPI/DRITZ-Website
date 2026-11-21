# Brand copy — motto, manifesto, voice

## 1. What the old copy stood for

| Old text                                                                                       | What it really says                                                                                                          |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Motto: »Raziskujemo neznano, izobražujemo za prihodnost.«                                      | Curiosity about the unknown + education with a long horizon. It also mirrors the name: **R**aziskovanje + **I**zobraževanje. |
| Slogan: "Skupaj gradimo inovativno, ustvarjalno in tehnološko pismeno prihodnost."             | We build (not just teach), together, towards technological literacy.                                                         |
| Mission: "Povezovati mlade z znanostjo in tehnologijo skozi praktično učenje in raziskovanje." | Hands-on, practical learning for young people.                                                                               |
| Vision: "Družba, v kateri so inovativnost, sodelovanje in tehnično znanje dostopni vsakomur."  | Access for everyone; collaboration.                                                                                          |
| About: "okolje, kjer lahko mladi varno preizkušajo ideje, sodelujejo in rastejo"               | A safe place to try, fail, and grow.                                                                                         |

Core meaning to keep: **curiosity → hands-on building → together → a future open to everyone.**

## 2. Voice

Confident, curious, a bit playful, tech-savvy. Short sentences. Strong verbs (sestaviti, sprogramirati,
preizkusiti, zagnati / build, code, test, launch). Concrete imagery from robotics and the lab (the competition
table, code, gears, a hypothesis). Wordplay must work natively in each language — the two versions are siblings,
not translations. Formal plural "vi" in Slovenian UI copy; a playful singular "ti" only where we speak directly
to a young maker. No hype words, no invented numbers.

## 3. Motto candidates (≥ 8)

All candidates are stored in **`src/i18n/motto.ts`**. To swap the motto, change `ACTIVE_MOTTO` to another `id` —
the hero, the footer and the homepage OG image update automatically.

| #   | id                        | Slovenian                              | English                              | Tone            | Rationale                                                                                                                                                                                                                                                                 |
| --- | ------------------------- | -------------------------------------- | ------------------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ★ 1 | `neraziskano`             | **Neznano je le še neraziskano.**      | **The unknown is just unexplored.**  | poetic + bold   | Distils the old motto ("raziskujemo neznano") into one confident line. The double "ne-" (neznano / neraziskano) is a native Slovenian sound-play, and the hero types alternative endings: _nesestavljeno, nesprogramirano, nepreizkušeno_ / _unbuilt, uncoded, untested_. |
| 2   | `kocka-za-kocko`          | Gradimo prihodnost. Kocko za kocko.    | Building the future. Brick by brick. | mission-driven  | Keeps the old slogan's "gradimo prihodnost" and adds the LEGO brick — instantly FLL.                                                                                                                                                                                      |
| 3   | `raziskuj-sestavi-zazeni` | Raziskuj. Sestavi. Zaženi.             | Explore. Build. Launch.              | bold            | Three imperatives = the maker loop; "zaženi" means both "run (the code)" and "launch (the rocket)" — the D in the logo.                                                                                                                                                   |
| 4   | `vprasanje`               | Vsak robot se začne z vprašanjem.      | Every robot starts with a question.  | poetic          | Science first, hardware second. Used as the manifesto headline.                                                                                                                                                                                                           |
| 5   | `v-roke`                  | Znanost, ki jo primeš v roke.          | Science you can get your hands on.   | warm            | "Prijeti v roke" is idiomatic; says "hands-on" without the anglicism.                                                                                                                                                                                                     |
| 6   | `kolesa`                  | Radovednosti damo kolesa.              | We put wheels on curiosity.          | witty           | Robots get wheels; curiosity gets moving.                                                                                                                                                                                                                                 |
| 7   | `napake`                  | Napaka je samo podatek.                | A mistake is just data.              | witty / values  | The engineer's attitude to failure; echoes the old "varno preizkušajo ideje". Also used on the 404 page.                                                                                                                                                                  |
| 8   | `od-ideje`                | Od vprašanja do robota.                | From question to robot.              | mission-driven  | Describes the whole journey in four words; good as a social bio.                                                                                                                                                                                                          |
| 9   | `mladi-umi`               | Mladi umi. Velike ideje. Pravi roboti. | Young minds. Big ideas. Real robots. | bold / rhythmic | Triadic rhythm, very clear for sponsors; slightly more generic.                                                                                                                                                                                                           |

**Chosen: #1 "Neznano je le še neraziskano." / "The unknown is just unexplored."** It is the most faithful to the
original motto, it is memorable in both languages, and it gives the hero a kinetic-typography moment that says
_research, build, code, test_ without a single extra sentence. Runners-up for quick swaps: #3 (most energetic),
#2 (most FLL-specific), #7 (most distinctive voice).

## 4. Vision / mission / "why we exist"

Source: `manifesto`, `values`, `about.mission`, `about.vision` in `src/i18n/sl.ts` / `en.ts`.

**Headline:** Vsak robot se začne z vprašanjem. / _Every robot starts with a question._

**Manifesto (4 lines):**

1. Vprašanja spreminjamo v poskuse, poskuse v kodo, kodo v gibanje. / _We turn questions into experiments, experiments into code, code into motion._
2. Napaka pri nas ni poraz. Je podatek. / _Here, a mistake is not a failure. It is data._
3. Gradimo skupaj – v učilnici, ob tekmovalni mizi in onkraj meja. / _We build together – in the classroom, at the competition table and across borders._
4. Prihodnosti ne čakamo. Sestavljamo jo. / _We are not waiting for the future. We are building it._

**Value pillars — "Štirje zobniki, ki poganjajo DRITZ" / "Four gears that drive DRITZ":**

| SL              | EN                | Short description                                                                                                            |
| --------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Radovednost     | Curiosity         | A good question is the best tool in the workshop.                                                                            |
| Učenje z rokami | Hands-on learning | What you build, code and test yourself is what sticks. (SL: Kar sam sestaviš, sprogramiraš in preizkusiš, si tudi zapomniš.) |
| Sodelovanje     | Teamwork          | The best solutions come from teams — peers, mentors, volunteers.                                                             |
| Dostopnost      | Open to all       | Technology should not be a privilege (the original vision).                                                                  |

**Mission:** Mlade povezujemo z znanostjo in tehnologijo – skozi praktično učenje, raziskovanje in tekmovanja.
**Vision (unchanged in meaning):** Družba, v kateri so inovativnost, sodelovanje in tehnično znanje dostopni vsakomur.

## 5. The voice applied (examples)

| Place            | Slovenian                                                  | English                                                    |
| ---------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| Hero CTA         | Pridružite se · Kaj počnemo                                | Get involved · What we do                                  |
| Contact heading  | Pozdravljeni, človek!                                      | Hello, human!                                              |
| 404              | Ta robot je zapeljal s proge. … napaka je samo podatek.    | This robot drove off the track. … a mistake is just data.  |
| Hero console     | STATUS: gradimo prihodnost                                 | STATUS: building the future                                |
| Activities intro | vedno z rokami pri delu in glavo v oblakih                 | always hands-on, with our heads in the clouds              |
| Join hero        | V tej ekipi je prostor še za enega                         | There is always room for one more on this team             |
| Form error       | Vpišite veljaven e-poštni naslov, na primer ime@primer.si. | Please enter a valid email address, e.g. name@example.com. |
| Footer           | brez piškotkov in sledilnikov                              | no cookies, no trackers                                    |

## 6. Kinetic presentation

- **Hero:** the motto's last word is typed and re-typed (typewriter, caret) — the full sentence is the real `<h1>`
  text and its accessible name stays fixed; the box reserves the width of the longest word (no layout shift).
- **Manifesto:** a full-screen section; each line lights up word by word as it enters the viewport, highlighted
  words get an amber underline drawn in. Without JS / with reduced motion everything is simply lit.
- **Headings:** words slide up from a mask.
- **Footer:** the motto as outlined giant type.
- All motion respects `prefers-reduced-motion` and the hero's pause button.
