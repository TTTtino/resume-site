import { ReactNode, useEffect } from 'react'
import navigationData from '@data/navigation'
import { MobileNavBar, TopNavBar } from './topNavBar'

interface PageProps {
  title: string
  description?: string
  children?: ReactNode
}

const Page = (props: PageProps) => {
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
    <div>
      <div className="flex flex-col h-screen text-gray-50">
        <TopNavBar title="Tino Tom" navigationData={navigationData} />
        <MobileNavBar title="Tino Tom" navigationData={navigationData} />
        <main className="h-full px-4 xl:container xl:mx-auto">
          {props?.children}
          <div className="h-24 sm:hidden" />
        </main>
      </div>
    </div>
  )
}

export default Page
