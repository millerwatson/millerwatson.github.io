import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <p className="section-lede">
        A running list — more will land here as they're finished.
      </p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
