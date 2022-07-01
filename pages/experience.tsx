import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import Page from "../components/page";
import { Navbar } from "../components/sidebar";

const Experience: NextPage = () => {
  return (
    <Page>
      <div className="h-[120vh] border-red-600 border">
        Experience
      </div>
    </Page>
  );
};

export default Experience;
