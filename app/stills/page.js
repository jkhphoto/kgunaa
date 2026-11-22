import StillsGallery from '../../components/StillsGallery'
import stills from '../../content/stills'
import { still } from '../../lib/media'

export const metadata = { title: 'Stills' }

export default function Stills() {
  const items = stills.map(s => ({ ...s, ...still(s.file) })).filter(s => s.src)
  return (
    <div className="page">
      <h1 className="page-title">Stills</h1>
      <StillsGallery items={items} />
    </div>
  )
}
