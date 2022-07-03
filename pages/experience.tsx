import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import Page from "../components/page";
import { Navbar } from "../components/sidebar";
import { workExperience, WorkExperience } from "../data/experiencePage";
import { format } from 'date-fns'
import { Chrono } from "react-chrono";
import { RiMapPinFill } from "react-icons/ri"
import { BiBuildings } from "react-icons/bi"



const ExperienceCard = (props: { data: WorkExperience, index?: number }) => {
  return (<div className="w-full py-2" key={props?.index}>
    <div className="flex flex-col sm:flex-row sm:items-center">
      <div className="relative w-10 h-10 mb-1 border rounded-full sm:mb-0 sm:mr-2 sm:h-12 sm:w-12">
        {props.data.icon}
      </div>
      <div>
        <h3 className="text-xl font-extrabold">{props.data.role} · <span className="font-normal">{props.data.type}</span></h3>
        <div className="flex items-center w-full gap-1 font-medium"><BiBuildings />{props.data.company}</div>
        <div className="flex items-center w-full gap-1 font-medium"><RiMapPinFill />{props.data.location}</div>
        <h5>{`${format(props.data.start, "MMM yyyy")} - ${props.data.end ? format(props.data.end, "MMM yyyy") : "Ongoing"}`}</h5>
      </div>
    </div>
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
