import { useNavigate } from 'react-router-dom'

// A generated placeholder thumbnail — concentric contour lines, tinted with
// the site's palette. Once a project has a real screenshot, drop it in
// /public and render <img src="/thumbnails/x.png" className="thumb" />
// in place of <Thumbnail /> below.
function Thumbnail({ index }) {
  const palettes = [
    ['#7a9471', '#c28b5c'],
    ['#5c7455', '#8a5f3a'],
    ['#8aa77f', '#b0794e'],
  ]
  const [colorA, colorB] = palettes[index % palettes.length]
  const cx = 50 + ((index * 37) % 100)
  const rings = 5

  return (
    <svg
      className="thumb"
      viewBox="0 0 200 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <rect width="200" height="120" fill="var(--surface-raised)" />
      {Array.from({ length: rings }).map((_, i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={60}
          rx={18 + i * 17}
          ry={10 + i * 10}
          fill="none"
          stroke={i % 2 === 0 ? colorA : colorB}
          strokeWidth="1.4"
          opacity={0.6 - i * 0.09}
        />
      ))}
    </svg>
  )
}

export default function ProjectCard({ project, index }) {
  const navigate = useNavigate()
  const goToStory = () => navigate(`/projects/${project.id}`)

  return (
    <div
      className="project-card"
      role="link"
      tabIndex={0}
      onClick={goToStory}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          goToStory()
        }
      }}
    >
      <Thumbnail index={index} />
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.tags?.length > 0 && (
          <ul className="tag-list">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        <div className="project-card-actions">
          <a
            className="btn btn-primary"
            href={project.demoLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Try it out
          </a>
        </div>
      </div>
    </div>
  )
}
