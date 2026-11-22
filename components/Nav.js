'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import site from '../content/site'

const links = [
  ['/', 'Work'],
  ['/stills', 'Stills'],
  ['/about', 'About'],
]

export default function Nav() {
  const path = usePathname()
  const onHome = path === '/'
  return (
    <header className={`nav${onHome ? ' nav--overlay' : ''}`}>
      <Link href="/" className="nav__name">{site.name}</Link>
      <nav className="nav__links">
        {links.map(([href, label]) => {
          const active = href === '/' ? path === '/' || path.startsWith('/work') : path.startsWith(href)
          return <Link key={href} href={href} className={active ? 'is-active' : ''}>{label}</Link>
        })}
        <a href={`mailto:${site.email}`}>Contact</a>
      </nav>
    </header>
  )
}
