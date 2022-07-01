import { useCallback } from "react"
import { IoMdSchool, IoMdHome } from "react-icons/io"
import { RiSuitcaseFill, RiFileCodeFill, RiLightbulbFlashFill } from "react-icons/ri"

export interface NavInfo {
  name: string,
  href: string
}


export default [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Experience",
    href: "/experience"
  },
  {
    name: "Qualifications",
    href: "/qualifications"
  },
  {
    name: "Skills",
    href: "/skills"
  },
  {
    name: "Projects & Activities",
    href: "/projects"
  },
]


