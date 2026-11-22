'use client'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

// Justified rows in reading order: each tile's flex-grow is its aspect ratio,
// so rows fill edge to edge with no cropping and no layout JS.
export default function StillsGallery({ items }) {
  const series = useMemo(() => ['All', ...new Set(items.map(i => i.series).filter(Boolean))], [items])
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(null)
  const shown = filter === 'All' ? items : items.filter(i => i.series === filter)

  return (
    <>
      {series.length > 2 && (
        <div className="filters" role="tablist">
          {series.map(s => (
            <button key={s} role="tab" aria-selected={filter === s} className={filter === s ? 'is-active' : ''} onClick={() => setFilter(s)}>{s}</button>
          ))}
        </div>
      )}
      <div className="justified">
        {shown.map((img, i) => (
          <button
            key={img.file}
            className="tile"
            style={{ '--r': img.ratio, aspectRatio: `${img.w} / ${img.h}`, background: img.color }}
            onClick={() => setOpen(i)}
            aria-label={`Open ${img.alt}`}
          >
            <img
              src={img.src}
              srcSet={img.srcSet}
              sizes="(max-width: 700px) 100vw, 50vw"
              alt={img.alt}
              loading={i < 6 ? 'eager' : 'lazy'}
              decoding="async"
              width={img.w}
              height={img.h}
            />
          </button>
        ))}
      </div>
      {open !== null && <Lightbox items={shown} index={open} setIndex={setOpen} />}
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
  // Warm the cache for neighbours so arrowing feels instant.
  useEffect(() => {
    for (const d of [1, -1]) { const im = new Image(); const it = items[(index + d + n) % n]; im.srcset = it.srcSet; im.sizes = '100vw' }
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
        <span>{String(index + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
        <button onClick={() => go(1)}>Next</button>
        <button onClick={close}>Close</button>
      </div>
    </div>
  )
}
