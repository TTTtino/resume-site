import React, { RefObject } from "react";
import Link from "next/link";
import Image from "next/image";
import resumePic from "../public/profilepic.jpg";
import LinkedInLogo from "../public/linkedin.svg";
import MailLogo from "../public/email-square.svg";

type NavbarProps = {
  title: string;
};

export const Navbar = (props: NavbarProps) => {
  function goToSection(secRef: RefObject<any>) {
    if (secRef.current != null) {
    }
  }

  return (
    <div className={`sticky top-0 left-0 h-screen bg-gray-800 w-96`}>
      <div className="flex flex-col items-center w-min mx-auto my-10">
        <h1 className="text-white text-6xl m-4">{props.title}</h1>
        <div className="relative h-64 w-64 m-4">
          <Image
            src={resumePic}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-row mb-4">
          <LinkedInLogo width={40} height={40} className="m-2" />
          <MailLogo width={40} height={40} fill={"white"} className="m-2" />
        </div>
        <ul>
          <li>
            <Link id="expButton" className="rounded-full" href="/experience">
              Experience
            </Link>
          </li>
          <li>
            <Link
              id="qualButton"
              className="rounded-full"
              href="/qualifications"
            >
              Qualifications
            </Link>
          </li>
          <li>
            <Link id="skillButton" className="rounded-full" href="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link id="projButton" className="rounded-full" href="/projects">
              Projects & Activities
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
