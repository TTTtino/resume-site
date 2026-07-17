import Page from '@components/page'
import { ProjectData, getAllProjects } from '@data/projectPage'
import { Link } from 'react-router-dom'
import { Pill } from '@components/pill'
import { technologies } from '@data/skills'

const ProjectCard = (props: { info: ProjectData }) => {
  const thumbnail =
    props.info.screenshots.length > 0
      ? props.info.screenshots[0]
      : '/projects/wip-project.png'

  return (
    <div className="transition-all rounded-md shadow-md w-96 bg-dark-slate-50 hover:scale-105 hover:shadow-xl ">
      <Link to={`/projects/${props.info.slug}`}>
        <div className="relative h-64 rounded-t-md">
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-t-md"
            src={thumbnail}
            alt={props.info.title}
          />
        </div>
        <div className="p-3">
          <h2 className="text-xl font-bold">{props.info.title}</h2>
          <div className="font-bold">
            {props.info.inProgress ? 'In Development' : props.info.year}
          </div>
          {props.info.technologies && (
            <div className="flex flex-wrap gap-2 my-1">
              {props.info.technologies?.map((value, index) => {
                const tech = technologies[value]
                return (
                  <Pill
                    key={index}
                    text={tech.name}
                    icon={tech.icon}
                    alwaysExpanded={true}
                    className="text-white bg-secondary-500"
                  />
                )
              })}
            </div>
          )}
          <div className="font-light">{props.info.shortDescription}</div>
        </div>
      </Link>
    </div>
  )
}

const ProjectsPage = () => {
  const projects = getAllProjects()

  return (
    <Page title="Projects">
      <div className="p-5">
        <h1 className="mb-5 text-5xl font-bold ">Projects</h1>
        <div className="flex flex-wrap justify-center gap-5 px-2 lg:justify-start">
          {projects.map((val, i) => {
            return <ProjectCard key={i} info={val} />
          })}
        </div>
      </div>
    </Page>
  )
}

export default ProjectsPage
