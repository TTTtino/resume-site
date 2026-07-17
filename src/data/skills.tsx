import { ReactNode } from 'react'
import {
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
  SiHtml5,
  SiJavascript,
  SiFlask,
  SiReact,
  SiNextdotjs,
  SiGooglechrome,
  SiTypescript,
  SiSharp,
  SiUnity,
  SiFlutter,
} from 'react-icons/si'

export interface TechnologyInfo {
  name: string
  icon?: ReactNode
}

export const technologies: { [name: string]: TechnologyInfo } = {
  python: { name: 'Python', icon: <SiPython /> },
  html: { name: 'HTML', icon: <SiHtml5 /> },
  javascript: { name: 'JavaScript', icon: <SiJavascript /> },
  typescript: { name: 'TypeScript', icon: <SiTypescript /> },
  css: { name: 'CSS', icon: <SiCss /> },
  flask: { name: 'Flask', icon: <SiFlask /> },
  flutter: { name: 'Flutter', icon: <SiFlutter /> },
  react: { name: 'React', icon: <SiReact /> },
  next: { name: 'Next.js', icon: <SiNextdotjs /> },
  chromeExt: { name: 'Chrome Extensions', icon: <SiGooglechrome /> },
  tailwind: { name: 'Tailwind', icon: <SiTailwindcss /> },
  bootstrap: { name: 'Bootstrap', icon: <SiBootstrap /> },
  cSharp: { name: 'C#', icon: <SiSharp /> },
  unity: { name: 'Unity', icon: <SiUnity /> },
}
