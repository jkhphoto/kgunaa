import site from '../content/site'

export default function Footer() {
  return (
    <footer className="footer">
      <a className="footer__email" href={`mailto:${site.email}`}>{site.email}</a>
      <div className="footer__row">
        <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
        <span>© {new Date().getFullYear()} {site.name}</span>
      </div>
    </footer>
  )
}
