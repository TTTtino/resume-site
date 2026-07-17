import type { ComponentType } from 'react'

export interface ProjectData {
  slug: string
  title: string
  screenshots: string[]
  shortDescription: string
  inProgress: boolean
  technologies: string[]
  year: number
}

export interface ProjectModule {
  default: ComponentType<{
    components?: Record<string, ComponentType<Record<string, unknown>>>
  }>
  frontmatter: Omit<ProjectData, 'slug'>
}

const projectModules = import.meta.glob<ProjectModule>('/_projects/*.mdx', {
  eager: true,
})

const getSlugFromPath = (path: string) =>
  path.split('/').pop()?.replace(/\.mdx?$/, '') ?? ''

export const getProjectSlugs = () =>
  Object.keys(projectModules).map(getSlugFromPath)

export const getProjectModule = (slug: string): ProjectModule | undefined => {
  const entry = Object.entries(projectModules).find(
    ([path]) => getSlugFromPath(path) === slug,
  )
  return entry?.[1]
}

export const getAllProjects = (): ProjectData[] =>
  Object.entries(projectModules)
    .map(([path, mod]) => ({
      ...mod.frontmatter,
      slug: getSlugFromPath(path),
    }))
    .sort((post1, post2) => (post1.year < post2.year ? 1 : -1))
