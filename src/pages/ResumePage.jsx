import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { resume } from '../data/resume.js'

export default function ResumePage() {
  return (
    <>
      <Header />
      <main>
        <section className="resume-page">
          <div className="resume-page-head">
            <h1>Resume</h1>
            <a
              className="btn btn-secondary"
              href="/resume.pdf"
              download="Resume_Miller_Watson.pdf"
            >
              Download the PDF
            </a>
          </div>

          <p className="resume-overview">{resume.overview}</p>

          <h2>Education</h2>
          <ul className="resume-list">
            {resume.education.map((ed) => (
              <li key={ed.school} className="resume-entry">
                <div className="entry-heading">
                  <span className="entry-title">{ed.school}</span>
                  <span className="entry-meta">
                    {ed.location} — {ed.dates}
                  </span>
                </div>
                <p className="entry-detail">{ed.detail}</p>
                <ul className="entry-bullets">
                  {ed.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <h2>Work experience</h2>
          <ul className="resume-list">
            {resume.roles.map((r) => (
              <li key={r.org} className="resume-entry">
                <div className="entry-heading">
                  <span className="entry-title">
                    {r.title} · {r.org}
                  </span>
                  <span className="entry-meta">
                    {r.location} — {r.dates}
                  </span>
                </div>
                <ul className="entry-bullets">
                  {r.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <h2>Skills</h2>
          <ul className="experience-chips">
            {resume.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
