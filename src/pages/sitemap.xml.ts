import type { APIRoute } from 'astro';
import { routes, locales, localeMeta, newsPath, type Locale } from '../i18n/index.ts';
import { getNews, newsAlternates, entrySlug } from '../lib/news.ts';
import { site } from '../data/site.ts';
import { absolute } from '../lib/seo.ts';

interface Url {
  loc: string;
  lastmod: string;
  alternates: Partial<Record<Locale, string>>;
}

const iso = (d: Date | string) => new Date(d).toISOString().slice(0, 10);

export const GET: APIRoute = async () => {
  const urls: Url[] = [];

  for (const paths of Object.values(routes)) {
    for (const locale of locales) {
      urls.push({ loc: paths[locale], lastmod: site.updated, alternates: paths });
    }
  }

  for (const locale of locales) {
    for (const entry of await getNews(locale)) {
      urls.push({
        loc: newsPath(locale, entrySlug(entry)),
        lastmod: iso(entry.data.updated ?? entry.data.date ?? site.updated),
        alternates: await newsAlternates(entry),
      });
    }
  }

  const body = urls
    .map(({ loc, lastmod, alternates }) => {
      const links = Object.entries(alternates)
        .map(([l, p]) => `    <xhtml:link rel="alternate" hreflang="${localeMeta[l as Locale].htmlLang}" href="${absolute(p)}"/>`)
        .concat(alternates.sl ? [`    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(alternates.sl)}"/>`] : [])
        .join('\n');
      return `  <url>\n    <loc>${absolute(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n${links}\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
