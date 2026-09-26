import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import ResumePage from './pages/ResumePage.jsx'
import './App.css'

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
  )
}

export default App
