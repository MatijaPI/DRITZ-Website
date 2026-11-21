import type { APIRoute, GetStaticPaths } from 'astro';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { renderOg } from '../../../lib/og.ts';
import { t, locales, type Locale } from '../../../i18n/index.ts';
import { activeMotto } from '../../../i18n/motto.ts';
import { getNews, entrySlug } from '../../../lib/news.ts';

type Props = {
  eyebrow: string;
  title: string;
  photo?: string;
};

/** Absolute path of a news post's source image, read from its front matter. */
function sourceImage(filePath: string | undefined): string | undefined {
  if (!filePath) return undefined;
  const file = resolve(process.cwd(), filePath);
  const rel = /^image:\s*["']?([^"'\n]+)["']?\s*$/m.exec(readFileSync(file, 'utf8'))?.[1];
  return rel ? resolve(dirname(file), rel.trim()) : undefined;
}

export const getStaticPaths = (async () => {
  const paths: { params: { locale: Locale; id: string }; props: Props }[] = [];
  for (const locale of locales) {
    const d = t(locale);
    const pages: Record<string, { eyebrow: string; title: string }> = {
      home: { eyebrow: d.home.hero.eyebrow.split('·')[0]?.trim() ?? d.meta.siteName, title: activeMotto()[locale].text },
      about: d.about.hero,
      activities: d.activitiesPage.hero,
      fll: d.fllPage.hero,
      news: d.newsPage.hero,
      supporters: d.supportersPage.hero,
      join: d.joinPage.hero,
      contact: d.contactPage.hero,
      privacy: { eyebrow: d.privacyPage.eyebrow, title: d.nav.privacy },
      '404': { eyebrow: d.notFound.code, title: d.notFound.title },
    };
    for (const [id, p] of Object.entries(pages))
      paths.push({ params: { locale, id }, props: { eyebrow: p.eyebrow, title: p.title } });

    for (const entry of await getNews(locale)) {
      const src = sourceImage(entry.filePath);
      paths.push({
        params: { locale, id: `news/${entrySlug(entry)}` },
        props: { eyebrow: d.newsPage.hero.eyebrow, title: entry.data.title, ...(src ? { photo: src } : {}) },
      });
    }
  }
  return paths;
}) satisfies GetStaticPaths;

export const GET: APIRoute<Props> = async ({ props }) => {
  const png = await renderOg({ ...props, footer: 'dritz.si' });
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/jpeg' } });
};
