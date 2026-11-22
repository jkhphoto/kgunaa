import StillsGallery from '../../components/StillsGallery'
import Slide from '../../components/Slide'
import stills from '../../content/stills'
import { still } from '../../lib/media'

export const metadata = { title: 'Stills' }

export default function Stills() {
  const items = stills.map(s => ({ ...s, ...still(s.file) })).filter(s => s.src)
  return (
    <Slide n={3} title="Stills">
      <h1 className="h1">Stills.</h1>
      <StillsGallery items={items} />
    </Slide>
  )
}
