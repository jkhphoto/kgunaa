import site from '../content/site'
import films from '../content/films'
export const dynamic = 'force-static'
export default function sitemap() {
  return ['', '/stills', '/info', ...films.map(f => `/work/${f.slug}`)].map(p => ({ url: site.url + p }))
}
