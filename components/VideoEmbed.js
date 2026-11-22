'use client'
import { useState } from 'react'
import { embedUrl } from '../lib/media'

// Shows a poster and only loads the Vimeo/YouTube player on click. Player
// iframes cost ~1 MB of JS each, so pages stay fast until someone hits play.
export default function VideoEmbed({ video, poster, title, aspect = '16 / 9' }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="embed" style={{ aspectRatio: aspect }}>
      {playing ? (
        <iframe
          src={embedUrl(video)}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button className="embed__poster" onClick={() => setPlaying(true)} aria-label={`Play ${title}`}>
          {poster && <img src={poster} alt="" />}
          <span className="embed__play">Play</span>
        </button>
      )}
    </div>
  )
}
