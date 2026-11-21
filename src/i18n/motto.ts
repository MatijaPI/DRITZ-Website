/**
 * The DRITZ motto lives here — one place, both languages.
 *
 * To swap the motto, change `ACTIVE_MOTTO` to the id of another candidate.
 * `cycle` (optional) lists alternative last words that the hero animates
 * through; the first entry must be the word that ends `text`.
 * Rationale for every candidate: docs/brand-copy.md.
 */
export interface Motto {
  id: string;
  sl: { text: string; cycle?: string[] };
  en: { text: string; cycle?: string[] };
}

export const mottos: Motto[] = [
  {
    id: 'neraziskano',
    sl: {
      text: 'Neznano je le še neraziskano.',
      cycle: ['neraziskano', 'nesestavljeno', 'nesprogramirano', 'nepreizkušeno'],
    },
    en: {
      text: 'The unknown is just unexplored.',
      cycle: ['unexplored', 'unbuilt', 'uncoded', 'untested'],
    },
  },
  {
    id: 'kocka-za-kocko',
    sl: { text: 'Gradimo prihodnost. Kocko za kocko.' },
    en: { text: 'Building the future. Brick by brick.' },
  },
  {
    id: 'raziskuj-sestavi-zazeni',
    sl: { text: 'Raziskuj. Sestavi. Zaženi.' },
    en: { text: 'Explore. Build. Launch.' },
  },
  {
    id: 'vprasanje',
    sl: { text: 'Vsak robot se začne z vprašanjem.' },
    en: { text: 'Every robot starts with a question.' },
  },
  {
    id: 'v-roke',
    sl: { text: 'Znanost, ki jo primeš v roke.' },
    en: { text: 'Science you can get your hands on.' },
  },
  {
    id: 'kolesa',
    sl: { text: 'Radovednosti damo kolesa.' },
    en: { text: 'We put wheels on curiosity.' },
  },
  {
    id: 'napake',
    sl: { text: 'Napaka je samo podatek.' },
    en: { text: 'A mistake is just data.' },
  },
  {
    id: 'od-ideje',
    sl: { text: 'Od vprašanja do robota.' },
    en: { text: 'From question to robot.' },
  },
  {
    id: 'mladi-umi',
    sl: { text: 'Mladi umi. Velike ideje. Pravi roboti.' },
    en: { text: 'Young minds. Big ideas. Real robots.' },
  },
];

export const ACTIVE_MOTTO = 'neraziskano';

export function activeMotto(): Motto {
  const motto = mottos.find((m) => m.id === ACTIVE_MOTTO);
  if (!motto) throw new Error(`Unknown motto id "${ACTIVE_MOTTO}" in src/i18n/motto.ts`);
  return motto;
}
