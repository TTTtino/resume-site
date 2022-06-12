import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { Navbar } from "../components/sidebar";

const Projects: NextPage = () => {
  return (
    <div className="flex">
      <Navbar title="Tino Tom" />
      <main className="flex-1 grow p-4">
        <div id="projectsSection" className="h-screen bg-red-500">
          Projects
        </div>
      </main>
    </div>
  );
};

export default Projects;
