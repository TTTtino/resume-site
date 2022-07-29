import { NextPage } from "next";
import { ReactNode } from "react";
import navigationData from "@data/navigation"
import Head from "next/head";
import { MobileNavBar, TopNavBar } from "./topNavBar";

interface PageProps {
    title: string,
    description?: string
    children?: ReactNode
}

const Page: NextPage<PageProps> = (props: PageProps) => {
    return (
        <div>
            <Head>
                <title>{props.title} | tinotom.dev</title>
                <meta name="description" content={`${props.title} page from Tino Tom's portfolio website`} />
            </Head>
            <div className="flex flex-col h-screen text-gray-50">
                <TopNavBar title="Tino Tom" navigationData={navigationData} />
                <MobileNavBar title="Tino Tom" navigationData={navigationData} />

                {/* <Navbar title="Tino Tom" navigationData={navigationData} /> */}
                <main className="h-full px-4 xl:container xl:mx-auto">
                    {props?.children}
                    <div className="h-24 sm:hidden">

                    </div>
                </main>
            </div>
        </div>

    )
}

export default Page