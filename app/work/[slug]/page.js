import Link from 'next/link'
import { notFound } from 'next/navigation'
import films from '../../../content/films'
import VideoEmbed from '../../../components/VideoEmbed'

export const dynamicParams = false
export function generateStaticParams() {
  return films.map(f => ({ slug: f.slug }))
}
export function generateMetadata({ params }) {
  const f = films.find(x => x.slug === params.slug)
  return f ? { title: `${f.client} — ${f.title}`, openGraph: { images: [f.poster] } } : {}
}

export default function Film({ params }) {
  const i = films.findIndex(x => x.slug === params.slug)
  if (i < 0) notFound()
  const f = films[i]
  const next = films[(i + 1) % films.length]
  return (
    <article className="work">
      <VideoEmbed video={f.video} poster={f.poster} title={f.title} aspect={f.aspect} />
      <header className="work__head">
        <p className="work__client">{f.client}</p>
        <h1 className="work__title">{f.title}</h1>
        <p className="work__role">{f.role} · {f.year}</p>
      </header>
      {f.credits?.length > 0 && (
        <dl className="credits">
          {f.credits.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      )}
      {f.frames?.length > 0 && (
        <div className="frames">
          {f.frames.map(src => <img key={src} src={src} alt="" loading="lazy" />)}
        </div>
      )}
      <Link href={`/work/${next.slug}`} className="next">
        <span>Next</span>
        <strong>{next.client}</strong>
      </Link>
    </article>
  )
}
