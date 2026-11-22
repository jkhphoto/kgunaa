import site from '../content/site'
import projects from '../content/projects'
export const dynamic = 'force-static'
export default function sitemap() {
  return ['', '/motion', '/stills', '/cd', '/info', ...projects.filter(p => p.poster).map(p => `/work/${p.slug}`)].map(p => ({ url: site.url + p }))
}
