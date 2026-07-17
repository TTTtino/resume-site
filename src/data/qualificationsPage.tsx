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
    date: new Date(2023, 6, 1),
    location: 'Nottingham',
    grades: (
      <ul className="pl-5 space-y-1 list-disc">
        <li>First Class Degree</li>
        <li>
          Recipient of the High Achiever Award (awarded to the top 5% of
          students)
        </li>
        <li>
          Student Mentor running fortnightly technical workshops to reinforce
          programming fundamentals
        </li>
      </ul>
    ),
    icon: (
      <img
        className="absolute inset-0 object-cover w-full h-full rounded-full"
        src="/uon-logo.jpg"
        alt="University of Nottingham Logo"
      />
    ),
  },
  {
    name: 'A Level & GCSE',
    institution: 'National C of E Academy',
    date: new Date(2019, 6, 1),
    location: 'Nottingham',
    grades: (
      <ul className="pl-5 space-y-1 list-disc">
        <li>
          A Level: Mathematics (A), Computer Science (A), Extended Project (A),
          Physics (B)
        </li>
        <li>
          GCSE: Grade 9 in Mathematics, Grade A in Computer Science, plus 8
          additional A*-B grades
        </li>
      </ul>
    ),
    icon: (
      <img
        className="absolute inset-0 object-cover w-full h-full rounded-full"
        src="/uon-logo.jpg"
        alt="National C of E Academy"
      />
    ),
  },
]
