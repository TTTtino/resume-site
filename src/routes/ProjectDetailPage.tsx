import { Navigate, useParams } from 'react-router-dom'
import Page from '@components/page'
import { getProjectModule } from '@data/projectPage'
import { ProjectLayout } from '@components/projectLayout'

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectModule(slug) : undefined

  if (!project || !slug) {
    return <Navigate to="/projects" replace />
  }

  return (
    <Page title={project.frontmatter.title}>
      <ProjectLayout
        Content={project.default}
        meta={{ ...project.frontmatter, slug }}
      />
    </Page>
  )
}

export default ProjectDetailPage
