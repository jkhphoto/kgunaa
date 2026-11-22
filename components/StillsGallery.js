'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { place } from '../lib/place'

// Images drift across a 12-column grid with lots of air between them.
// Click opens a full-screen viewer (arrows, swipe, Esc).
export default function StillsGallery({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <>
      <div className="drift">
        {items.map((img, i) => (
          <button key={img.key} className="drift__item" style={place(i, img.ratio)} onClick={() => setOpen(i)} aria-label="Open image">
            <img
              src={img.src}
              srcSet={img.srcSet}
              sizes="(max-width: 700px) 100vw, 66vw"
              alt={img.alt}
              loading={i < 2 ? 'eager' : 'lazy'}
              decoding="async"
              width={img.w}
              height={img.h}
              style={{ aspectRatio: `${img.w} / ${img.h}` }}
            />
          </button>
        ))}
      </div>
      {open !== null && <Lightbox items={items} index={open} setIndex={setOpen} />}
    </>
  )
}

function Lightbox({ items, index, setIndex }) {
  const n = items.length
  const go = useCallback(d => setIndex(i => (i + d + n) % n), [n, setIndex])
  const close = useCallback(() => setIndex(null), [setIndex])
  const touch = useRef(null)
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [go, close])
  useEffect(() => {
    for (const d of [1, -1]) { const it = items[(index + d + n) % n]; const im = new Image(); if (it.srcSet) { im.srcset = it.srcSet; im.sizes = '100vw' } im.src = it.src }
  }, [index, items, n])
  const img = items[index]
  return (
    <div
      className="lightbox"
      role="dialog"
      aria-label="Image viewer"
      onClick={close}
      onTouchStart={e => { touch.current = e.touches[0].clientX }}
      onTouchEnd={e => {
        const dx = e.changedTouches[0].clientX - (touch.current ?? 0)
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
      }}
    >
      <img src={img.src} srcSet={img.srcSet} sizes="100vw" alt={img.alt} onClick={e => { e.stopPropagation(); go(1) }} />
      <div className="lightbox__bar" onClick={e => e.stopPropagation()}>
        <button onClick={() => go(-1)}>Prev</button>
        <button onClick={() => go(1)}>Next</button>
        <button onClick={close}>Close</button>
      </div>
    </div>
  )
}
