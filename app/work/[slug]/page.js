import Link from 'next/link'
import { notFound } from 'next/navigation'
import films from '../../../content/films'
import VideoEmbed from '../../../components/VideoEmbed'
import Slide from '../../../components/Slide'

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
  const n = String(i + 1).padStart(2, '0')
  return (
    <>
      <Slide n={n} title={`Motion / ${f.client}`}>
        <div className="work-head">
          <h1 className="h1">{f.client}.</h1>
          <dl className="facts">
            <div><dt>Title</dt><dd>{f.title}</dd></div>
            <div><dt>Role</dt><dd>{f.role}</dd></div>
            <div><dt>Year</dt><dd>{f.year}</dd></div>
          </dl>
        </div>
      </Slide>
      <div className="work-player">
        <VideoEmbed video={f.video} poster={f.poster} title={f.title} aspect={f.aspect} />
      </div>
      {(f.credits?.length > 0 || f.frames?.length > 0) && (
        <Slide n={n} title="Credits and frames">
          {f.credits?.length > 0 && (
            <dl className="credits">
              {f.credits.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
          )}
          {f.frames?.length > 0 && (
            <div className="frames">
              {f.frames.map((src, j) => (
                <figure key={src}>
                  <img src={src} alt="" loading="lazy" />
                  <figcaption className="cap"><span>{n}.{j + 1}</span><span>Frame</span></figcaption>
                </figure>
              ))}
            </div>
          )}
        </Slide>
      )}
      <Link href={`/work/${next.slug}`} className="next">
        <span className="label">Next</span>
        <span className="h1">{next.client} →</span>
      </Link>
    </>
  )
}
