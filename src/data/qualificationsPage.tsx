import { ReactNode } from 'react'

export interface Qualification {
  name: string
  institution: string
  date: Date
  location: string
  grades?: ReactNode
  icon?: ReactNode
}

export const qualifications: Qualification[] = [
  {
    name: 'MSci Computer Science (Hons)',
    institution: 'University of Nottingham',
    date: new Date(2023, 7, 1),
    location: 'Nottingham',
    grades: 'Working towards 1st class',
    icon: (
      <img
        className="absolute inset-0 object-cover w-full h-full rounded-full"
        src="/uon-logo.jpg"
        alt="University of Nottingham Logo"
      />
    ),
  },
  {
    name: 'A-level (GCE Advanced Level)',
    institution: 'Hucknall Sixth Form Centre',
    date: new Date(2019, 7, 1),
    location: 'Hucknall, Nottingham',
    grades: 'Working towards 1st class',
    icon: (
      <img
        className="absolute inset-0 object-cover w-full h-full rounded-full"
        src="/uon-logo.jpg"
        alt="University of Nottingham Logo"
      />
    ),
  },
  {
    name: 'GCSE (General Certificate of Secondary Education)',
    institution: 'National Church of England Academy',
    date: new Date(2017, 7, 1),
    location: 'Hucknall, Nottingham',
    grades: 'Working towards 1st class',
    icon: (
      <img
        className="absolute inset-0 object-cover w-full h-full rounded-full"
        src="/uon-logo.jpg"
        alt="University of Nottingham Logo"
      />
    ),
  },
]
