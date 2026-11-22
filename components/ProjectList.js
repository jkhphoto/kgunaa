import Link from 'next/link'
import projects from '../content/projects'
import { place } from '../lib/place'

// Large drifting frames for projects that have a poster, then a plain index.
export default function ProjectList({ items }) {
  const shown = items.filter(p => p.poster)
  return (
    <>
      {shown.length > 0 && (
        <section className="drift" aria-label="Projects">
          {shown.map((p, i) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="drift__item" style={place(i, 16 / 9)}>
              <img src={p.poster} alt="" loading="lazy" className="frame169" />
              <span className="cap"><span>{p.name}</span><span>{projects.years(p)}</span></span>
            </Link>
          ))}
        </section>
      )}
      <section className="index" aria-label="Index">
        <ul>
          {items.map(p => {
            const row = <><span>{p.name}</span><span className="index__tags">{projects.tags(p)}</span><span>{projects.years(p)}</span></>
            return <li key={p.slug}>{p.poster ? <Link href={`/work/${p.slug}`}>{row}</Link> : <div>{row}</div>}</li>
          })}
        </ul>
      </section>
    </>
  )
}
