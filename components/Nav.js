'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import site from '../content/site'
import projects from '../content/projects'

const links = [...projects.sections.map(s => [s.path, s.label]), ['/info', 'Info']]

export default function Nav() {
  const path = usePathname()
  return (
    <header className="nav">
      <Link href="/">{site.name}</Link>
      <nav>
        {links.map(([href, label]) => (
          <Link key={href} href={href} className={path.startsWith(href) ? 'on' : ''}>{label}</Link>
        ))}
      </nav>
    </header>
  )
}
