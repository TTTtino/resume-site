import { motion, useReducedMotion } from 'framer-motion'
import Page from '@components/page'
import { ProjectData, getAllProjects } from '@data/projectPage'
import { Link } from 'react-router-dom'
import { Pill } from '@components/pill'
import { technologies } from '@data/skills'
import { easeOutSoft, fadeUp } from '@lib/motion'

const ProjectCard = (props: { info: ProjectData; index: number }) => {
  const reduceMotion = useReducedMotion()
  const thumbnail =
    props.info.screenshots.length > 0
      ? props.info.screenshots[0]
      : '/projects/wip-project.png'

  return (
    <motion.article
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      variants={reduceMotion ? undefined : fadeUp}
      transition={{ ...easeOutSoft, delay: Math.min(props.index * 0.05, 0.2) }}
      className="group overflow-hidden rounded-xl border border-white/10 bg-dark-slate-50/80 transition hover:border-primary-400/40 hover:bg-dark-slate-50"
    >
      <Link to={`/projects/${props.info.slug}`} className="block h-full">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            src={thumbnail}
            alt={props.info.title}
          />
        </div>
        <div className="p-4">
          <h2 className="font-display text-xl font-semibold tracking-tight">
            {props.info.title}
          </h2>
          <p className="mt-1 text-sm font-medium text-primary-300">
            {props.info.inProgress ? 'In Development' : props.info.year}
          </p>
          {props.info.technologies && (
            <div className="my-3 flex flex-wrap gap-2">
              {props.info.technologies.map((value) => {
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
          <p className="text-sm font-light leading-relaxed text-slate-300">
            {props.info.shortDescription}
          </p>
        </div>
      </Link>
    </motion.article>
  )
}

const ProjectsPage = () => {
  const projects = getAllProjects()

  return (
    <Page title="Projects">
      <div className="py-2">
        <p className="section-kicker">Selected work</p>
        <h1 className="page-title mb-10">Projects</h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((val, i) => (
            <ProjectCard key={val.slug} info={val} index={i} />
          ))}
        </div>
      </div>
    </Page>
  )
}

export default ProjectsPage
