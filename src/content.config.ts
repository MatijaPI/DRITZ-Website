import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * News posts live in `src/content/news/<lang>/<slug>.md` — the file name is the
 * URL slug (lowercase ASCII letters, digits and hyphens). The two language
 * versions of one post share the same `translationKey`.
 */
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      translationKey: z.string(),
      /** Full headline, rendered as the page <h1>. */
      title: z.string(),
      /** Short title for <title> / social cards (the site name is appended automatically). */
      seoTitle: z.string().max(60),
      /** Meta description, ideally 120–160 characters. */
      description: z.string().min(70).max(170),
      /** Teaser shown on cards. */
      excerpt: z.string(),
      /** Publication date. Omit when unknown and set `dateLabel` instead. */
      date: z.coerce.date().optional(),
      dateLabel: z.string().optional(),
      updated: z.coerce.date().optional(),
      location: z.string().optional(),
      image: image(),
      imageAlt: z.string(),
      draft: z.boolean().default(false),
    }),
});

/** Long-form legal pages (privacy policy) in `src/content/legal/<lang>/`. */
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    translationKey: z.string(),
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date(),
  }),
});

export const collections = { news, legal };
