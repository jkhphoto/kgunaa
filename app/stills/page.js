import StillsGallery from '../../components/StillsGallery'
import stills from '../../content/stills'
import { still } from '../../lib/media'

export const metadata = { title: 'Stills' }

export default function Stills() {
  return <div className="page"><StillsGallery items={stills.map(still).filter(Boolean)} /></div>
}
