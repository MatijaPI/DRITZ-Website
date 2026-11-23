import type { IconName } from '../components/ui/Icon.astro';

/** Activity ids — their copy lives under `activities` / `activitiesPage.detail` in the i18n files. */
export const activityIds = ['fll', 'workshops', 'mentoring', 'research'] as const;
export type ActivityId = (typeof activityIds)[number];

export const activityIcons: Record<ActivityId, IconName> = {
  fll: 'trophy',
  workshops: 'robot',
  mentoring: 'compass',
  research: 'flask',
};
