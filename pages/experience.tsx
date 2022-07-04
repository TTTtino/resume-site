import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import Page from "../components/page";
import { Navbar } from "../components/sidebar";
import { workExperience, WorkExperience } from "../data/experiencePage";
import { format } from 'date-fns'
import { Chrono } from "react-chrono";
import { RiMapPinFill } from "react-icons/ri"
import { BiBuildings, BiCalendar } from "react-icons/bi"
import { Pill } from "../components/pill";


const ExperienceCard = (props: { data: WorkExperience, index?: number }) => {
  return (<div className="w-full py-2" key={props?.index}>
    <div className="flex flex-col sm:flex-row sm:items-center">
      <div className="relative w-10 h-10 mb-1 border rounded-full sm:mb-0 sm:mr-2 sm:h-12 sm:w-12">
        {props.data.icon}
      </div>
      <div>
        <h3 className="text-xl font-extrabold">{props.data.role} · <span className="font-normal">{props.data.type}</span></h3>
        <div className="flex w-full font-medium ">
          <Link href={props.data.company.link ? props.data.company.link : "#"}><a className="flex items-center gap-1 rounded-md hover:underline"> <BiBuildings />{props.data.company.name}</a></Link>

        </div>
        <span className="flex items-center gap-1"> <RiMapPinFill />{props.data.location}</span>
      </div>
    </div>
    <h5 className="flex items-center gap-1 lg:ml-2"><BiCalendar />{`${format(props.data.start, "MMM yyyy")} - ${props.data.end ? format(props.data.end, "MMM yyyy") : "Ongoing"}`}</h5>
    {props.data.technologies && <div className="flex flex-wrap gap-2 mt-1">
      {props.data.technologies?.map((value, index) => {
        return <Pill text={value.name} icon={value.icon} className="text-white bg-secondary-700" />
      })}
    </div>}

    {props.data.description &&
      <div><br /><p className="font-light">{props.data?.description}</p>
      </div>}
  </div>)
}

const Experience: NextPage = () => {
  return (
    <Page>
      <div className="">

        <Chrono mode="VERTICAL" theme={{
          primary: '#00aeef',
          secondary: '#00aeef',
        }}
          disableClickOnCircle={true}
          hideControls={true}
          cardHeight={0}
        >

          {workExperience.map((value, index) => {
            return <ExperienceCard data={value} index={index} />

          })}
        </Chrono>

        <div>

        </div>
      </div>
    </Page>
  );
};

export default Experience;
