import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as Tooltip from '@radix-ui/react-tooltip'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { BsChevronUp } from 'react-icons/bs'
import { NavInfo } from '@data/navigation'
import { springSnappy } from '@lib/motion'

type NavElementProps = {
  info: NavInfo
  active: boolean
  onNavigate?: () => void
  variant?: 'desktop' | 'mobile'
}

const isActivePath = (pathname: string, href: string) => {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

const DesktopNavLink = ({ info, active }: NavElementProps) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Link
          to={info.href}
          aria-label={info.name}
          aria-current={active ? 'page' : undefined}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
            active
              ? 'bg-primary-400/15 text-primary-200 ring-1 ring-primary-400/45'
              : 'text-slate-200 hover:bg-white/5 hover:text-primary-200'
          }`}
        >
          <span className="flex h-5 w-5 items-center justify-center [&>svg]:h-5 [&>svg]:w-5">
            {info.icon}
          </span>
        </Link>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side="bottom"
          sideOffset={8}
          className="z-50 select-none rounded-md border border-white/10 bg-dark-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-100 shadow-glow"
        >
          {info.name}
          <Tooltip.Arrow className="fill-dark-slate-50" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}

const MobileNavLink = ({ info, active, onNavigate }: NavElementProps) => {
  return (
    <li className="w-full">
      <Link
        to={info.href}
        onClick={onNavigate}
        className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-base transition-colors ${
          active
            ? 'bg-primary-400/15 font-semibold text-primary-200 ring-1 ring-primary-400/40'
            : 'bg-dark-slate-50/80 text-slate-100 ring-1 ring-white/10 hover:bg-dark-slate-50 hover:text-primary-200'
        }`}
      >
        <span className="flex h-8 w-8 items-center justify-center text-primary-300 [&>svg]:h-6 [&>svg]:w-6">
          {info.icon}
        </span>
        <span>{info.name}</span>
      </Link>
    </li>
  )
}

type NavbarProps = {
  title: string
  navigationData: NavInfo[]
}

export const MobileNavBar = (props: NavbarProps) => {
  const [navOpen, setNavOpen] = useState(false)
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()
  const [menuPath, setMenuPath] = useState(pathname)

  if (menuPath !== pathname) {
    setMenuPath(pathname)
    if (navOpen) setNavOpen(false)
  }

  return (
    <div className="md:hidden">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-dark-slate-200/90 px-4 py-3 backdrop-blur-xl">
        <Link to="/" className="block">
          <div className="font-display text-2xl font-semibold tracking-tight">
            <span className="highlight-blue-gradient">Tino Tom</span>
          </div>
          <p className="mt-0.5 text-xs text-slate-300">
            Frontend Engineer · First Class Computer Science Graduate
          </p>
        </Link>
      </header>
      <div className="h-[4.75rem]" aria-hidden="true" />

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20">
        <div className="pointer-events-auto mx-auto max-w-lg px-3 pb-3">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-dark-slate-50/95 shadow-glow backdrop-blur-xl">
            <AnimatePresence initial={false}>
              {navOpen && (
                <motion.ul
                  key="mobile-nav-list"
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={springSnappy}
                  className="flex flex-col gap-2 overflow-hidden px-3 pt-3"
                >
                  {props.navigationData.map((item) => (
                    <MobileNavLink
                      key={item.href}
                      info={item}
                      active={isActivePath(pathname, item.href)}
                      onNavigate={() => setNavOpen(false)}
                    />
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>

            <button
              type="button"
              aria-expanded={navOpen}
              aria-label={navOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
              onClick={() => setNavOpen((open) => !open)}
            >
              <span className="text-sm font-medium text-slate-200">
                {navOpen ? 'Close menu' : 'Menu'}
              </span>
              <motion.span
                animate={{ rotate: navOpen ? 180 : 0 }}
                transition={springSnappy}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-500 text-white"
              >
                <BsChevronUp className="h-5 w-5" />
              </motion.span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const TopNavBar = (props: NavbarProps) => {
  const { pathname } = useLocation()

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 hidden border-b border-white/5 bg-dark-slate-200/90 backdrop-blur-xl md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
          <Link to="/" className="group min-w-0 shrink">
            <div className="font-display text-3xl font-semibold tracking-tight xl:text-4xl">
              <span className="hidden xl:inline">
                Hi, I&apos;m <span className="highlight-blue-gradient">Tino</span>
              </span>
              <span className="xl:hidden">
                <span className="highlight-blue-gradient">Tino</span>
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-300 xl:text-sm">
              Frontend Engineer · First Class{' '}
              <span className="highlight-blue-gradient">Computer Science</span>{' '}
              Graduate
            </p>
          </Link>

          <Tooltip.Provider delayDuration={200} skipDelayDuration={120}>
            <nav aria-label="Primary">
              <ul className="flex flex-nowrap items-center justify-end gap-1">
                {props.navigationData.map((item) => (
                  <li key={item.href}>
                    <DesktopNavLink
                      info={item}
                      active={isActivePath(pathname, item.href)}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </Tooltip.Provider>
        </div>
      </header>
      <div className="hidden h-[5.75rem] md:block xl:h-[6.5rem]" aria-hidden="true" />
    </>
  )
}
