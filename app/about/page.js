import site from '../../content/site'
import Slide from '../../components/Slide'

export const metadata = { title: 'About' }

export default function About() {
  return (
    <>
      <Slide n={5} title="About">
        <div className="about">
          <h1 className="h1 about__title">About.</h1>
          <img className="about__portrait" src={site.aboutPortrait} alt={site.name} />
          <div className="about__body">
            {site.bio.map((p, i) => <p key={i} className="lede">{p}</p>)}
            <dl className="facts facts--stack">
              <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
              <div><dt>Instagram</dt><dd><a href={site.instagram} target="_blank" rel="noreferrer">@{site.handle}</a></dd></div>
              <div><dt>Based in</dt><dd>{site.location}</dd></div>
              {site.representation && (
                <div><dt>{site.representation.label}</dt><dd>{site.representation.name}, <a href={`mailto:${site.representation.email}`}>{site.representation.email}</a></dd></div>
              )}
            </dl>
            {site.press?.length > 0 && (
              <>
                <h2 className="label press__label">Press</h2>
                <ul className="press">
                  {site.press.map(p => (
                    <li key={p.url}>
                      <a href={p.url} target="_blank" rel="noreferrer">
                        <span>{p.outlet}</span>
                        <strong>{p.title}</strong>
                        <span>{p.date} ↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </Slide>
      <Slide n={6} title="Clients" dark>
        <ul className="clients">{site.clients.map(c => <li key={c}>{c}</li>)}</ul>
      </Slide>
    </>
  )
}
