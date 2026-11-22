// Generates obviously-fake placeholder images so the layout can be judged
// before Kevin's real work arrives. Safe to delete once real assets exist.
//   node scripts/make-placeholders.mjs
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const root = process.cwd()
const ph = path.join(root, 'public/images/placeholders')
const src = path.join(root, 'stills-src')
fs.mkdirSync(ph, { recursive: true })
fs.mkdirSync(src, { recursive: true })

// Neutral greys so placeholders don't fight the black-and-white system.
const palettes = [
  ['#111', '#bdbdbd'], ['#1c1c1c', '#e6e6e6'], ['#0b0b0b', '#8a8a8a'], ['#222', '#cfcfcf'],
  ['#060606', '#d0d0d0'], ['#181818', '#9c9c9c'], ['#0d0d0d', '#f0f0f0'], ['#121212', '#6f6f6f'],
]

function svg(w, h, [a, b], label) {
  const fs1 = Math.round(Math.min(w, h) * 0.035)
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <radialGradient id="g" cx="40%" cy="35%" r="80%"><stop offset="0" stop-color="${b}"/><stop offset="1" stop-color="${a}"/></radialGradient>
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="table" tableValues="0 0.18"/></feComponentTransfer></filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect width="100%" height="100%" filter="url(#n)"/>
  <text x="${Math.round(w * 0.05)}" y="${Math.round(h * 0.05 + fs1)}" font-family="Arial Narrow, Arial, sans-serif" font-weight="700" font-size="${fs1}" fill="rgba(255,255,255,0.85)" letter-spacing="1">${label}</text>
</svg>`)
}

async function make(file, w, h, pal, label) {
  await sharp(svg(w, h, pal, label)).jpeg({ quality: 82 }).toFile(file)
}

const stillsShapes = [[1600, 2000], [2000, 1333], [1600, 2000], [1333, 2000], [2000, 1333], [1600, 2000],
  [1600, 2000], [2000, 1125], [1600, 2000], [1333, 2000], [2000, 1333], [1600, 2000]]
for (let i = 0; i < stillsShapes.length; i++) {
  const n = String(i + 1).padStart(2, '0')
  await make(path.join(src, `ph-${n}.jpg`), ...stillsShapes[i], palettes[i % palettes.length], `PLACEHOLDER STILL ${n}`)
}
await make(path.join(ph, 'hero.jpg'), 2400, 1350, ['#050505', '#5a5a5a'], 'PLACEHOLDER: REEL FRAME')
await make(path.join(ph, 'portrait.jpg'), 1600, 2000, ['#0a0a0a', '#a8a8a8'], 'PLACEHOLDER: PORTRAIT')
for (let i = 1; i <= 4; i++) await make(path.join(ph, `film-${i}.jpg`), 1920, 1080, palettes[(i * 3) % 8], `PLACEHOLDER: FILM ${i}`)
for (let i = 1; i <= 3; i++) await make(path.join(ph, `frame-${i}.jpg`), 1920, 804, palettes[(i * 5) % 8], `FRAME GRAB ${i}`)
await make(path.join(root, 'public/og/default.jpg'), 1200, 630, ['#050505', '#5a5a5a'], 'KEVIN GUNAWAN')
console.log('placeholders written')
