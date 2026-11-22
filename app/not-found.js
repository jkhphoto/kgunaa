import Link from 'next/link'
import Slide from '../components/Slide'
export default function NotFound() {
  return (
    <Slide n={404} title="Not found">
      <h1 className="h1">Not here.</h1>
      <Link href="/" className="pill pill--ink">Back to work ↗</Link>
    </Slide>
  )
}
