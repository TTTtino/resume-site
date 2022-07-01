import { NextPage } from "next";
import { ReactNode } from "react";
import { Navbar } from "./sidebar";
import navigationData from "../data/navigation"


interface PageProps {
    children?: ReactNode
}

const Page: NextPage = (props: PageProps) => {
    return (
        <div className="flex">
            <Navbar title="Tino Tom" navigationData={navigationData} />
            <main className="flex-1 p-4 grow">
                {props?.children}
            </main>
        </div>
    )
}

export default Page