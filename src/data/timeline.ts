/**
 * Milestones shown on the homepage and the About page, oldest first.
 * `date` is `YYYY` or `YYYY-MM`; the text for each `id` lives in
 * `timeline.items` of src/i18n/sl.ts and src/i18n/en.ts.
 * `newsKey` links the milestone to the news post with that translationKey.
 */
export const timeline = [
  { id: 'marrakech', date: '2023-05', newsKey: 'marrakech-2023' },
  { id: 'founded', date: '2024' },
  { id: 'harrogate24', date: '2024-04', newsKey: 'uk-final-2024' },
  { id: 'bodo', date: '2024-05', newsKey: 'bodo-2024' },
  { id: 'harrogate25', date: '2025-05', newsKey: 'uk-finals-2025' },
  { id: 'greece', date: '2026-05', newsKey: 'greece-2026' },
] as const;

export type TimelineId = (typeof timeline)[number]['id'];
