import { ComponentType } from 'react'
import { ProjectData } from '@data/projectPage'
import { Pill } from '@components/pill'
import { technologies } from '@data/skills'
import { FaItchIo, FaLink } from 'react-icons/fa'
import { ProjectGallery } from './projectGallery'

const components = { FaItchIo, FaLink }

type MdxComponents = Record<string, ComponentType<Record<string, unknown>>>

interface ProjectPageProps {
  Content: ComponentType<{ components?: MdxComponents }>
  meta: ProjectData
}

export const ProjectLayout = (props: ProjectPageProps) => {
  const Content = props.Content

  return (
    <article className="py-2">
      <p className="section-kicker">Project</p>
      <h1 className="page-title">{props.meta.title}</h1>
      <p className="mt-2 text-lg text-slate-300">
        {props.meta.inProgress ? 'In Development' : props.meta.year.toString()}
      </p>

      {props.meta.technologies && (
        <div className="mt-4 flex flex-wrap gap-2">
          {props.meta.technologies.map((value) => {
            const tech = technologies[value]
            return (
              <Pill
                key={value}
                text={tech.name}
                icon={tech.icon}
                alwaysExpanded
              />
            )
          })}
        </div>
      )}

      <div className="mt-6 mb-8">
        <ProjectGallery
          images={props.meta.screenshots}
          title={props.meta.title}
        />
      </div>

      <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-a:text-primary-300 prose-strong:text-slate-100">
        <Content components={components} />
      </div>
    </article>
  )
}
