/**
 * Regenerates the favicon set in public/ from src/assets/brand/mark.svg.
 * Run manually after changing the mark: `node scripts/generate-icons.ts`.
 */
import sharp from 'sharp';
import { mkdirSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');
const mark = readFileSync(join(root, 'src/assets/brand/mark.svg'));
const out = join(root, 'public');
mkdirSync(join(out, 'icons'), { recursive: true });

// Rasterise at 2× the target size, whatever units the mark's viewBox uses.
const viewBoxWidth = Number(/viewBox="[\d.-]+\s+[\d.-]+\s+([\d.]+)/.exec(mark.toString())?.[1] ?? 64);
const density = (size: number) => 72 * (size / viewBoxWidth) * 2;

const png = (size: number) =>
  sharp(mark, { density: density(size) })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toBuffer();

// Maskable icon: full-bleed background with the mark inside the 80 % safe zone.
const maskable = async (size: number) => {
  const inner = await sharp(mark, { density: density(size) })
    .resize(Math.round(size * 0.72))
    .png()
    .toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: '#070a12' } })
    .composite([{ input: inner, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toBuffer();
};

// Minimal ICO container holding PNG payloads (supported by all current browsers).
function ico(images: { size: number; data: Buffer }[]): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = 6 + 16 * images.length;
  const entries = images.map(({ size, data }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

copyFileSync(join(root, 'src/assets/brand/mark.svg'), join(out, 'favicon.svg'));
writeFileSync(
  join(out, 'favicon.ico'),
  ico([
    { size: 32, data: await png(32) },
    { size: 48, data: await png(48) },
  ]),
);
writeFileSync(join(out, 'apple-touch-icon.png'), await maskable(180));
writeFileSync(join(out, 'icons/icon-192.png'), await png(192));
writeFileSync(join(out, 'icons/icon-512.png'), await png(512));
writeFileSync(join(out, 'icons/maskable-512.png'), await maskable(512));
console.log('✔ icons written to public/');
