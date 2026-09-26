import { Link, useLocation } from 'react-router-dom'
import JackalopeIcon from './JackalopeIcon.jsx'

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
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
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
