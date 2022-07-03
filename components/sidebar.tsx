import React, { RefObject } from "react";
import Link from "next/link";
import Image from "next/image";
import resumePic from "../public/profilepic.jpg";
import { IoMdSchool, IoMdHome } from "react-icons/io"
import { RiSuitcaseFill, RiFileCodeFill, RiLightbulbFlashFill, RiLinkedinBoxFill, RiMailFill } from "react-icons/ri"
import { NavInfo } from "../data/navigation";
import { useRouter } from "next/router";

const getNavIcon = (item: string) => {
  switch (item) {
    case "Home":
      return <IoMdHome className="inline-block w-8 h-full md:mr-2" />
    case "Experience":
      return <RiSuitcaseFill className="inline-block w-8 h-full md:mr-2" />
    case "Qualifications":
      return <IoMdSchool className="inline-block w-8 h-full md:mr-2" />
    case "Skills":
      return <RiLightbulbFlashFill className="inline-block w-8 h-full md:mr-2" />
    case "Projects & Activities":
      return <RiFileCodeFill className="inline-block w-8 h-full md:mr-2" />
    default:
      break;
  }
}

type NavElementProps = {
  info: NavInfo
  active: boolean
}

const NavElement = (props: NavElementProps) => {

  return (<li className={`mx-2 bg-white rounded-md  md:w-64 ${props.active ? "text-primary-blue-800 bg-opacity-75 font-extrabold" : "text-white/80 bg-opacity-0 hover:bg-opacity-30"}`}>
    <Link href={props.info.href} className="w-full h-full">
      <a className="block w-full h-full p-3">
        {getNavIcon(props.info.name)}
        <span className="hidden md:inline-block">{props.info.name}</span>
      </a>
    </Link>
  </li>)
}

type NavbarProps = {
  title: string,
  navigationData: NavInfo[]
};

export const Navbar = (props: NavbarProps) => {
  const router = useRouter()
  return (
    <div className="sticky top-0 left-0 h-screen shadow-2xl bg-gradient-to-br from-primary-blue-800 to-primary-blue-400 min-w-content">
      <div className="flex flex-col items-center h-full mx-auto">

        <div className="flex flex-col items-center mt-2 rounded-md group">
          <div className="relative w-16 h-16 m-1 md:w-44 md:h-44">
            <Image
              src={resumePic}
              alt="Picture of Tino Tom"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <h1 className="hidden text-3xl font-bold text-white md:block">{props.title}</h1>
        </div>

        <ul className="flex flex-col h-full gap-2 mt-2">
          {props.navigationData.map((item, index) => {
            return <NavElement key={index} info={item} active={router.pathname === item.href ? true : false} />
          })}


          <li className="flex flex-col mt-auto mb-6">
            <Link href="https://www.linkedin.com/in/tino-tom/">
              <a className="p-3 mx-2 bg-white bg-opacity-0 rounded-md text-white/80 hover:bg-opacity-30">
                <RiLinkedinBoxFill className="inline-block w-8 h-full md:mr-2" />
                <span className="hidden md:inline-block">LinkedIn</span>
              </a>
            </Link>
            <Link href="mailto:tinotom7:outlook.com">
              <a className="p-3 mx-2 bg-white bg-opacity-0 rounded-md text-white/80 hover:bg-opacity-30">
                <RiMailFill className="inline-block w-8 h-full md:mr-2" />
                <span className="hidden md:inline-block">Email Me</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
