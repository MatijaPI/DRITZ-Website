/**
 * Organisation facts that are the same in every language.
 * Edit here — every page, the footer and the JSON-LD read from this file.
 */
export const site = {
  url: 'https://dritz.si',
  name: 'Društvo DRITZ',
  shortName: 'DRITZ',
  legalName: 'Društvo za raziskovanje in izobraževanje o tehnologiji in znanosti',
  foundingYear: 2024,
  email: 'info@dritz.si',
  phone: { display: '031 251 237', international: '+386 31 251 237', href: 'tel:+38631251237' },
  address: {
    street: 'Medlog 52A',
    postalCode: '3000',
    city: 'Celje',
    countryCode: 'SI',
  },
  /** ISO 3166-1 codes of the countries where DRITZ helps run FIRST LEGO League. */
  regionCountries: ['SI', 'HR', 'RS', 'ME'] as const,
  /**
   * Official social profiles. Add full URLs here (e.g. Instagram, Facebook,
   * LinkedIn, YouTube) — they appear in the footer, on the contact page and in
   * the Organization JSON-LD `sameAs`. Empty = hidden. See docs/content-todo.md.
   */
  social: [] as { label: string; url: string }[],
  /** Date of the last site-wide content update, used as sitemap `lastmod` for static pages. */
  updated: '2026-11-21',
  themeColor: '#070a12',
} as const;

export const env = {
  googleSiteVerification: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  analytics: {
    provider: (import.meta.env.PUBLIC_ANALYTICS_PROVIDER ?? '') as '' | 'plausible' | 'umami',
    domain: import.meta.env.PUBLIC_ANALYTICS_DOMAIN ?? '',
    src: import.meta.env.PUBLIC_ANALYTICS_SRC ?? '',
    id: import.meta.env.PUBLIC_ANALYTICS_ID ?? '',
  },
};
