import Link from 'next/link'

export default function FilmGrid({ films }) {
  return (
    <section className="films" aria-label="Motion work">
      {films.map((f, i) => (
        <Link key={f.slug} href={`/work/${f.slug}`} className="film">
          <img src={f.poster} alt="" loading={i < 2 ? 'eager' : 'lazy'} />
          <div className="film__meta">
            <span className="film__client">{f.client}</span>
            <span className="film__title">{f.title}</span>
            <span className="film__role">{f.role} · {f.year}</span>
          </div>
        </Link>
      ))}
    </section>
  )
}
