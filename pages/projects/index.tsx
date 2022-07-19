import type { NextPage } from "next";
import Page from "@components/page";
import { projects, ProjectData } from "@data/projectPage";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import WIPProjectThumbnail from "@public/projects/wip-project.png"
import { Pill } from "@components/pill";

const ProjectCard = (props: { info: ProjectData }) => {
  const router = useRouter();
  return (
    <div className="rounded-md shadow-md w-96 bg-dark-slate-50">
      <Link href={`${router.asPath}/${props.info.slug}`}>
        <a >
          <div className="relative h-64 rounded-t-md">
            <Image
              className="rounded-t-md"
              layout='fill'
              objectFit='cover'
              src={props.info.screenshots.length > 0 ? props.info.screenshots[0] : WIPProjectThumbnail}
            />

          </div>
          <div className="p-3">
            <h2 className="text-xl font-bold">{props.info.name}</h2>
            <div className="font-bold">{props.info.inProgress ? "In Development" : props.info.year}</div>
            {props.info.technologies &&
              <div className="flex flex-wrap gap-2 my-1">
                {props.info.technologies?.map((value, index) => {
                  return <Pill key={index} text={value.name} icon={value.icon} alwaysExpanded={true} className="text-white bg-secondary-500" />
                })}
              </div>}
            <div className="font-light">{props.info.shortDescription}</div>
          </div>

        </a>
      </Link>
    </div>


  )
}

const Projects: NextPage = () => {
  return (
    <Page title="Projects">
      <div className="p-5">
        <h1 className="mb-5 text-5xl font-bold ">Projects</h1>
        <div className="flex flex-wrap justify-center gap-5 px-2 lg:justify-start">
          {
            projects.map((val, i) => {
              return <ProjectCard key={i} info={val} />
            })
          }
        </div>
      </div>

    </Page>
  );
};

export default Projects;
