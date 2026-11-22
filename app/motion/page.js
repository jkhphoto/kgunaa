import ProjectList from '../../components/ProjectList'
import projects from '../../content/projects'

export const metadata = { title: 'Motion' }

export default function Motion() {
  return <div className="page section"><ProjectList items={projects.filter(p => p.cats.includes('motion'))} /></div>
}
