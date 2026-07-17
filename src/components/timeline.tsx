import { ReactNode } from 'react'

export interface TimelineItem {
  id: string
  title: string
  content: ReactNode
}

interface TimelineProps {
  items: TimelineItem[]
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <ol className="relative m-0 list-none border-l border-secondary-400/60 pl-0">
      {items.map((item) => (
        <li key={item.id} className="relative mb-10 ml-6 last:mb-0 sm:ml-8">
          <span className="absolute -left-[1.6875rem] top-3 flex h-3 w-3 items-center justify-center rounded-full border-2 border-primary-300 bg-secondary-500 sm:-left-[2.1875rem]" />
          <div className="mb-2 text-sm font-semibold text-primary-300 sm:text-base">
            {item.title}
          </div>
          <div className="w-full min-w-0">{item.content}</div>
        </li>
      ))}
    </ol>
  )
}

export default Timeline
