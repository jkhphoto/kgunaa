'use client'
import { useEffect, useState } from 'react'
import { embedUrl } from '../lib/media'

export default function ReelButton({ reel }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const onKey = e => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])
  return (
    <>
      <button className="reel-btn" onClick={() => setOpen(true)}>
        <span className="reel-btn__dot" />Watch reel
      </button>
      {open && (
        <div className="reel-modal" role="dialog" aria-label={reel.title} onClick={() => setOpen(false)}>
          <button className="reel-modal__close" aria-label="Close">Close</button>
          <div className="reel-modal__frame" onClick={e => e.stopPropagation()}>
            <iframe src={embedUrl(reel.video || reel)} title={reel.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          </div>
        </div>
      )}
    </>
  )
}
