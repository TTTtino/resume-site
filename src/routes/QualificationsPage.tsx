import Page from '@components/page'
import { qualifications, Qualification } from '@data/qualificationsPage'
import { format } from 'date-fns'
import { Chrono } from 'react-chrono'
import { RiMapPinFill } from 'react-icons/ri'
import { BiBuildings, BiCalendar } from 'react-icons/bi'
import { ChronoTheme } from '@data/generic'

const QualificationCard = (props: { data: Qualification; index?: number }) => {
  return (
    <div className="w-full py-2" key={props?.index}>
      <div className="flex flex-col sm:flex-row sm:items-center">
        <div className="relative w-10 h-10 mb-1 border rounded-full sm:mb-0 sm:mr-2 sm:h-12 sm:w-12">
          {props.data.icon}
        </div>
        <div>
          <h3 className="text-xl font-extrabold">{props.data.name}</h3>
          <div className="flex items-center gap-1 font-semibold">
            <BiBuildings />
            {props.data.institution}
          </div>
          <span className="flex items-center gap-1 font-semibold">
            <RiMapPinFill />
            {props.data.location}
          </span>
        </div>
      </div>
      <h5 className="flex items-center gap-1 lg:ml-2">
        <BiCalendar />
        {format(props.data.date, 'MMM yyyy')}
      </h5>

      {props.data.grades && <div className="mt-2">{props.data.grades}</div>}
    </div>
  )
}

const QualificationsPage = () => {
  return (
    <Page title="Qualifications">
      <h1 className="pt-5 pl-5 text-5xl font-bold ">Qualifications</h1>
      <div className="">
        <Chrono
          mode="vertical"
          theme={ChronoTheme}
          items={qualifications.map((value) => ({
            title: format(value.date, 'MMM yyyy'),
          }))}
          interaction={{ pointClick: false }}
          layout={{ cardHeight: 'auto' }}
          display={{ toolbar: { enabled: false } }}
        >
          {qualifications.map((value, index) => {
            return <QualificationCard key={index} data={value} index={index} />
          })}
        </Chrono>
      </div>
    </Page>
  )
}

export default QualificationsPage
