import site from '../../content/site'

export const metadata = { title: 'About' }

export default function About() {
  return (
    <div className="page about">
      <img className="about__portrait" src={site.aboutPortrait} alt={site.name} />
      <div className="about__body">
        <h1 className="page-title">About</h1>
        {site.bio.map((p, i) => <p key={i} className="about__bio">{p}</p>)}
        <h2 className="section-label">Selected clients</h2>
        <ul className="clients">{site.clients.map(c => <li key={c}>{c}</li>)}</ul>
        <h2 className="section-label">Contact</h2>
        <p className="about__contact">
          <a href={`mailto:${site.email}`}>{site.email}</a><br />
          <a href={site.instagram} target="_blank" rel="noreferrer">@{site.handle}</a><br />
          <span>{site.location}</span>
        </p>
        {site.representation && (
          <p className="about__contact">
            {site.representation.label}: {site.representation.name}<br />
            <a href={`mailto:${site.representation.email}`}>{site.representation.email}</a>
          </p>
        )}
      </div>
    </div>
  )
}
