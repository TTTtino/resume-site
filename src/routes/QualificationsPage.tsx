import Page from '@components/page'
import Timeline from '@components/timeline'
import { qualifications } from '@data/qualificationsPage'
import { format } from 'date-fns'
import { RiMapPinFill } from 'react-icons/ri'
import { BiBuildings, BiCalendar } from 'react-icons/bi'

const QualificationsPage = () => {
  return (
    <Page title="Qualifications">
      <div className="p-5">
        <h1 className="mb-8 text-5xl font-bold">Qualifications</h1>
        <Timeline
          items={qualifications.map((value, index) => ({
            id: `${value.name}-${index}`,
            title: format(value.date, 'MMM yyyy'),
            content: (
              <div className="w-full py-1">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border">
                    {value.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-extrabold">{value.name}</h3>
                    <div className="flex items-center gap-1 font-semibold">
                      <BiBuildings />
                      {value.institution}
                    </div>
                    <span className="flex items-center gap-1 font-semibold">
                      <RiMapPinFill />
                      {value.location}
                    </span>
                    <h5 className="mt-1 flex items-center gap-1">
                      <BiCalendar />
                      {format(value.date, 'MMM yyyy')}
                    </h5>
                  </div>
                </div>
                {value.grades && <div className="mt-3">{value.grades}</div>}
              </div>
            ),
          }))}
        />
      </div>
    </Page>
  )
}

export default QualificationsPage
