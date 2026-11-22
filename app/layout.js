import { Archivo } from 'next/font/google'
import '../styles/globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import site from '../content/site'

// One variable family: condensed + heavy for headlines, normal width for body.
const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo', display: 'swap' })

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.roles.join(' & ')}`, template: `%s — ${site.name}` },
  description: `${site.name}, ${site.roles.join(' and ').toLowerCase()}.`,
  openGraph: { siteName: site.name, type: 'website', images: [{ url: '/og/default.jpg', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
