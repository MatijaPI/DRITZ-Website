import sl from './sl.ts';
import en from './en.ts';
import type { Dict } from './types.ts';
import { defaultLocale, isLocale, localeMeta, type Locale } from './config.ts';

export { locales, defaultLocale, localeMeta, isLocale, type Locale } from './config.ts';
export { routes, path, newsPath, newsBase, type RouteKey } from './routes.ts';

const dictionaries: Record<Locale, Dict> = { sl, en };

export function t(locale: Locale): Dict {
  return dictionaries[locale];
}

/** Replace `{name}` placeholders. */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? `{${key}}`));
}

export function localeFromUrl(url: URL): Locale {
  const first = url.pathname.split('/')[1];
  return isLocale(first) ? first : defaultLocale;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'sl' ? 'en' : 'sl';
}

export function formatDate(date: Date, locale: Locale, style: 'long' | 'short' = 'long'): string {
  return new Intl.DateTimeFormat(localeMeta[locale].htmlLang, {
    day: 'numeric',
    month: style === 'long' ? 'long' : 'numeric',
    year: 'numeric',
    timeZone: 'Europe/Ljubljana',
  }).format(date);
}

/** Formats `YYYY` or `YYYY-MM` timeline dates. */
export function formatMonth(value: string, locale: Locale): string {
  const [year, month] = value.split('-');
  if (!month) return year ?? value;
  return new Intl.DateTimeFormat(localeMeta[locale].htmlLang, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(Number(year), Number(month) - 1, 1)),
  );
}

export function formatNumber(value: number, locale: Locale): string {
  return new Intl.NumberFormat(localeMeta[locale].htmlLang, { useGrouping: value >= 10000 }).format(value);
}
