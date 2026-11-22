'use client'
import { useState } from 'react'
import { embedUrl } from '../lib/media'

// Poster until clicked; the player (about 1 MB of JS) loads only on play.
export default function VideoEmbed({ video, poster, title }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="embed">
      {playing ? (
        <iframe src={embedUrl(video)} title={title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
      ) : (
        <button className="embed__poster" onClick={() => setPlaying(true)} aria-label={`Play ${title}`}>
          {poster && <img src={poster} alt="" />}
          <span className="embed__play">Play</span>
        </button>
      )}
    </div>
  )
}
