import site from '../content/site'
import ReelButton from './ReelButton'

export default function Hero() {
  return (
    <section className="hero">
      {site.heroVideo ? (
        <video className="hero__media" src={site.heroVideo} poster={site.heroPoster} autoPlay muted loop playsInline preload="auto" />
      ) : (
        <img className="hero__media" src={site.heroPoster} alt="" fetchPriority="high" />
      )}
      <div className="hero__shade" />
      <div className="hero__text">
        <p className="hero__roles">{site.roles.join(' / ')}</p>
        <h1 className="hero__name">{site.name}</h1>
        <ReelButton reel={site.reel} />
      </div>
    </section>
  )
}
