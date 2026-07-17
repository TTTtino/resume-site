import Page from '@components/page'
import { Pill } from '@components/pill'
import { skillCategories } from '@data/skills'

const SkillsPage = () => {
  return (
    <Page title="Skills">
      <div className="p-5">
        <h1 className="mb-5 text-5xl font-bold">Skills</h1>
        <div className="flex flex-col gap-8">
          {skillCategories.map((category) => (
            <section key={category.name}>
              <h2 className="mb-3 text-2xl font-bold">{category.name}</h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Pill
                    key={skill.name}
                    text={skill.name}
                    icon={skill.icon}
                    alwaysExpanded={true}
                    className="text-white bg-secondary-500"
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Page>
  )
}

export default SkillsPage
