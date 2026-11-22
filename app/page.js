import Link from 'next/link'
import Hero from '../components/Hero'
import FilmGrid from '../components/FilmGrid'
import films from '../content/films'
import stills from '../content/stills'
import { still } from '../lib/media'

export default function Home() {
  const strip = stills.slice(0, 6).map(s => ({ ...s, ...still(s.file) })).filter(s => s.src)
  return (
    <>
      <Hero />
      <h2 className="section-label">Motion</h2>
      <FilmGrid films={films} />
      <div className="section-head">
        <h2 className="section-label">Stills</h2>
        <Link href="/stills" className="more">All stills</Link>
      </div>
      <Link href="/stills" className="strip" aria-label="View all stills">
        {strip.map(s => (
          <img key={s.file} src={s.src} srcSet={s.srcSet} sizes="(max-width: 700px) 50vw, 17vw" alt={s.alt} loading="lazy" style={{ background: s.color }} />
        ))}
      </Link>
    </>
  )
}
