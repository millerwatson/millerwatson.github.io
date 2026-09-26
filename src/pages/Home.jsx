import Header from '../components/Header.jsx'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  )
}
