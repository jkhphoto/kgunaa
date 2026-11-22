import ProjectList from '../../components/ProjectList'
import StillsGallery from '../../components/StillsGallery'
import projects from '../../content/projects'
import stills from '../../content/stills'
import { still } from '../../lib/media'

export const metadata = { title: 'Stills' }

// Stills projects first, then loose photographs (content/stills.js).
export default function Stills() {
  return (
    <div className="page section">
      <ProjectList items={projects.filter(p => p.cats.includes('stills'))} />
      <StillsGallery items={stills.map(still).filter(Boolean)} />
    </div>
  )
}
