'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import site from '../content/site'

const links = [['/', 'Work'], ['/stills', 'Stills'], ['/info', 'Info']]

export default function Nav() {
  const path = usePathname()
  const on = href => (href === '/' ? path === '/' || path.startsWith('/work') : path.startsWith(href))
  return (
    <header className="nav">
      <Link href="/">{site.name}</Link>
      <nav>
        {links.map(([href, label]) => (
          <Link key={href} href={href} className={on(href) ? 'on' : ''}>{label}</Link>
        ))}
      </nav>
    </header>
  )
}
