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
  description?: string
  icon?: ReactNode
}

export const workExperience: WorkExperience[] = [
  {
    role: 'Research Intern',
    company: {
      name: 'University of Nottingham',
      link: 'https://www.linkedin.com/school/university-of-nottingham',
    },
    location: 'Remote',
    start: new Date(2022, 6, 7),
    technologies: [
      technologies.flask,
      technologies.python,
      technologies.html,
      technologies.javascript,
      technologies.bootstrap,
    ],
    type: 'Internship',
    icon: (
      <img
        className="absolute inset-0 object-cover w-full h-full rounded-full"
        src="/uon-logo.jpg"
        alt="University of Nottingham Logo"
      />
    ),
  },
  {
    role: 'Front-End Developer',
    company: {
      name: 'Emerging Finsights',
      link: 'https://www.linkedin.com/company/emergingfinsights',
    },
    location: 'Remote',
    start: new Date(2021, 10, 1),
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
  },
  {
    role: 'Research Intern',
    company: {
      name: 'University of Nottingham',
      link: 'https://www.linkedin.com/school/university-of-nottingham',
    },
    location: 'Remote',
    start: new Date(2021, 7, 1),
    end: new Date(2021, 10, 1),
    technologies: [
      technologies.chromeExt,
      technologies.html,
      technologies.javascript,
      technologies.css,
    ],
    type: 'Internship',
    icon: (
      <img
        className="absolute inset-0 object-cover w-full h-full rounded-full"
        src="/uon-logo.jpg"
        alt="University of Nottingham Logo"
      />
    ),
    description:
      'Creating a software prototype enabling researchers to perform privacy-preserving linguistic analysis of personal data, allowing for a deeper interpretation of the way people communicated during the pandemic.\nDeveloping a plugin for the Chrome Web browser. This plugin allows for the passive analysis of text data that is displayed in the browser when the user visits specific websites.',
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
