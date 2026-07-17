import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Page from '@components/page'
import { easeOutSoft, fadeUp, staggerChildren } from '@lib/motion'

const HomePage = () => {
  const reduceMotion = useReducedMotion()

  return (
    <Page title="Home">
      <section className="flex min-h-[calc(100dvh-8rem)] flex-col justify-center py-8 md:min-h-[calc(100dvh-7rem)]">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={reduceMotion ? undefined : staggerChildren(0.08, 0.05)}
        >
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            transition={easeOutSoft}
            className="section-kicker"
          >
            tinotom.dev
          </motion.p>
          <motion.h1
            variants={reduceMotion ? undefined : fadeUp}
            transition={easeOutSoft}
            className="font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="highlight-blue-gradient">Tino Tom</span>
          </motion.h1>
          <motion.p
            variants={reduceMotion ? undefined : fadeUp}
            transition={easeOutSoft}
            className="mt-5 max-w-xl text-lg text-slate-300 sm:text-xl"
          >
            Frontend Engineer specializing in React, TypeScript, and modern UI
            architecture.
          </motion.p>
          <motion.div
            variants={reduceMotion ? undefined : fadeUp}
            transition={easeOutSoft}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/experience"
              className="inline-flex items-center rounded-lg bg-secondary-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary-400"
            >
              View experience
            </Link>
            <Link
              to="/contact-me"
              className="inline-flex items-center rounded-lg border border-primary-400/40 bg-transparent px-5 py-3 text-sm font-semibold text-primary-200 transition hover:border-primary-300 hover:bg-primary-400/10"
            >
              Contact me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="border-t border-white/10 py-16 md:py-20">
        <p className="section-kicker">About</p>
        <h2 className="page-title max-w-2xl">Building reliable frontend systems</h2>
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg">
          <p>
            First class{' '}
            <span className="highlight-blue-gradient">Computer Science</span>{' '}
            graduate and{' '}
            <span className="highlight-blue-gradient">Frontend Engineer</span>{' '}
            specializing in React, TypeScript, and modern UI architecture.
          </p>
          <p>
            Experienced in driving engineering ownership — from migrating design
            systems and optimizing complex state management to building automated
            end-to-end testing pipelines with{' '}
            <span className="highlight-blue-gradient">Playwright</span>. Adept at
            streamlining frontend delivery via modern{' '}
            <span className="highlight-blue-gradient">CI/CD</span> pipelines while
            maintaining full-stack autonomy.
          </p>
        </div>
      </section>
    </Page>
  )
}

export default HomePage
