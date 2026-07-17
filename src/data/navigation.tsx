import { ReactNode } from 'react'
import { RiCodeBoxFill } from 'react-icons/ri'
import { IoMdHome, IoMdMail } from 'react-icons/io'
import { FaTools } from 'react-icons/fa'
import { MdWorkHistory } from 'react-icons/md'

export interface NavInfo {
  name: string
  href: string
  icon: ReactNode
}

export default [
  {
    name: 'Home',
    href: '/',
    icon: <IoMdHome className="h-5 w-5" />,
  },
  {
    name: 'Background',
    href: '/background',
    icon: <MdWorkHistory className="h-5 w-5" />,
  },
  {
    name: 'Skills',
    href: '/skills',
    icon: <FaTools className="h-5 w-5" />,
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: <RiCodeBoxFill className="h-5 w-5" />,
  },
  {
    name: 'Contact Me',
    href: '/contact-me',
    icon: <IoMdMail className="h-5 w-5" />,
  },
]
