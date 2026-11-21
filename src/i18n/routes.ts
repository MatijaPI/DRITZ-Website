import type { Locale } from './config.ts';

/**
 * Localized paths of every static page. The language switcher, hreflang
 * alternates, navigation and the sitemap are all derived from this map.
 * To add a page: add a key here, create both page files under `src/pages/`
 * and add its strings to `sl.ts` and `en.ts`.
 */
export const routes = {
  home: { sl: '/', en: '/en/' },
  about: { sl: '/o-nas/', en: '/en/about/' },
  activities: { sl: '/aktivnosti/', en: '/en/activities/' },
  fll: { sl: '/first-lego-league/', en: '/en/first-lego-league/' },
  news: { sl: '/novice/', en: '/en/news/' },
  supporters: { sl: '/podporniki/', en: '/en/supporters/' },
  join: { sl: '/pridruzite-se/', en: '/en/get-involved/' },
  contact: { sl: '/kontakt/', en: '/en/contact/' },
  privacy: { sl: '/zasebnost/', en: '/en/privacy/' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

/** Base path of news articles per locale. */
export const newsBase: Record<Locale, string> = { sl: '/novice/', en: '/en/news/' };

export function path(key: RouteKey, locale: Locale): string {
  return routes[key][locale];
}

export function newsPath(locale: Locale, slug: string): string {
  return `${newsBase[locale]}${slug}/`;
}
