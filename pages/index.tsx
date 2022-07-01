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
      <div id="homeSection" className="h-[120vh] border-red-600 border">
        Home
      </div>
    </Page>
  );
};

export default Home;
