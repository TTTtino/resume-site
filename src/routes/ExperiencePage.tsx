import Page from '@components/page'
import Timeline from '@components/timeline'
import { workExperience, WorkExperience } from '@data/experiencePage'
import { format } from 'date-fns'
import { RiMapPinFill } from 'react-icons/ri'
import { BiBuildings, BiCalendar } from 'react-icons/bi'
import { Pill } from '@components/pill'

const ExperienceCard = (props: { data: WorkExperience }) => {
  return (
    <div className="w-full py-1">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border">
          {props.data.icon}
        </div>
        <div className="min-w-0">
          <h2 className="text-xl font-extrabold">
            {props.data.role} ·{' '}
            <span className="font-normal">{props.data.type}</span>
          </h2>
          <div className="flex w-full font-semibold">
            <a
              href={props.data.company.link ? props.data.company.link : '#'}
              className="flex items-center gap-1 rounded-md hover:underline"
            >
              <BiBuildings />
              {props.data.company.name}
            </a>
          </div>
          <span className="flex items-center gap-1 font-semibold">
            <RiMapPinFill />
            {props.data.location}
          </span>
          <h3 className="mt-1 flex items-center gap-1">
            <BiCalendar />
            {`${format(props.data.start, 'MMM yyyy')} - ${props.data.end ? format(props.data.end, 'MMM yyyy') : 'Ongoing'}`}
          </h3>
        </div>
      </div>

      {props.data.technologies && (
        <div className="mt-3 flex flex-wrap gap-2">
          {props.data.technologies.map((value, index) => (
            <Pill
              key={index}
              text={value.name}
              icon={value.icon}
              className="bg-secondary-500 text-white"
            />
          ))}
        </div>
      )}

      {props.data.description && (
        <div className="mt-3">
          {Array.isArray(props.data.description) ? (
            <ul className="list-disc space-y-2 pl-5 font-light">
              {props.data.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="whitespace-pre-line font-light">
              {props.data.description}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

const ExperiencePage = () => {
  return (
    <Page title="Experience">
      <div className="p-5">
        <h1 className="mb-8 text-5xl font-bold">Experience</h1>
        <Timeline
          items={workExperience.map((value, index) => ({
            id: `${value.company.name}-${value.role}-${index}`,
            title: format(value.start, 'MMM yyyy'),
            content: <ExperienceCard data={value} />,
          }))}
        />
      </div>
    </Page>
  )
}

export default ExperiencePage
