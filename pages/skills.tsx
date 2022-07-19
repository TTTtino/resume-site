import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import Page from "@components/page";
import { SideNavBar } from "@components/sideNavBar";

const Skills: NextPage = () => {
  return (
    <Page title="Skills">
      <div className="h-[120vh] border-red-600 border">
        Skills
      </div>
    </Page>
  );
};

export default Skills;
