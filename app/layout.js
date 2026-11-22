import '../styles/globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import site from '../content/site'

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.line,
  openGraph: { siteName: site.name, type: 'website', images: [{ url: '/og/default.jpg', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
