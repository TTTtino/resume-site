import Page from '@components/page'
import Timeline from '@components/timeline'
import { qualifications } from '@data/qualificationsPage'
import { format } from 'date-fns'
import { RiMapPinFill } from 'react-icons/ri'
import { BiBuildings, BiCalendar } from 'react-icons/bi'

const QualificationsPage = () => {
  return (
    <Page title="Qualifications">
      <div className="py-2">
        <p className="section-kicker">Education</p>
        <h1 className="page-title mb-10">Qualifications</h1>
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
      </div>
    </Page>
  )
}

export default QualificationsPage
