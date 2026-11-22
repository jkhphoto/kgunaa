import Link from 'next/link'
export default function NotFound() {
  return (
    <div className="page"><h1 className="page-title">Not found</h1><Link href="/" className="more">Back to work</Link></div>
  )
}
