import { motion, useReducedMotion } from 'framer-motion'
import Page from '@components/page'
import { Pill } from '@components/pill'
import { skillCategories } from '@data/skills'
import { easeOutSoft, fadeUp, staggerChildren } from '@lib/motion'

const SkillsPage = () => {
  const reduceMotion = useReducedMotion()

  return (
    <Page title="Skills">
      <div className="py-2">
        <p className="section-kicker">Toolkit</p>
        <h1 className="page-title mb-10">Skills</h1>
        <div className="flex flex-col gap-10">
          {skillCategories.map((category) => (
            <section key={category.name}>
              <h2 className="mb-4 font-display text-2xl font-semibold tracking-tight">
                {category.name}
              </h2>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-20px' }}
                variants={reduceMotion ? undefined : staggerChildren(0.03)}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={reduceMotion ? undefined : fadeUp}
                    transition={easeOutSoft}
                  >
                    <Pill
                      text={skill.name}
                      icon={skill.icon}
                      alwaysExpanded
                    />
                  </motion.div>
                ))}
              </motion.div>
            </section>
          ))}
        </div>
      </div>
    </Page>
  )
}

export default SkillsPage
