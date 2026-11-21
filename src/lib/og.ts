/**
 * Build-time Open Graph image renderer (1200×630 JPEG): satori → SVG → sharp → JPEG.
 * Fonts are static TTF instances in src/assets/fonts/og/.
 */
import satori from 'satori';
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const font = (file: string) => readFileSync(join(root, 'src/assets/fonts/og', file));
const fonts = [
  { name: 'Bricolage', data: font('og-brico-800.ttf'), weight: 800 as const, style: 'normal' as const },
  { name: 'Inter', data: font('og-inter-500.ttf'), weight: 500 as const, style: 'normal' as const },
  { name: 'Mono', data: font('og-jbm-500.ttf'), weight: 500 as const, style: 'normal' as const },
];

const logoSvg = readFileSync(join(root, 'src/assets/brand/logo-horizontal.svg'), 'utf8').replace(
  'fill="currentColor"',
  'fill="#f4f1e8"',
);
const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown, extra: Record<string, unknown> = {}): Node => ({
  type,
  props: { style, children, ...extra },
});

export interface OgOptions {
  eyebrow: string;
  title: string;
  footer: string;
  /** Absolute file path of a photo shown on the right (news posts). */
  photo?: string | undefined;
}

export async function renderOg({ eyebrow, title, footer, photo }: OgOptions): Promise<Buffer> {
  const photoUri = photo
    ? `data:image/jpeg;base64,${(await sharp(photo).rotate().resize(480, 630, { fit: 'cover' }).jpeg({ quality: 78 }).toBuffer()).toString('base64')}`
    : undefined;
  const textWidth = photoUri ? 640 : 1040;
  const size = title.length > 70 ? 50 : title.length > 45 ? 60 : 72;

  const tree = h(
    'div',
    {
      width: 1200,
      height: 630,
      display: 'flex',
      position: 'relative',
      backgroundColor: '#070a12',
      backgroundImage:
        'linear-gradient(rgba(155,175,220,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(155,175,220,0.08) 1px, transparent 1px)',
      backgroundSize: '40px 40px',
      color: '#f4f1e8',
      fontFamily: 'Inter',
    },
    [
      h('div', {
        position: 'absolute',
        top: -260,
        left: photoUri ? 260 : 600,
        width: 700,
        height: 700,
        borderRadius: 700,
        backgroundImage: 'radial-gradient(circle, rgba(255,179,0,0.28), rgba(255,179,0,0) 70%)',
      }),
      h(
        'div',
        {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 0 56px 72px',
          width: textWidth + 72,
        },
        [
          h(
            'div',
            {
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'Mono',
              fontSize: 24,
              letterSpacing: 3,
              color: '#ffc233',
              textTransform: 'uppercase',
            },
            [h('div', { width: 16, height: 16, backgroundColor: '#ffb300', marginRight: 16 }), eyebrow],
          ),
          h(
            'div',
            {
              display: 'flex',
              fontFamily: 'Bricolage',
              fontSize: size,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: textWidth,
            },
            title,
          ),
          h('div', { display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: textWidth }, [
            h('img', { width: 300, height: 43 }, undefined, { src: logoDataUri, width: 300, height: 43 }),
            h('div', { display: 'flex', fontFamily: 'Mono', fontSize: 22, color: '#b9c2d8' }, footer),
          ]),
        ],
      ),
      ...(photoUri
        ? [
            h('img', { position: 'absolute', right: 0, top: 0, width: 480, height: 630, objectFit: 'cover' }, undefined, {
              src: photoUri,
              width: 480,
              height: 630,
            }),
            h('div', { position: 'absolute', right: 474, top: 0, width: 6, height: 630, backgroundColor: '#ffb300' }),
          ]
        : []),
    ],
  );

  const svg = await satori(tree as unknown as Parameters<typeof satori>[0], { width: 1200, height: 630, fonts });
  return sharp(Buffer.from(svg)).jpeg({ quality: 84, mozjpeg: true, chromaSubsampling: '4:4:4' }).toBuffer();
}
