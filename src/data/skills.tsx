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
  SiVite,
  SiSass,
  SiVitest,
  SiTerraform,
  SiDotnet,
  SiSignal,
  SiPostgresql,
} from 'react-icons/si'
import { VscAzure, VscAzureDevops } from 'react-icons/vsc'
import { MdOutlineApi, MdOutlineScience } from 'react-icons/md'
import { RiSpeechToTextLine, RiBrainLine } from 'react-icons/ri'
import { TbPrompt } from 'react-icons/tb'

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
  sass: { name: 'SASS', icon: <SiSass /> },
  flask: { name: 'Flask', icon: <SiFlask /> },
  flutter: { name: 'Flutter', icon: <SiFlutter /> },
  react: { name: 'React', icon: <SiReact /> },
  next: { name: 'Next.js', icon: <SiNextdotjs /> },
  vite: { name: 'Vite', icon: <SiVite /> },
  chromeExt: { name: 'Chrome Extensions', icon: <SiGooglechrome /> },
  tailwind: { name: 'Tailwind', icon: <SiTailwindcss /> },
  bootstrap: { name: 'Bootstrap', icon: <SiBootstrap /> },
  cSharp: { name: 'C#', icon: <SiSharp /> },
  dotnet: { name: '.NET', icon: <SiDotnet /> },
  unity: { name: 'Unity', icon: <SiUnity /> },
  playwright: { name: 'Playwright', icon: <MdOutlineScience /> },
  vitest: { name: 'Vitest', icon: <SiVitest /> },
  azureDevops: { name: 'Azure DevOps Pipelines', icon: <VscAzureDevops /> },
  terraform: { name: 'Terraform', icon: <SiTerraform /> },
  azure: { name: 'Azure', icon: <VscAzure /> },
  azureFunctions: { name: 'Azure Functions', icon: <VscAzure /> },
  azureAiFoundry: { name: 'Azure AI Foundry', icon: <VscAzure /> },
  azureAiSpeech: { name: 'Azure AI Speech', icon: <RiSpeechToTextLine /> },
  signalr: { name: 'SignalR', icon: <SiSignal /> },
  restApis: { name: 'REST APIs', icon: <MdOutlineApi /> },
  sql: { name: 'SQL', icon: <SiPostgresql /> },
  promptEngineering: { name: 'Prompt Engineering', icon: <TbPrompt /> },
  nlp: { name: 'Natural Language Processing', icon: <RiBrainLine /> },
}

export interface SkillCategory {
  name: string
  skills: TechnologyInfo[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Core Frontend',
    skills: [
      technologies.react,
      technologies.typescript,
      technologies.vite,
      technologies.sass,
      technologies.html,
      technologies.css,
      technologies.tailwind,
      technologies.next,
    ],
  },
  {
    name: 'Testing & CI/CD',
    skills: [
      technologies.playwright,
      technologies.azureDevops,
      technologies.vitest,
    ],
  },
  {
    name: 'Cloud / Backend',
    skills: [
      technologies.terraform,
      technologies.dotnet,
      technologies.azureFunctions,
      technologies.restApis,
      technologies.sql,
      technologies.flask,
      technologies.python,
    ],
  },
  {
    name: 'AI',
    skills: [
      technologies.azureAiFoundry,
      technologies.azureAiSpeech,
      technologies.signalr,
      technologies.promptEngineering,
      technologies.nlp,
    ],
  },
]
