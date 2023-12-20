import React from 'react'
import DeptIcon from './DeptIcon'

const Departments = () => {
  return (
    <div>
          <h3 className='mt-6 mb-6 text-6xl font-bold text-center text-white font-universSubheading'>
            Departments
          </h3>
          <div className='flex flex-wrap items-stretch sm:gap-4 place-content-between'>
            <DeptIcon
              name='Front Office Operations'
              link='/departments/front-office-operations'
              image='frontofficeops' width={undefined} tab={undefined} />
            <DeptIcon
              name='Marketing'
              link='/departments/marketing'
              image='mktg' width={undefined} tab={undefined} />
            <DeptIcon
              name='Clinical Operations'
              link='/departments/clinical-operations'
              image='clinicalops' width={undefined} tab={undefined} />
            <DeptIcon
              name='Information Technology'
              link='/departments/information-technology'
              image='it' width={undefined} tab={undefined} />
            <DeptIcon
              name='Workers Compensation'
              link='/departments/workers-compensation'
              image='workerscomp' width={undefined} tab={undefined} />
            <DeptIcon
              name='Human Resources'
              link='/departments/human-resources'
              image='hr' width={undefined} tab={undefined} />
            <DeptIcon
              name='Continuing Education'
              link='/departments/continuing-education'
              image='contued' width={undefined} tab={undefined} />
            <DeptIcon
              name='Compliance'
              link='/departments/compliance'
              image='compliance' width={undefined} tab={undefined} />
            <DeptIcon
              name='Revenue Cycle'
              link='/departments/revenue-cycle'
              image='accounting' width={undefined} tab={undefined} />
          </div>
          </div>
  )
}

export default Departments