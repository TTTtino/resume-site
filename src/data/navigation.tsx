import { ReactNode } from 'react'
import { RiSuitcaseFill, RiCodeBoxFill } from 'react-icons/ri'
import { IoMdSchool, IoMdHome, IoMdMail } from 'react-icons/io'
import { FaTools } from 'react-icons/fa'

export interface NavInfo {
  name: string
  href: string
  icon: ReactNode
}

export default [
  {
    name: 'Home',
    href: '/',
    icon: <IoMdHome className="w-8 h-full " />,
  },
  {
    name: 'Experience',
    href: '/experience',
    icon: <RiSuitcaseFill className="w-8 h-full " />,
  },
  {
    name: 'Skills',
    href: '/skills',
    icon: <FaTools className="w-7 h-full " />,
  },
  {
    name: 'Qualifications',
    href: '/qualifications',
    icon: <IoMdSchool className="w-8 h-full " />,
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: <RiCodeBoxFill className="w-8 h-full " />,
  },
  {
    name: 'Contact Me',
    href: '/contact-me',
    icon: <IoMdMail className="w-8 h-full " />,
  },
]
