import ReelButton from '../components/ReelButton'
import ProjectList from '../components/ProjectList'
import projects from '../content/projects'
import site from '../content/site'

export default function Home() {
  return (
    <>
      <section className="cover">
        {site.heroVideo ? (
          <video src={site.heroVideo} poster={site.hero.src} autoPlay muted loop playsInline preload="auto" />
        ) : (
          <img src={site.hero.src} alt="" fetchPriority="high" />
        )}
        <ReelButton reel={site.reel} className="cover__reel" />
      </section>
      <ProjectList items={projects} />
    </>
  )
}
