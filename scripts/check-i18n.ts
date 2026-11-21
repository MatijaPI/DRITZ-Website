/**
 * Build-time translation check (run by `npm run build`).
 * Fails when a key, array length or value type differs between sl.ts and en.ts,
 * when a string is empty, or when a news post has no counterpart in the other language.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import sl from '../src/i18n/sl.ts';
import en from '../src/i18n/en.ts';
import { mottos } from '../src/i18n/motto.ts';

const errors: string[] = [];

function compare(a: unknown, b: unknown, path: string): void {
  const ta = Array.isArray(a) ? 'array' : typeof a;
  const tb = Array.isArray(b) ? 'array' : typeof b;
  if (ta !== tb) {
    errors.push(`${path}: type mismatch (sl: ${ta}, en: ${tb})`);
    return;
  }
  if (ta === 'string') {
    if (!(a as string).trim()) errors.push(`${path}: empty string in sl`);
    if (!(b as string).trim()) errors.push(`${path}: empty string in en`);
    const pa = ((a as string).match(/\{\w+\}/g) ?? []).sort().join();
    const pb = ((b as string).match(/\{\w+\}/g) ?? []).sort().join();
    if (pa !== pb) errors.push(`${path}: placeholders differ (sl: ${pa || '-'}, en: ${pb || '-'})`);
    return;
  }
  if (ta === 'array') {
    const aa = a as unknown[];
    const bb = b as unknown[];
    if (aa.length !== bb.length) errors.push(`${path}: array length differs (sl: ${aa.length}, en: ${bb.length})`);
    aa.forEach((item, i) => i < bb.length && compare(item, bb[i], `${path}[${i}]`));
    return;
  }
  if (ta === 'object' && a && b) {
    const ka = Object.keys(a);
    const kb = Object.keys(b);
    for (const k of ka) if (!kb.includes(k)) errors.push(`${path}.${k}: missing in en`);
    for (const k of kb) if (!ka.includes(k)) errors.push(`${path}.${k}: missing in sl`);
    for (const k of ka)
      if (kb.includes(k)) compare((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k], `${path}.${k}`);
  }
}

compare(sl, en, 'dict');

for (const m of mottos) {
  if (!m.sl.text || !m.en.text) errors.push(`motto "${m.id}": missing text`);
  if (Boolean(m.sl.cycle) !== Boolean(m.en.cycle)) errors.push(`motto "${m.id}": cycle defined in one language only`);
}

// News posts: every translationKey must exist in both languages.
const newsRoot = join(import.meta.dirname, '..', 'src', 'content', 'news');
const keys: Record<string, Set<string>> = { sl: new Set(), en: new Set() };
for (const lang of ['sl', 'en'] as const) {
  for (const file of readdirSync(join(newsRoot, lang)).filter((f) => f.endsWith('.md'))) {
    const src = readFileSync(join(newsRoot, lang, file), 'utf8');
    const key = /^translationKey:\s*["']?([^"'\n]+)["']?\s*$/m.exec(src)?.[1]?.trim();
    if (!key) errors.push(`news/${lang}/${file}: missing translationKey`);
    else if (keys[lang]!.has(key)) errors.push(`news/${lang}/${file}: duplicate translationKey "${key}"`);
    else keys[lang]!.add(key);
  }
}
for (const k of keys.sl!) if (!keys.en!.has(k)) errors.push(`news "${k}": English version missing`);
for (const k of keys.en!) if (!keys.sl!.has(k)) errors.push(`news "${k}": Slovenian version missing`);

if (errors.length) {
  console.error(`\n✖ i18n check failed (${errors.length}):\n  ${errors.join('\n  ')}\n`);
  process.exit(1);
}
console.log(`✔ i18n check passed (${keys.sl!.size} news pairs, dictionaries in sync)`);
