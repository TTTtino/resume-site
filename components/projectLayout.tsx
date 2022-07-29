import { ProjectData } from "@data/projectPage"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { Pill } from "@components/pill"
import { Carousel } from "react-responsive-carousel"
import Image from "next/image"
import { useState } from "react"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"
import { technologies } from "@data/skills"
import Link from "next/link"

import WIPProjectThumbnail from "@public/projects/wip-project.png"
import { FaItchIo } from "react-icons/fa"

const components = { FaItchIo, Link }

interface ProjectPageProps {
    source: MDXRemoteSerializeResult,
    meta: ProjectData
}


export const ProjectLayout = (props: ProjectPageProps) => {
    const [ssIndex, setSSIndex] = useState(0)
    return (
        <div className='p-5 '>
            <h1 className="text-5xl font-bold">{props.meta.title}</h1>
            <h2 className="text-xl font-semibold">{props.meta.inProgress ? "In Development" : props.meta.year}</h2>
            <div>
                {props.meta.technologies &&
                    <div className="flex flex-wrap gap-2 mt-1">
                        {props.meta.technologies?.map((value, index) => {
                            const tech = technologies[value]
                            return <Pill key={index} text={tech.name} icon={tech.icon} className="text-white bg-secondary-500" />
                        })}
                    </div>}
            </div>
            <div className='mt-2 mb-4'>

                {
                    props.meta.screenshots.length > 0 ?
                        <div>
                            <Carousel
                                selectedItem={ssIndex} onChange={index => setSSIndex(index)}
                                className='w-full mx-auto bg-dark-slate-400'
                                showThumbs={false} stopOnHover={false} infiniteLoop={true} interval={10000} showArrows={false} showIndicators={false} showStatus={false}
                                autoPlay={true}
                                preventMovementUntilSwipeScrollTolerance={true}
                                swipeScrollTolerance={20}
                            >
                                {props.meta.screenshots.map((sc, index) => {
                                    return (
                                        <div key={index} className="relative h-48 sm:h-96">
                                            <Image
                                                layout='fill'
                                                objectFit='contain'
                                                src={sc}
                                            />
                                        </div>
                                    )
                                })}


                            </Carousel>
                            <div className='flex flex-row justify-center gap-16 mt-2'>
                                <div onClick={() => { setSSIndex(ssIndex - 1) }}><FaChevronCircleLeft className='w-8 h-8' /></div>
                                <div onClick={() => { setSSIndex(ssIndex + 1) }}><FaChevronCircleRight className='w-8 h-8' /></div>
                            </div>
                        </div>
                        :
                        <div className="relative h-48 sm:h-96">
                            <Image
                                layout='fill'
                                objectFit='contain'
                                src={WIPProjectThumbnail}
                            />
                        </div>
                }

            </div>
            <div className="prose prose-xl prose-invert"><MDXRemote components={components} {...props.source} /></div>
        </div>
    )
}