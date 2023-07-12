import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import Page from "@components/page";

const Projects: NextPage = () => {
    return (
        <Page title="Projects">
            <div className="h-full flex justify-center items-center">
                Work in Progress
            </div>
        </Page>
    );
};

export default Projects;
