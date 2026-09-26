import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find((p) => String(p.id) === id)

  return (
    <>
      <Header />
      <main>
        <section className="project-page">
          <Link to="/" className="back-link">
            ← Back to projects
          </Link>

          {project ? (
            <>
              <h1>{project.title}</h1>
              {project.tags?.length > 0 && (
                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
              <div className="project-page-actions">
                <a
                  className="btn btn-primary"
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Try it out
                </a>
              </div>
              <p className="project-story">{project.story}</p>
            </>
          ) : (
            <h1>Project not found</h1>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
