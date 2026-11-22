import Link from 'next/link'
import Hero from '../components/Hero'
import Slide from '../components/Slide'
import FilmIndex from '../components/FilmIndex'
import FilmGrid from '../components/FilmGrid'
import VideoEmbed from '../components/VideoEmbed'
import films from '../content/films'
import stills from '../content/stills'
import site from '../content/site'
import { still } from '../lib/media'

export default function Home() {
  const picks = stills.slice(0, 6).map(s => ({ ...s, ...still(s.file) })).filter(s => s.src)
  return (
    <>
      <Hero />

      <Slide n={1} title="Reel" dark>
        <div className="reel">
          <h2 className="h2">Reel<br />{new Date().getFullYear()}.</h2>
          <VideoEmbed video={site.reel} poster={site.heroPoster} title={site.reel.title} />
        </div>
      </Slide>

      <Slide n={2} title="Motion" id="motion">
        <h2 className="h1">Selected<br />motion work.</h2>
        <FilmIndex films={films} />
        <FilmGrid films={films} />
      </Slide>

      <Slide n={3} title="Stills">
        <div className="split">
          <h2 className="h1">Stills.</h2>
          <Link href="/stills" className="pill pill--ink">View all {stills.length} <span aria-hidden>↗</span></Link>
        </div>
        <div className="sgrid sgrid--home">
          {picks.map((s, i) => (
            <Link key={s.file} href="/stills" className="sgrid__item">
              <div className="sgrid__frame" style={{ aspectRatio: '4 / 5', background: s.color }}>
                <img src={s.src} srcSet={s.srcSet} sizes="(max-width: 700px) 50vw, 33vw" alt={s.alt} loading="lazy" />
              </div>
              <div className="cap"><span>{String(i + 1).padStart(3, '0')}</span><span>{s.series}</span></div>
            </Link>
          ))}
        </div>
      </Slide>

      <Slide n={4} title="Clients" dark>
        <ul className="clients">{site.clients.map(c => <li key={c}>{c}</li>)}</ul>
      </Slide>
    </>
  )
}
