import type { ImageMetadata } from 'astro';
import trimo from '../assets/images/trimo.png';
import eti from '../assets/images/eti.png';
import dewesoft from '../assets/images/dewesoft.png';
import sensum from '../assets/images/sensum.png';

export interface Supporter {
  name: string;
  /** Short name used in logo alt text. */
  shortName?: string;
  logo?: ImageMetadata;
  url?: string;
}

export interface SupporterSeason {
  season: string;
  supporters: Supporter[];
}

/**
 * Donors and partners per season, newest first.
 * Add a logo by placing the file in src/assets/images/ and importing it above.
 */
export const seasons: SupporterSeason[] = [
  {
    season: '2025/26',
    supporters: [
      { name: 'Sensum, sistemi z računalniškim vidom d. o. o.', shortName: 'Sensum', logo: sensum },
      { name: 'Dewesoft d. o. o.', shortName: 'Dewesoft', logo: dewesoft },
      { name: 'ETI Elektroelement d. o. o.', shortName: 'ETI', logo: eti },
    ],
  },
  {
    season: '2024/25',
    supporters: [
      { name: 'Žan Močivnik' },
      { name: 'Urška Farčnik' },
      { name: 'Trimo d. o. o.', shortName: 'Trimo', logo: trimo },
    ],
  },
];

export const supporterCount = seasons.reduce((n, s) => n + s.supporters.length, 0);
export const logoSupporters = seasons.flatMap((s) => s.supporters).filter((s) => s.logo);
