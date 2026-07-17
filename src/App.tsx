import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './routes/HomePage'
import ExperiencePage from './routes/ExperiencePage'
import QualificationsPage from './routes/QualificationsPage'
import SkillsPage from './routes/SkillsPage'
import ContactMePage from './routes/ContactMePage'
import ProjectsPage from './routes/ProjectsPage'
import ProjectDetailPage from './routes/ProjectDetailPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/qualifications" element={<QualificationsPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="/contact-me" element={<ContactMePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
