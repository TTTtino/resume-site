import { ReactNode } from "react"

interface PillData {
    icon?: ReactNode
    text: string
    className?: string
}


export const Pill = (props: PillData) => {
    return (
        <button className="text-white bg-black rounded-full h-min w-min group">
            <div className={`flex rounded-full p-1 items-center  ${props?.className}`}>
                {props.icon &&
                    <div className="relative w-4 h-4 m-1 ">
                        {props.icon}
                    </div>
                }
                <span className="hidden m-1 text-xs whitespace-nowrap lg:inline-block group-focus:inline-block">{props.text}</span>
            </div>
        </button>)
}