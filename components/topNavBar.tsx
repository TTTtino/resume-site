import React, { RefObject, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import resumePic from "@public/profilepic.jpg";
import { IoMdSchool, IoMdHome } from "react-icons/io"
import { BsArrowUpCircle } from "react-icons/bs"
import { RiSuitcaseFill, RiFileCodeFill, RiLightbulbFlashFill, RiLinkedinBoxFill, RiMailFill } from "react-icons/ri"
import { NavInfo } from "@data/navigation";
import { useRouter } from "next/router";

const getNavIcon = (item: string) => {
    switch (item) {
        case "Home":
            return <IoMdHome className="w-8 h-full " />
        case "Experience":
            return <RiSuitcaseFill className="w-8 h-full " />
        case "Qualifications":
            return <IoMdSchool className="w-8 h-full " />
        case "Skills":
            return <RiLightbulbFlashFill className="w-8 h-full " />
        case "Projects & Activities":
            return <RiFileCodeFill className="w-8 h-full " />
        default:
            break;
    }
}

type NavElementProps = {
    info: NavInfo
    active: boolean
    hidden?: boolean
}

const NavElement = (props: NavElementProps) => {

    return (<li className={`h-fit mx-2 decoration-2 transition-all underline-offset-4  ${props.hidden ? "hidden" : "block "} ${props.active ? "text-primary-200 bg-opacity-75 font-extrabold underline" : "text-white hover:text-primary-50 hover:scale-110 hover:text-primary-10 hover:underline"}`}>
        <Link href={props.info.href} className="w-full h-full">
            <a className="flex flex-row items-center w-full h-full p-3 text-center sm:flex-col lg:flex-row">
                {props.info.icon}
                <span className="block ml-2 sm:ml-0 lg:ml-2">{props.info.name}</span>
            </a>
        </Link>
    </li>)
}

type NavbarProps = {
    title: string,
    navigationData: NavInfo[]
};

const MobileNavElement = (props: NavElementProps) => {

    return (<li className={`h-fit mx-2 w-full decoration-2 transition-all underline-offset-4 rounded-md ${props.hidden ? "hidden" : "block "} ${props.active ? "bg-white text-secondary-500 font-extrabold underline " : "bg-white text-secondary-500 hover:text-secondary-700 hover:scale-110 hover:text-primary-10 hover:underline"}`}>
        <Link href={props.info.href} className="w-full h-full">
            <a className="flex flex-row items-center w-full h-full p-2 text-center sm:flex-col lg:flex-row">
                {props.info.icon}
                <span className="block ml-2 sm:ml-0 lg:ml-2">{props.info.name}</span>
            </a>
        </Link>
    </li>)
}

export const MobileNavBar = (props: NavbarProps) => {
    const [navOpen, setNavOpen] = useState(false)
    const router = useRouter()
    return (
        <div>
            {router.pathname != "/" &&
                <div className="sticky top-0 z-10 flex justify-center w-screen pt-4 text-6xl text-center from-dark-slate-700/60 via-dark-slate-700/50 bg-gradient-to-b md:hidden">
                    <div className=" w-fit">
                        <div className="font-bold">Hi, I'm <span className=" highlight-blue-gradient">Tino</span></div>
                        <div className="text-sm font-normal text-end">An MSci <span className="highlight-blue-gradient">Computer Science</span> Student</div>
                    </div>
                </div>
            }

            <div className="fixed bottom-0 z-10 block w-screen transition shadow-2xl shadow-dark-slate-700 md:hidden bg-gradient-to-t from-dark-slate-700/90 via-dark-slate-700/70 to-dark-slate-700/10 ">
                <div className="flex flex-col items-center w-full p-2 mx-auto transition-all">
                    <ul className={`flex flex-col justify-end items-center gap-2 mt-2 flex-grow transition-all ${navOpen ? "max-h-96" : "max-h-0 translate-y-[100vh]"} `}>
                        {props.navigationData.map((item, index) => {
                            return <MobileNavElement key={index} info={item} active={router.pathname === item.href ? true : false} />
                        })}
                    </ul>

                    {/* "-scale-100" : "scale-100" */}
                    <BsArrowUpCircle className={`w-8 h-8 m-5 ${navOpen ? "-scale-100" : "scale-100"} transition-transform`} onClick={
                        (e) => {
                            setNavOpen(!navOpen)
                        }
                    } />
                </div>
            </div>
        </div>

    );
};

export const TopNavBar = (props: NavbarProps) => {
    const router = useRouter()
    return (
        <div className="sticky top-0 z-10 hidden w-screen from-black/60 via-black/50 bg-gradient-to-b md:block">
            <div className={`flex flex-row justify-between w-full mx-auto`}>


                <div className="mt-5 ml-5 mr-1 text-6xl">
                    <div className="font-bold md:hidden xl:block">Hi, I'm <span className=" highlight-blue-gradient">Tino</span></div>
                    <div className="hidden font-bold md:block xl:hidden"><span className=" highlight-blue-gradient">Tino</span></div>
                    <div className="text-sm font-normal text-end">An MSci <span className="highlight-blue-gradient">Computer Science</span> Student</div>
                </div>

                <ul className="flex justify-end gap-2 mt-2">
                    {props.navigationData.map((item, index) => {
                        return <NavElement key={index} info={item} active={router.pathname === item.href ? true : false} />
                    })}


                    {/* <li className="flex flex-col mt-auto mb-6">
                        <Link href="https://www.linkedin.com/in/tino-tom/">
                            <a className="p-3 mx-2 bg-white bg-opacity-0 rounded-md text-white/80 hover:bg-opacity-30">
                                <RiLinkedinBoxFill className="inline-block w-8 h-full md:mr-2" />
                                <span className="hidden md:inline-block">LinkedIn</span>
                            </a>
                        </Link>
                        <Link href="mailto:tinotom7@outlook.com">
                            <a className="p-3 mx-2 bg-white bg-opacity-0 rounded-md text-white/80 hover:bg-opacity-30">
                                <RiMailFill className="inline-block w-8 h-full md:mr-2" />
                                <span className="hidden md:inline-block">Email Me</span>
                            </a>
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div>
    );
};
