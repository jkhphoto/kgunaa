'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import site from '../content/site'

const links = [
  ['/#motion', 'Motion', p => p === '/' || p.startsWith('/work')],
  ['/stills', 'Stills', p => p.startsWith('/stills')],
  ['/about', 'About', p => p.startsWith('/about')],
]

// Deck header: name left, role centre, index right. Same on every page.
export default function Nav() {
  const path = usePathname()
  return (
    <header className="nav">
      <Link href="/" className="nav__name">{site.name}</Link>
      <span className="nav__role">{site.roles.join(', ')}</span>
      <nav className="nav__links">
        {links.map(([href, label, on]) => (
          <Link key={href} href={href} className={on(path) ? 'is-on' : ''}>{label}</Link>
        ))}
        <a href={`mailto:${site.email}`}>Contact</a>
      </nav>
    </header>
  )
}
