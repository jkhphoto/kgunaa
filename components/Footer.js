import site from '../content/site'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot__label">Contact</div>
      <a className="foot__email" href={`mailto:${site.email}`}>{site.email}</a>
      <div className="foot__row">
        <span>{site.name}</span>
        <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
        <span>{site.location}</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
