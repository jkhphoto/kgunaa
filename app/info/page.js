import site from '../../content/site'

export const metadata = { title: 'Info' }

export default function Info() {
  return (
    <div className="info">
      <p>{site.line}</p>
      <p>
        <a href={`mailto:${site.email}`}>{site.email}</a><br />
        <a href={site.instagram} target="_blank" rel="noreferrer">@{site.handle}</a>
      </p>
      {site.press?.length > 0 && (
        <p>
          {site.press.map(p => (
            <a key={p.url} href={p.url} target="_blank" rel="noreferrer">{p.outlet}, {p.title}</a>
          ))}
        </p>
      )}
    </div>
  )
}
