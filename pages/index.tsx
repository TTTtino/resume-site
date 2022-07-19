import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import Page from "@components/page";
import { SideNavBar } from "@components/sideNavBar";

const Home: NextPage = () => {
  return (
    <Page title="Home">
      <div className="flex justify-center mt-12 sm:mt-0 sm:h-full">
        <div className="flex flex-col justify-center h-full gap-6 mt-auto text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl sm:mx-5 md:mx-10 lg:mx-20">
          <div className="text-6xl sm:text-7xl md:text-8xl">Hello, I’m <span className="highlight-blue-gradient">Tino Tom</span>!</div>
          <br />
          <div>3rd year <span className="highlight-blue-gradient">MSci Computer Science</span> Student looking to gain experience in a computer science related field, and improve my understanding of various concepts and  programming languages. </div>
          <div>I’m interested in <span className="highlight-blue-gradient">AR/VR</span>
            , <span className="highlight-blue-gradient">Web Development</span>, and <span className="highlight-blue-gradient">Game Development</span> and enjoy playing
            <span className="highlight-blue-gradient"> badminton</span> and <span className="highlight-blue-gradient">drawing/sketching</span> in my free time.</div>
        </div></div>

    </Page>
  );
};

export default Home;
