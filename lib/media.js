import manifest from './image-manifest.json'

export function embedUrl(video, { autoplay = true } = {}) {
  if (!video) return null
  const ap = autoplay ? 1 : 0
  if (video.provider === 'youtube') {
    return `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=${ap}&rel=0&modestbranding=1&playsinline=1`
  }
  return `https://player.vimeo.com/video/${video.id}?autoplay=${ap}&title=0&byline=0&portrait=0&dnt=1`
}

// Responsive image data for a file in stills-src/.
export function still(file) {
  const m = manifest[file]
  if (!m) return null
  const srcSet = m.widths.map(w => `/images/stills/${m.base}-${w}.webp ${w}w`).join(', ')
  const mid = m.widths.find(w => w >= 1080) || m.widths.at(-1)
  return { src: `/images/stills/${m.base}-${mid}.webp`, srcSet, w: m.w, h: m.h, ratio: m.w / m.h, color: m.color }
}
