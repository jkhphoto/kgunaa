import Link from 'next/link'
import ReelButton from '../components/ReelButton'
import films from '../content/films'
import stills from '../content/stills'
import site from '../content/site'
import { still } from '../lib/media'
import { place } from '../lib/place'

export default function Home() {
  const picks = stills.slice(0, 3).map(still).filter(Boolean)
  return (
    <>
      <section className="cover">
        {site.heroVideo ? (
          <video src={site.heroVideo} poster={site.hero.src} autoPlay muted loop playsInline preload="auto" />
        ) : (
          <img src={site.hero.src} alt="" fetchPriority="high" />
        )}
        <ReelButton reel={site.reel} className="cover__reel" />
      </section>

      <section className="drift" aria-label="Motion">
        {films.map((f, i) => (
          <Link key={f.slug} href={`/work/${f.slug}`} className="drift__item" style={place(i, 16 / 9)}>
            <img src={f.poster} alt="" loading="lazy" className="frame169" />
            <span className="cap"><span>{f.client}</span><span>{f.year}</span></span>
          </Link>
        ))}
      </section>

      <section className="drift" aria-label="Stills">
        {picks.map((s, i) => (
          <Link key={s.key} href="/stills" className="drift__item" style={place(i + films.length, s.ratio)}>
            <img src={s.src} srcSet={s.srcSet} sizes="(max-width: 700px) 100vw, 50vw" alt={s.alt} loading="lazy" style={{ aspectRatio: `${s.w} / ${s.h}` }} />
          </Link>
        ))}
        <Link href="/stills" className="drift__more">Stills</Link>
      </section>
    </>
  )
}
