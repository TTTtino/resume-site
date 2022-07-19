import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import Page from "@components/page";
import { SideNavBar } from "@components/sideNavBar";
import { workExperience, WorkExperience } from "../data/experiencePage";
import { format } from 'date-fns'
import { Chrono } from "react-chrono";
import { RiMapPinFill } from "react-icons/ri"
import { BiBuildings, BiCalendar } from "react-icons/bi"
import { Pill } from "@components/pill";
import { ChronoTheme } from "@data/generic";


const ExperienceCard = (props: { data: WorkExperience }) => {
  return (<div className="w-full py-2">
    <div className="flex flex-col sm:flex-row sm:items-center">
      <div className="relative w-10 h-10 mb-1 border rounded-full sm:mb-0 sm:mr-2 sm:h-12 sm:w-12">
        {props.data.icon}
      </div>
      <div>
        <h2 className="text-xl font-extrabold">{props.data.role} · <span className="font-normal">{props.data.type}</span></h2>
        <div className="flex w-full font-semibold ">
          <Link href={props.data.company.link ? props.data.company.link : "#"}><a className="flex items-center gap-1 rounded-md hover:underline"> <BiBuildings />{props.data.company.name}</a></Link>

        </div>
        <span className="flex items-center gap-1 font-semibold"> <RiMapPinFill />{props.data.location}</span>
      </div>
    </div>
    <h3 className="flex items-center gap-1 lg:ml-2"><BiCalendar />{`${format(props.data.start, "MMM yyyy")} - ${props.data.end ? format(props.data.end, "MMM yyyy") : "Ongoing"}`}</h3>
    {props.data.technologies && <div className="flex flex-wrap gap-2 mt-1">
      {props.data.technologies?.map((value, index) => {
        return <Pill key={index} text={value.name} icon={value.icon} className="text-white bg-secondary-500" />
      })}
    </div>}

    {props.data.description &&
      <div className="mt-2"><p className="font-light">{props.data?.description}</p>
      </div>}
  </div>)
}

const Experience: NextPage = () => {
  return (
    <Page title="Experience">
      <h1 className="pt-5 pl-5 text-5xl font-bold ">Experience</h1>
      <div className="">

        <Chrono mode="VERTICAL" theme={ChronoTheme}
          disableClickOnCircle={true}
          hideControls={true}
          cardHeight={0}
        >

          {workExperience.map((value, index) => {
            return <ExperienceCard key={index} data={value} />

          })}
        </Chrono>

        <div>

        </div>
      </div>
    </Page>
  );
};

export default Experience;
