import site from '../content/site'

export default function Footer() {
  return (
    <footer className="foot">
      <a href={`mailto:${site.email}`}>{site.email}</a>
      <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
    </footer>
  )
}
