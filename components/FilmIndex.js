import Link from 'next/link'

// A deck index table: number, client, title, role, year. Poster shows on hover
// (desktop) or as a thumbnail (mobile).
export default function FilmIndex({ films }) {
  return (
    <ol className="index">
      {films.map((f, i) => (
        <li key={f.slug}>
          <Link href={`/work/${f.slug}`} className="index__row">
            <span className="index__n">{String(i + 1).padStart(2, '0')}</span>
            <span className="index__client">{f.client}</span>
            <span className="index__title">{f.title}</span>
            <span className="index__role">{f.role}</span>
            <span className="index__year">{f.year}</span>
            <img className="index__img" src={f.poster} alt="" loading="lazy" />
          </Link>
        </li>
      ))}
    </ol>
  )
}
