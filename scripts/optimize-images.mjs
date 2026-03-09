import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, parse, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = join(__dirname, '..', 'public', 'images');

const HERO_IMAGE = 'kids-kurai-wall.jpg';
const HERO_MAX_WIDTH = 1920;
const HERO_QUALITY = 75;
const DEFAULT_QUALITY = 80;

async function getFileSize(filePath) {
  const s = await stat(filePath);
  return s.size;
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function optimizeImage(filePath, filename) {
  const { name, ext } = parse(filename);
  const outputPath = join(IMAGES_DIR, `${name}.webp`);
  const isHero = filename === HERO_IMAGE;
  const isJpg = ext.toLowerCase() === '.jpg' || ext.toLowerCase() === '.jpeg';
  const isPng = ext.toLowerCase() === '.png';

  if (!isJpg && !isPng) {
    return null;
  }

  const originalSize = await getFileSize(filePath);

  let pipeline = sharp(filePath);

  if (isHero) {
    // Resize hero image to max 1920px wide, maintaining aspect ratio
    const metadata = await sharp(filePath).metadata();
    if (metadata.width > HERO_MAX_WIDTH) {
      pipeline = pipeline.resize({ width: HERO_MAX_WIDTH, withoutEnlargement: true });
    }
    pipeline = pipeline.webp({ quality: HERO_QUALITY });
  } else {
    pipeline = pipeline.webp({ quality: DEFAULT_QUALITY });
  }

  await pipeline.toFile(outputPath);
  const newSize = await getFileSize(outputPath);
  const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

  return {
    filename,
    outputFilename: `${name}.webp`,
    originalSize,
    newSize,
    savings,
  };
}

async function main() {
  console.log(`\nImage Optimization Script`);
  console.log(`========================`);
  console.log(`Source directory: ${IMAGES_DIR}\n`);

  const files = await readdir(IMAGES_DIR);
  const imageFiles = files.filter((f) => {
    const ext = parse(f).ext.toLowerCase();
    return ['.jpg', '.jpeg', '.png'].includes(ext);
  });

  console.log(`Found ${imageFiles.length} images to optimize.\n`);

  let totalOriginal = 0;
  let totalNew = 0;
  const results = [];

  for (const filename of imageFiles) {
    const filePath = join(IMAGES_DIR, filename);
    const result = await optimizeImage(filePath, filename);
    if (result) {
      results.push(result);
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
      console.log(
        `  ${result.filename.padEnd(40)} ${formatSize(result.originalSize).padStart(10)} -> ${formatSize(result.newSize).padStart(10)}  (${result.savings}% smaller)`
      );
    }
  }

  console.log(`\n--- Summary ---`);
  console.log(`Total original: ${formatSize(totalOriginal)}`);
  console.log(`Total WebP:     ${formatSize(totalNew)}`);
  console.log(`Total savings:  ${formatSize(totalOriginal - totalNew)} (${((1 - totalNew / totalOriginal) * 100).toFixed(1)}%)`);
  console.log(`\nAll .webp files saved alongside originals in ${IMAGES_DIR}`);
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
