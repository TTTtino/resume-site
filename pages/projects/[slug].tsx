import 'react-responsive-carousel/lib/styles/carousel.min.css'
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Page from "@components/page";
import { ProjectData, projects, getAllProjectPaths } from "@data/projectPage"
import Image, { StaticImageData } from "next/image";
import { Carousel } from "react-responsive-carousel";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"


import eidolonSC1 from "@public/projects/eidolon/Screenshot\ (1).png"
import eidolonSC2 from "@public/projects/eidolon/Screenshot\ (2).png"
import eidolonSC3 from "@public/projects/eidolon/Screenshot\ (3).png"
import { useState } from 'react';
import { Pill } from '@components/pill';

interface ProjectPageProps {
    projectSlug: string
}


const ProjectPage: NextPage<ProjectPageProps> = (props) => {
    const proj: ProjectData | undefined = projects.find((val) => { return val.slug == props.projectSlug })
    const [ssIndex, setSSIndex] = useState(0)
    return (
        <Page title={proj ? proj.name : "Project"}>
            <div className='p-5 '>
                <h1 className="text-5xl font-bold">{proj?.name}</h1>
                <h2 className="text-xl font-semibold">{proj?.inProgress ? "In Development" : proj?.year}</h2>
                <div>
                    {proj?.technologies &&
                        <div className="flex flex-wrap gap-2 mt-1">
                            {proj?.technologies?.map((value, index) => {
                                return <Pill key={index} text={value.name} icon={value.icon} className="text-white bg-secondary-500" />
                            })}
                        </div>}
                </div>
                <div className='mt-2 mb-4'>
                    <Carousel
                        selectedItem={ssIndex} onChange={index => setSSIndex(index)}
                        className='w-full mx-auto bg-dark-slate-400'
                        showThumbs={false} stopOnHover={false} infiniteLoop={true} interval={10000} showArrows={false} showIndicators={false} showStatus={false}
                        autoPlay={true}
                        preventMovementUntilSwipeScrollTolerance={true}
                        swipeScrollTolerance={20}
                    >
                        {proj?.screenshots.map((sc, index) => {
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
                <div>{proj?.description}</div>
            </div>

        </Page>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params) return { notFound: true }
    const { slug } = params
    console.log(params)

    if (!slug) return { notFound: true }
    console.log(slug)

    const proj: ProjectData | undefined = projects.find((val) => { return val.slug == slug })
    console.log(proj)
    if (!proj) return { notFound: true }

    return {
        props: {
            projectSlug: proj.slug,
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    const paths = getAllProjectPaths()
    return {
        paths,
        fallback: false
    }
}


export default ProjectPage;
