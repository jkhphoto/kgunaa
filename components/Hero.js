import site from '../content/site'
import ReelButton from './ReelButton'

export default function Hero() {
  return (
    <section className="cover">
      {site.heroVideo ? (
        <video className="cover__media" src={site.heroVideo} poster={site.heroPoster} autoPlay muted loop playsInline preload="auto" />
      ) : (
        <img className="cover__media" src={site.heroPoster} alt="" fetchPriority="high" />
      )}
      <div className="cover__grid">
        <h1 className="cover__name">Kevin<br />Gunawan.</h1>
        <div className="cover__meta">
          <p>{site.roles.join('\n')}</p>
          <p>{site.location}</p>
          <ReelButton reel={site.reel} />
        </div>
      </div>
    </section>
  )
}
