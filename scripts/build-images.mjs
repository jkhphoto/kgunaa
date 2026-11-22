// Turns originals in stills-src/ into responsive WebP sizes in
// public/images/stills/ and writes lib/image-manifest.json with each image's
// true width/height (so the grid reserves exact space, no layout jump) and an
// average colour (painted behind the image while it loads).
// Skips work already done, so rebuilds are fast.
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const root = process.cwd()
const SRC = path.join(root, 'stills-src')
const OUT = path.join(root, 'public/images/stills')
const MANIFEST = path.join(root, 'lib/image-manifest.json')
export const WIDTHS = [640, 1080, 1600, 2400]

fs.mkdirSync(OUT, { recursive: true })
const files = fs.existsSync(SRC) ? fs.readdirSync(SRC).filter(f => /\.(jpe?g|png|webp|tiff?)$/i.test(f)) : []
const manifest = {}

for (const file of files) {
  const base = file.replace(/\.[^.]+$/, '')
  const input = path.join(SRC, file)
  const img = sharp(input).rotate() // honour EXIF orientation
  const meta = await img.metadata()
  const swap = (meta.orientation || 1) >= 5
  const w = swap ? meta.height : meta.width
  const h = swap ? meta.width : meta.height
  const { dominant } = await sharp(input).stats()
  const widths = WIDTHS.filter(x => x < w).concat(w <= WIDTHS.at(-1) ? [w] : [])
  const mtime = fs.statSync(input).mtimeMs
  for (const width of widths) {
    const out = path.join(OUT, `${base}-${width}.webp`)
    if (fs.existsSync(out) && fs.statSync(out).mtimeMs > mtime) continue
    await sharp(input).rotate().resize({ width }).webp({ quality: 80 }).toFile(out)
  }
  manifest[file] = {
    base, w, h, widths,
    color: `rgb(${dominant.r},${dominant.g},${dominant.b})`,
  }
}
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2))
console.log(`images: ${files.length} originals → ${OUT}`)
