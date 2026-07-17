import { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { easeOutSoft, fadeUp } from '@lib/motion'

export interface TimelineItem {
  id: string
  title: string
  content: ReactNode
}

interface TimelineProps {
  items: TimelineItem[]
}

const Timeline = ({ items }: TimelineProps) => {
  const reduceMotion = useReducedMotion()

  return (
    <ol className="relative m-0 list-none border-l border-primary-400/30 pl-0">
      {items.map((item, index) => (
        <motion.li
          key={item.id}
          className="relative mb-12 ml-6 last:mb-0 sm:ml-8"
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={reduceMotion ? undefined : fadeUp}
          transition={{ ...easeOutSoft, delay: Math.min(index * 0.04, 0.16) }}
        >
          <span className="absolute -left-[1.7rem] top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-primary-300 bg-secondary-500 shadow-[0_0_0_4px_rgba(12,18,34,1)] sm:-left-[2.2rem]" />
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary-300">
            {item.title}
          </div>
          <div className="w-full min-w-0">{item.content}</div>
        </motion.li>
      ))}
    </ol>
  )
}

export default Timeline
