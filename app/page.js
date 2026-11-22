import Link from 'next/link'
import ReelButton from '../components/ReelButton'
import projects from '../content/projects'
import site from '../content/site'
import { place } from '../lib/place'

export default function Home() {
  const shown = projects.filter(p => p.poster)
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

      <section className="drift" aria-label="Projects">
        {shown.map((p, i) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="drift__item" style={place(i, 16 / 9)}>
            <img src={p.poster} alt="" loading="lazy" className="frame169" />
            <span className="cap"><span>{p.name}</span><span>{projects.years(p)}</span></span>
          </Link>
        ))}
      </section>

      <section className="index" aria-label="Index">
        <ul>
          {projects.map(p => {
            const row = <><span>{p.name}</span><span>{projects.years(p)}</span></>
            return <li key={p.slug}>{p.poster ? <Link href={`/work/${p.slug}`}>{row}</Link> : <div>{row}</div>}</li>
          })}
        </ul>
      </section>
    </>
  )
}
