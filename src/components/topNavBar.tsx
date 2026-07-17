import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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

const NavElement = ({
  info,
  active,
  onNavigate,
  variant = 'desktop',
}: NavElementProps) => {
  if (variant === 'mobile') {
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
          <span className="flex h-8 w-8 items-center justify-center text-primary-300">
            {info.icon}
          </span>
          <span>{info.name}</span>
        </Link>
      </li>
    )
  }

  return (
    <li>
      <Link
        to={info.href}
        className={`nav-link ${active ? 'nav-link-active' : ''}`}
      >
        <span className="hidden h-4 w-4 items-center justify-center lg:inline-flex [&>svg]:h-4 [&>svg]:w-4">
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
      {pathname !== '/' && (
        <div className="sticky top-0 z-10 border-b border-white/5 bg-dark-slate-200/80 px-4 py-3 backdrop-blur-md">
          <div className="font-display text-2xl font-semibold tracking-tight">
            <span className="highlight-blue-gradient">Tino Tom</span>
          </div>
          <p className="mt-0.5 text-xs text-slate-300">
            Frontend Engineer · First Class Computer Science Graduate
          </p>
        </div>
      )}

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
                    <NavElement
                      key={item.href}
                      info={item}
                      variant="mobile"
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
    <header className="sticky top-0 z-20 hidden border-b border-white/5 bg-dark-slate-200/75 backdrop-blur-xl md:block">
      <div className="mx-auto flex max-w-6xl items-start justify-between gap-6 px-6 py-4 lg:px-8">
        <Link to="/" className="group min-w-0 shrink">
          <div className="font-display text-3xl font-semibold tracking-tight xl:text-4xl">
            <span className="hidden xl:inline">
              Hi, I&apos;m <span className="highlight-blue-gradient">Tino</span>
            </span>
            <span className="xl:hidden">
              <span className="highlight-blue-gradient">Tino</span>
            </span>
          </div>
          <p className="mt-1 max-w-xs text-right text-xs text-slate-300 xl:max-w-none xl:text-sm">
            Frontend Engineer · First Class{' '}
            <span className="highlight-blue-gradient">Computer Science</span>{' '}
            Graduate
          </p>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-end gap-1">
            {props.navigationData.map((item) => (
              <NavElement
                key={item.href}
                info={item}
                active={isActivePath(pathname, item.href)}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
