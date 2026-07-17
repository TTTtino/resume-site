import { ReactNode } from 'react'
import { technologies, TechnologyInfo } from './skills'

export interface CompanyInfo {
  name: string
  link?: string
}

export interface WorkExperience {
  role: string
  company: CompanyInfo
  type: string
  start: Date
  end?: Date
  location: string
  technologies?: TechnologyInfo[]
  description?: string | string[]
  icon?: ReactNode
}

const streetsHeaverIcon = (
  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white rounded-full bg-secondary-500 sm:text-sm">
    SH
  </div>
)

const uonIcon = (
  <img
    className="absolute inset-0 object-cover w-full h-full rounded-full"
    src="/uon-logo.jpg"
    alt="University of Nottingham Logo"
  />
)

export const workExperience: WorkExperience[] = [
  {
    role: 'Software Engineer',
    company: {
      name: 'Streets Heaver Healthcare Computing',
      link: 'https://www.linkedin.com/company/streets-heaver-healthcare-computing',
    },
    location: 'Lincoln',
    start: new Date(2023, 4, 1),
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.playwright,
      technologies.azureDevops,
      technologies.dotnet,
      technologies.azureFunctions,
      technologies.terraform,
      technologies.vite,
      technologies.sass,
    ],
    type: 'Full-time',
    icon: streetsHeaverIcon,
    description: [
      'Promoted from Junior Software Developer (May 2023 – Jan 2024) to Software Engineer (Jan 2024 – Present).',
      'Awarded Employee of the Month within the first 30 days for an exceptional volume of high-quality UI deliverables.',
      'Led multiple structural migrations of the company’s core Design System, building highly reusable UI layouts capable of managing complex, multi-layered frontend states (toolbars, selection bounds, filtering matrices) via React Context.',
      'Championed and executed the application’s transition to TypeScript, significantly bolstering type safety, optimizing the local developer experience, and providing hands-on mentorship to team members.',
      'Championed an architectural shift from basic React state to react-hook-form for extensive data intake sheets, eliminating costly re-renders and noticeably increasing UI responsiveness.',
      'Optimized data-heavy user interfaces by implementing virtualization and debounced search constraints, ensuring smooth client-side rendering for massive patient data streams.',
      'Developed backend support structures including minimal API endpoints using ASP.NET Core and serverless Azure Functions to handle efficient data fetching, sorting, and filtering for the frontend consumer layers.',
      'Architected and engineered robust, production-ready end-to-end testing pipelines from scratch using Playwright, drastically expanding test coverage and mitigating regression risks.',
      'Managed frontend build and deployment configurations using Azure DevOps Pipelines, and independently learned Terraform to rebuild outdated cloud templates, establishing a reliable, repeatable baseline for deploying application resources.',
      'Reduced project scoping delays and bare-bones user stories by utilizing precise prompt engineering to map legacy codebase behaviors, delivering immediate technical clarity to Product Owners without draining developer resources.',
    ],
  },
  {
    role: 'Software Engineer',
    company: {
      name: 'University of Nottingham',
      link: 'https://www.linkedin.com/school/university-of-nottingham',
    },
    location: 'Nottingham',
    start: new Date(2022, 9, 1),
    end: new Date(2023, 4, 1),
    technologies: [
      technologies.chromeExt,
      technologies.python,
      technologies.nlp,
      technologies.flask,
      technologies.html,
      technologies.javascript,
    ],
    type: 'Full-time',
    icon: uonIcon,
    description: [
      'Engineered a Chrome Extension leveraging Python/NLP pipelines to actively parse webpage data, identify markers of misinformation, and cleanly notify users via an unobtrusive UI interface.',
      'Developed a secure software prototype enabling privacy-preserving linguistic analysis, building a Flask REST API and backend server component to manage administrative states and research data.',
    ],
  },
  {
    role: 'Research Intern',
    company: {
      name: 'University of Nottingham',
      link: 'https://www.linkedin.com/school/university-of-nottingham',
    },
    location: 'Remote',
    start: new Date(2022, 5, 1),
    end: new Date(2022, 8, 1),
    technologies: [
      technologies.flask,
      technologies.python,
      technologies.html,
      technologies.javascript,
      technologies.bootstrap,
    ],
    type: 'Internship',
    icon: uonIcon,
    description: [
      'Developed a secure software prototype enabling privacy-preserving linguistic analysis, building a Flask REST API and backend server component to manage administrative states and research data.',
    ],
  },
  {
    role: 'Web Developer',
    company: {
      name: 'Emerging Finsights',
      link: 'https://www.linkedin.com/company/emergingfinsights',
    },
    location: 'Remote',
    start: new Date(2021, 9, 1),
    end: new Date(2022, 9, 1),
    technologies: [
      technologies.next,
      technologies.react,
      technologies.typescript,
      technologies.tailwind,
    ],
    type: 'Internship',
    icon: (
      <img
        className="absolute inset-0 object-cover w-full h-full rounded-full"
        src="/efs-logo.jpg"
        alt="Emerging Finsights Logo"
      />
    ),
    description: [
      'Collaborated in a small team to architect a component-driven, highly maintainable publication website using Next.js and Tailwind CSS.',
      'Integrated a headless CMS that removed technical bottlenecks for non-technical editorial staff, accelerating content velocity to over 10 published financial articles per month.',
    ],
  },
  {
    role: 'Research Intern',
    company: {
      name: 'University of Nottingham',
      link: 'https://www.linkedin.com/school/university-of-nottingham',
    },
    location: 'Remote',
    start: new Date(2021, 6, 1),
    end: new Date(2021, 9, 1),
    technologies: [
      technologies.chromeExt,
      technologies.html,
      technologies.javascript,
      technologies.css,
      technologies.nlp,
    ],
    type: 'Internship',
    icon: uonIcon,
    description: [
      'Engineered a Chrome Extension leveraging Python/NLP pipelines to actively parse webpage data, identify markers of misinformation, and cleanly notify users via an unobtrusive UI interface.',
    ],
  },
  {
    role: 'Customer Service Advisor',
    company: {
      name: 'Argos',
      link: 'https://www.linkedin.com/company/argos-uk/',
    },
    location: 'Bulwell, Nottingham',
    start: new Date(2019, 10, 1),
    end: new Date(2019, 12, 1),
    type: 'Part-time',
    icon: (
      <img
        className="absolute inset-0 object-cover w-full h-full rounded-full"
        src="/argos-logo.jpg"
        alt="Argos Logo"
      />
    ),
  },
  {
    role: 'Customer Service Assistant',
    company: {
      name: 'Tesco',
      link: 'https://www.linkedin.com/company/-tesco/',
    },
    location: 'Hucknall, Nottingham',
    start: new Date(2017, 7, 1),
    end: new Date(2017, 9, 1),
    type: 'Part-time',
    icon: (
      <img
        className="absolute inset-0 object-cover w-full h-full rounded-full"
        src="/tesco-logo.jpg"
        alt="Tesco Logo"
      />
    ),
  },
]
