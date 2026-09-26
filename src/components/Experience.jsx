import { resume } from '../data/resume.js'

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Where I&rsquo;ve worked</h2>
      <ul className="role-list">
        {resume.roles.map((r) => (
          <li key={r.org} className="role">
            <div className="role-heading">
              <span className="role-title">
                {r.title} · {r.org}
              </span>
              <span className="role-meta">
                {r.location} — {r.dates}
              </span>
            </div>
            <p>{r.summary}</p>
          </li>
        ))}
      </ul>
      <ul className="experience-chips">
        {resume.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}
