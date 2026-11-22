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
  return f ? { title: f.client, openGraph: { images: [f.poster] } } : {}
}

export default function Film({ params }) {
  const i = films.findIndex(x => x.slug === params.slug)
  if (i < 0) notFound()
  const f = films[i]
  const next = films[(i + 1) % films.length]
  return (
    <article className="work">
      <VideoEmbed video={f.video} poster={f.poster} title={f.title} />
      <div className="cap work__cap">
        <span>{f.client}</span>
        <span>{f.title !== f.client ? f.title : ''}</span>
        <span>{f.year}</span>
      </div>
      {f.credits?.length > 0 && (
        <dl className="credits">
          {f.credits.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
      )}
      <Link href={`/work/${next.slug}`} className="work__next">Next — {next.client}</Link>
    </article>
  )
}
