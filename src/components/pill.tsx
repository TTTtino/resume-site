import { ReactNode } from 'react'

interface PillData {
  icon?: ReactNode
  text: string
  className?: string
  alwaysExpanded?: boolean
}

export const Pill = (props: PillData) => {
  return (
    <span
      className={`inline-flex items-center rounded-md bg-secondary-500/90 px-2 py-1 text-xs font-medium text-white ring-1 ring-white/10 ${props.className ?? ''}`}
    >
      {props.icon && (
        <span className="relative mr-1.5 inline-flex h-4 w-4 shrink-0 items-center justify-center [&>img]:h-full [&>img]:w-full [&>svg]:h-full [&>svg]:w-full">
          {props.icon}
        </span>
      )}
      <span
        className={`whitespace-nowrap ${
          props.alwaysExpanded
            ? 'inline'
            : 'hidden sm:inline'
        }`}
      >
        {props.text}
      </span>
      {!props.alwaysExpanded && (
        <span className="sr-only sm:hidden">{props.text}</span>
      )}
    </span>
  )
}
