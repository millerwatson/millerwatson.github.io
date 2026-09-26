import { Link, useLocation } from 'react-router-dom'

function scrollToSection(event, id) {
  event.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="identity">
          <div className="identity-row">
            <h1>
              <Link to="/" className="identity-link">
                Miller Watson
              </Link>
            </h1>
          </div>
          <p className="tagline">
            CS grad (Northwestern, AI concentration) working across product,
            technical consulting, and hands-on engineering.
          </p>
        </div>
        <nav className="header-nav">
          {isHome ? (
            <>
              {/* Same-page scroll — plain #hash links would be read as
                  HashRouter routes, so these scroll via JS instead. */}
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
                Projects
              </a>
              <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>
                Experience
              </a>
            </>
          ) : (
            <Link to="/">All projects</Link>
          )}
          <Link to="/resume" className="resume-link">
            Resume
          </Link>
        </nav>
      </div>
    </header>
  )
}
