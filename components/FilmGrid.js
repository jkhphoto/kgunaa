import Link from 'next/link'

export default function FilmGrid({ films }) {
  return (
    <div className="fgrid">
      {films.map((f, i) => (
        <Link key={f.slug} href={`/work/${f.slug}`} className="fgrid__item">
          <img src={f.poster} alt="" loading="lazy" />
          <div className="cap"><span>{String(i + 1).padStart(2, '0')}</span><span>{f.client}</span><span>{f.year}</span></div>
        </Link>
      ))}
    </div>
  )
}
