import Link from 'next/link'
import { notFound } from 'next/navigation'
import projects from '../../../content/projects'
import VideoEmbed from '../../../components/VideoEmbed'

const withPage = projects.filter(p => p.poster)

export const dynamicParams = false
export function generateStaticParams() {
  return withPage.map(p => ({ slug: p.slug }))
}
export function generateMetadata({ params }) {
  const p = withPage.find(x => x.slug === params.slug)
  return p ? { title: p.name, openGraph: { images: [p.poster] } } : {}
}

export default function Project({ params }) {
  const i = withPage.findIndex(x => x.slug === params.slug)
  if (i < 0) notFound()
  const p = withPage[i]
  const next = withPage[(i + 1) % withPage.length]
  return (
    <article className="work">
      {p.video ? (
        <VideoEmbed video={p.video} poster={p.poster} title={p.name} />
      ) : (
        <img className="work__poster" src={p.poster} alt="" />
      )}
      <div className="cap work__cap"><span>{p.name}</span><span>{projects.years(p)}</span></div>
      {p.images.map(src => <img key={src} className="work__img" src={src} alt="" loading="lazy" />)}
      {p.credits.length > 0 && (
        <dl className="credits">
          {p.credits.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
      )}
      <Link href={`/work/${next.slug}`} className="work__next">Next — {next.name}</Link>
    </article>
  )
}
