'use client'
import { useEffect, useState } from 'react'
import { embedUrl } from '../lib/media'

export default function ReelButton({ reel, label = 'Watch reel' }) {
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
      <button className="pill" onClick={() => setOpen(true)}>{label} <span aria-hidden>↗</span></button>
      {open && (
        <div className="modal" role="dialog" aria-label={reel.title} onClick={() => setOpen(false)}>
          <button className="modal__close">Close</button>
          <div className="modal__frame" onClick={e => e.stopPropagation()}>
            <iframe src={embedUrl(reel)} title={reel.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          </div>
        </div>
      )}
    </>
  )
}
