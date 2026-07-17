/// <reference types="vite/client" />

declare module '*.mdx' {
  import type { ComponentType, ReactNode } from 'react'

  export const frontmatter: {
    title: string
    screenshots: string[]
    shortDescription: string
    inProgress: boolean
    technologies: string[]
    year: number
  }

  const MDXComponent: ComponentType<{
    components?: Record<string, ComponentType<any>>
    children?: ReactNode
  }>

  export default MDXComponent
}
