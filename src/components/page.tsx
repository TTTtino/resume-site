import { ReactNode, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import navigationData from '@data/navigation'
import { easeOutSoft } from '@lib/motion'
import { MobileNavBar, TopNavBar } from './topNavBar'

interface PageProps {
  title: string
  description?: string
  children?: ReactNode
}

const Page = (props: PageProps) => {
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    document.title = `${props.title} | tinotom.dev`
    const description =
      props.description ?? `${props.title} page from Tino Tom's portfolio website`
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
  }, [props.title, props.description])

  return (
    <div className="site-atmosphere min-h-screen text-slate-50">
      <div className="flex min-h-screen flex-col">
        <TopNavBar title="Tino Tom" navigationData={navigationData} />
        <MobileNavBar title="Tino Tom" navigationData={navigationData} />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-28 pt-6 sm:px-6 md:pb-12 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ ...easeOutSoft, duration: 0.2 }}
            >
              {props.children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default Page
