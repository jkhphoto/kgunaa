import manifest from './image-manifest.json'

export function embedUrl(video, { autoplay = true } = {}) {
  if (!video) return null
  const ap = autoplay ? 1 : 0
  if (video.provider === 'youtube') {
    return `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=${ap}&rel=0&modestbranding=1&playsinline=1`
  }
  return `https://player.vimeo.com/video/${video.id}?autoplay=${ap}&title=0&byline=0&portrait=0&dnt=1`
}

// Normalise a stills entry: a local original (file in stills-src/, built into
// responsive WebP) or a remote image with known width/height.
export function still(entry) {
  if (entry.src) return { ...entry, srcSet: undefined, ratio: entry.w / entry.h, key: entry.src }
  const m = manifest[entry.file]
  if (!m) return null
  const srcSet = m.widths.map(w => `/images/stills/${m.base}-${w}.webp ${w}w`).join(', ')
  const mid = m.widths.find(w => w >= 1080) || m.widths.at(-1)
  return { ...entry, src: `/images/stills/${m.base}-${mid}.webp`, srcSet, w: m.w, h: m.h, ratio: m.w / m.h, key: entry.file }
}
