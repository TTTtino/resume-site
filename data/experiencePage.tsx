import { ReactNode } from "react"
import { Technology } from "./skills"
import UoNLogo from "../public/uon-logo.jpg";
import EFSLogo from "../public/efs-logo.jpg";
import ArgosLogo from "../public/argos-logo.jpg";
import TescoLogo from "../public/tesco-logo.jpg";
import Image from "next/image"



export interface WorkExperience {
    role: string,
    company: string,
    type: string,
    start: Date,
    end?: Date,
    location: string,
    technologies: Technology[],
    description?: string,
    icon?: ReactNode
}

export const workExperience: WorkExperience[] = [
    {
        role: "Research Intern",
        company: "University of Nottingham",
        location: "Remote",
        start: new Date(2022, 6, 7),
        technologies: [],
        type: "Internship",
        icon: <Image className="rounded-full" src={UoNLogo} alt="University of Nottingham Logo"
            layout="fill"
            objectFit="cover" />
    },
    {
        role: "Research Intern",
        company: "Emerging Finsights",
        location: "Remote",
        start: new Date(2021, 10, 1),
        technologies: [],
        type: "Internship",
        icon: <Image className="rounded-full" src={EFSLogo} alt="Emerging Finsights Logo"
            layout="fill"
            objectFit="cover" />
    },
    {
        role: "Research Intern",
        company: "University of Nottingham",
        location: "Remote",
        start: new Date(2021, 7, 1),
        end: new Date(2021, 10, 1),
        technologies: [],
        type: "Internship",
        icon: <Image className="rounded-full" src={UoNLogo} alt="University of Nottingham Logo"
            layout="fill"
            objectFit="cover" />,
        description: "Creating a software prototype enabling researchers to perform privacy-preserving linguistic analysis of personal data, allowing for a deeper interpretation of the way people communicated during the pandemic.\nDeveloping a plugin for the Chrome Web browser. This plugin allows for the passive analysis of text data that is displayed in the browser when the user visits specific websites.",
    },
    {
        role: "Customer Service Advisor",
        company: "Argos",
        location: "Bulwell, Nottingham",
        start: new Date(2019, 10, 1),
        end: new Date(2019, 12, 1),
        technologies: [],
        type: "Part-time",
        icon: <Image className="rounded-full" src={ArgosLogo} alt="Argos Logo"
            layout="fill"
            objectFit="cover" />
    },
    {
        role: "Customer Service Assistant",
        company: "Tesco",
        location: "Hucknall, Nottingham",
        start: new Date(2017, 7, 1),
        end: new Date(2017, 9, 1),
        technologies: [],
        type: "Part-time",
        icon: <Image className="rounded-full" src={TescoLogo} alt="Tesco Logo"
            layout="fill"
            objectFit="cover" />
    },
]