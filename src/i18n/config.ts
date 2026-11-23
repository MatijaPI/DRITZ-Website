export const locales = ['sl', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'sl';

/** BCP-47 tags used for <html lang>, hreflang and Intl formatting. */
export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string; label: string; short: string }> = {
  sl: { htmlLang: 'sl', ogLocale: 'sl_SI', label: 'Slovenščina', short: 'SI' },
  en: { htmlLang: 'en', ogLocale: 'en_GB', label: 'English', short: 'EN' },
};

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}
