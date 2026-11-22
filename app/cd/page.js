import ProjectList from '../../components/ProjectList'
import projects from '../../content/projects'

export const metadata = { title: 'Creative Direction' }

export default function CD() {
  return <div className="page section"><ProjectList items={projects.filter(p => p.cats.includes('cd'))} /></div>
}
