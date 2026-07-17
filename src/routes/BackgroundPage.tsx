import Page from '@components/page'
import Timeline from '@components/timeline'
import { workExperience, WorkExperience } from '@data/experiencePage'
import { qualifications } from '@data/qualificationsPage'
import { format } from 'date-fns'
import { RiMapPinFill } from 'react-icons/ri'
import { BiBuildings, BiCalendar } from 'react-icons/bi'
import { Pill } from '@components/pill'

const ExperienceCard = (props: { data: WorkExperience }) => {
  return (
    <div className="w-full py-1">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/15 bg-dark-slate-50">
          {props.data.icon}
        </div>
        <div className="min-w-0">
          <h2 className="font-display text-xl font-semibold tracking-tight">
            {props.data.role}{' '}
            <span className="font-normal text-slate-300">· {props.data.type}</span>
          </h2>
          <div className="mt-1 flex w-full font-medium text-slate-200">
            <a
              href={props.data.company.link ? props.data.company.link : '#'}
              className="flex items-center gap-1.5 transition hover:text-primary-200 hover:underline"
            >
              <BiBuildings className="text-primary-300" />
              {props.data.company.name}
            </a>
          </div>
          <span className="mt-1 flex items-center gap-1.5 text-slate-300">
            <RiMapPinFill className="text-primary-300" />
            {props.data.location}
          </span>
          <p className="mt-1 flex items-center gap-1.5 text-slate-400">
            <BiCalendar className="text-primary-300" />
            {`${format(props.data.start, 'MMM yyyy')} - ${props.data.end ? format(props.data.end, 'MMM yyyy') : 'Ongoing'}`}
          </p>
        </div>
      </div>

      {props.data.technologies && (
        <div className="mt-4 flex flex-wrap gap-2">
          {props.data.technologies.map((value) => (
            <Pill
              key={value.name}
              text={value.name}
              icon={value.icon}
              alwaysExpanded
            />
          ))}
        </div>
      )}

      {props.data.description && (
        <div className="mt-4 text-slate-300">
          {Array.isArray(props.data.description) ? (
            <ul className="list-disc space-y-2 pl-5 font-light leading-relaxed">
              {props.data.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="whitespace-pre-line font-light leading-relaxed">
              {props.data.description}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

const BackgroundPage = () => {
  return (
    <Page
      title="Background"
      description="Experience and qualifications from Tino Tom's portfolio website"
    >
      <div className="py-2">
        <p className="section-kicker">Career & education</p>
        <h1 className="page-title mb-10">Background</h1>

        <section className="mb-16">
          <h2 className="mb-8 font-display text-2xl font-semibold tracking-tight">
            Experience
          </h2>
          <Timeline
            items={workExperience.map((value, index) => ({
              id: `${value.company.name}-${value.role}-${index}`,
              title: format(value.start, 'MMM yyyy'),
              content: <ExperienceCard data={value} />,
            }))}
          />
        </section>

        <section>
          <h2 className="mb-8 font-display text-2xl font-semibold tracking-tight">
            Qualifications
          </h2>
          <Timeline
            items={qualifications.map((value, index) => ({
              id: `${value.name}-${index}`,
              title: format(value.date, 'MMM yyyy'),
              content: (
                <div className="w-full py-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/15 bg-dark-slate-50">
                      {value.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-semibold tracking-tight">
                        {value.name}
                      </h3>
                      <div className="mt-1 flex items-center gap-1.5 font-medium text-slate-200">
                        <BiBuildings className="text-primary-300" />
                        {value.institution}
                      </div>
                      <span className="mt-1 flex items-center gap-1.5 text-slate-300">
                        <RiMapPinFill className="text-primary-300" />
                        {value.location}
                      </span>
                      <p className="mt-1 flex items-center gap-1.5 text-slate-400">
                        <BiCalendar className="text-primary-300" />
                        {format(value.date, 'MMM yyyy')}
                      </p>
                    </div>
                  </div>
                  {value.grades && (
                    <div className="mt-4 leading-relaxed text-slate-300">
                      {value.grades}
                    </div>
                  )}
                </div>
              ),
            }))}
          />
        </section>
      </div>
    </Page>
  )
}

export default BackgroundPage
