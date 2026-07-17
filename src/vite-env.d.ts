/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_FORM_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

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
