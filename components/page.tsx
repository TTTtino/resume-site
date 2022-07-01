import { NextPage } from "next";
import { ReactNode } from "react";
import { Navbar } from "./sidebar";
import navigationData from "../data/navigation"
import Head from "next/head";


interface PageProps {
    children?: ReactNode
}

const Page: NextPage = (props: PageProps) => {
    return (
        <div>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex h-screen font-Roboto">
                <Navbar title="Tino Tom" navigationData={navigationData} />
                <main className="flex-1 p-4 ">
                    {props?.children}
                </main>
            </div>
        </div>

    )
}

export default Page