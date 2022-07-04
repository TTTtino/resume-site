import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import Page from "../components/page";
import { Navbar } from "../components/sidebar";

const Home: NextPage = () => {
  return (
    <Page>
      <div className="flex flex-col justify-center h-full gap-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl sm:mx-5 md:mx-10 lg:mx-20">
        <div>Hello, I’m <span className="highlight-blue-gradient">Tino Tom</span>!</div>
        <div>3rd year <span className="highlight-blue-gradient">MSci Computer Science</span> Student looking to gain experience in a computer science related field, and improve my understanding of various concepts and  programming languages. </div>
        <div>I’m interested in <span className="highlight-blue-gradient">AR/VR</span>
          , <span className="highlight-blue-gradient">NLP</span>, and <span className="highlight-blue-gradient">Game Development</span> and enjoy playing
          <span className="highlight-blue-gradient"> badminton</span> and <span className="highlight-blue-gradient">drawing/sketching</span> in my free time.</div>
      </div>
    </Page>
  );
};

export default Home;
