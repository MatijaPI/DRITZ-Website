import { site } from '../data/site.ts';
import { localeMeta, t, type Locale } from '../i18n/index.ts';

export interface Crumb {
  name: string;
  path: string;
}

export const absolute = (path: string): string => new URL(path, site.url).href;

/** Builds the <title>: page title + " | Društvo DRITZ", unless the title already contains the brand. */
export function pageTitle(title: string, locale: Locale): string {
  const d = t(locale).meta;
  return title.includes(d.siteName) ? title : `${title}${d.titleSeparator}${d.siteName}`;
}

/** Path of the generated Open Graph image for a page. */
export function ogImagePath(locale: Locale, id: string): string {
  return `/og/${locale}/${id}.jpg`;
}

const orgId = `${site.url}/#organization`;
const websiteId = (locale: Locale) => `${site.url}/#website-${locale}`;

export function organizationLd(locale: Locale) {
  const d = t(locale);
  return {
    '@type': ['NGO', 'EducationalOrganization'],
    '@id': orgId,
    name: site.name,
    alternateName: [site.shortName, 'DRITZ'].filter((v, i, a) => a.indexOf(v) === i),
    legalName: site.legalName,
    url: `${site.url}/`,
    logo: {
      '@type': 'ImageObject',
      url: absolute('/assets/images/logo-square.png'),
      width: 500,
      height: 500,
    },
    image: absolute('/assets/images/logo-horizontal.png'),
    description: d.footer.tagline,
    email: site.email,
    telephone: site.phone.international,
    foundingDate: String(site.foundingYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.countryCode,
    },
    areaServed: [
      { '@type': 'Country', name: 'Slovenia', identifier: 'SI' },
      { '@type': 'Country', name: 'Croatia', identifier: 'HR' },
      { '@type': 'Country', name: 'Serbia', identifier: 'RS' },
      { '@type': 'Country', name: 'Montenegro', identifier: 'ME' },
    ],
    knowsAbout: ['FIRST LEGO League', 'Robotics', 'STEM education', 'Science', 'Technology'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: site.email,
        telephone: site.phone.international,
        availableLanguage: ['sl', 'en'],
        areaServed: ['SI', 'HR', 'RS', 'ME'],
      },
    ],
    ...(site.social.length ? { sameAs: site.social.map((s) => s.url) } : {}),
  };
}

export function websiteLd(locale: Locale) {
  return {
    '@type': 'WebSite',
    '@id': websiteId(locale),
    name: site.name,
    alternateName: site.shortName,
    url: absolute(locale === 'sl' ? '/' : '/en/'),
    inLanguage: localeMeta[locale].htmlLang,
    publisher: { '@id': orgId },
  };
}

export function webPageLd(opts: {
  locale: Locale;
  url: string;
  title: string;
  description: string;
  type?: string;
  image?: string;
}) {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.title,
    description: opts.description,
    inLanguage: localeMeta[opts.locale].htmlLang,
    isPartOf: { '@id': websiteId(opts.locale) },
    about: { '@id': orgId },
    ...(opts.image ? { primaryImageOfPage: { '@type': 'ImageObject', url: opts.image } } : {}),
  };
}

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absolute(c.path),
    })),
  };
}

export function articleLd(opts: {
  locale: Locale;
  url: string;
  headline: string;
  description: string;
  images: string[];
  datePublished?: Date | undefined;
  dateModified?: Date | undefined;
}) {
  return {
    '@type': 'NewsArticle',
    '@id': `${opts.url}#article`,
    headline: opts.headline.length > 110 ? `${opts.headline.slice(0, 107)}…` : opts.headline,
    description: opts.description,
    image: opts.images,
    inLanguage: localeMeta[opts.locale].htmlLang,
    mainEntityOfPage: { '@id': `${opts.url}#webpage` },
    author: { '@type': 'Organization', '@id': orgId, name: site.name, url: `${site.url}/` },
    publisher: { '@id': orgId },
    ...(opts.datePublished ? { datePublished: opts.datePublished.toISOString().slice(0, 10) } : {}),
    ...((opts.dateModified ?? opts.datePublished)
      ? { dateModified: (opts.dateModified ?? opts.datePublished)!.toISOString().slice(0, 10) }
      : {}),
  };
}
