import { getCollection, type CollectionEntry } from 'astro:content';
import { newsPath, type Locale } from '../i18n/index.ts';

export type NewsEntry = CollectionEntry<'news'>;

export function entryLocale(entry: { id: string }): Locale {
  return entry.id.startsWith('en/') ? 'en' : 'sl';
}

/** URL slug of a post = its file name (`sl/my-post` → `my-post`). */
export function entrySlug(entry: { id: string }): string {
  return entry.id.slice(entry.id.indexOf('/') + 1);
}

/** Published posts of one language, newest first; undated posts go last. */
export async function getNews(locale: Locale): Promise<NewsEntry[]> {
  const all = await getCollection('news', (e) => entryLocale(e) === locale && !e.data.draft);
  return all.sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0));
}

/** Paths of the same post in every language, keyed by locale. */
export async function newsAlternates(entry: NewsEntry): Promise<Partial<Record<Locale, string>>> {
  const all = await getCollection('news', (e) => e.data.translationKey === entry.data.translationKey && !e.data.draft);
  return Object.fromEntries(all.map((e) => [entryLocale(e), newsPath(entryLocale(e), entrySlug(e))]));
}

export async function newsByKey(locale: Locale, key: string): Promise<NewsEntry | undefined> {
  return (await getNews(locale)).find((e) => e.data.translationKey === key);
}
