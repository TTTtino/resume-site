import { StaticImageData } from "next/image"
import { technologies, TechnologyInfo } from "@data/skills"
import eidolonSC1 from "@public/projects/eidolon/Screenshot\ (1).png"
import eidolonSC2 from "@public/projects/eidolon/Screenshot\ (2).png"
import eidolonSC3 from "@public/projects/eidolon/Screenshot\ (3).png"
import { ReactNode } from "react"

export interface ProjectData {
    slug: string,
    name: string,
    screenshots: StaticImageData[],
    shortDescription: string,
    description: ReactNode,
    inProgress: boolean,
    technologies: TechnologyInfo[],
    year: Number
}

export const projects: ProjectData[] = [
    {
        slug: "eidolon-game",
        name: "Eidolon",
        screenshots: [eidolonSC1, eidolonSC2, eidolonSC3],
        shortDescription: "Complete challenges and defeat enemies in this short 2D platformer",
        description:
            <div>
                A very short 2D platformer where you must listen (or not?) to an ancient weapon and complete it's trials.
                <ul>
                    <li>Complete Puzzles</li>
                    <li>Defeat Enemies</li>
                    <li>Manoeuvre through difficult terrain and obstacles</li>
                </ul>
            </div>,
        inProgress: false,
        technologies: [technologies.unity, technologies.cSharp],
        year: 2022
    },
    {
        slug: "test-project",
        name: "TestProjectA",
        screenshots: [],
        shortDescription: "Blach blah blah",
        description: "string",
        inProgress: true,
        technologies: [],
        year: 0
    },

]

export const getAllProjectPaths = () => {
    return projects.map(
        (val) => {
            return {
                params: {
                    slug: `${val.slug}`,
                },
            }
        })
}