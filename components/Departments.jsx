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
              link='e7a11eef95444dee989323c29b4176b0'
              image='it' width={undefined} tab={undefined} />
            <DeptIcon
              name='Workers Compensation'
              link='6a914851f53845f2a8f9f36477988b6b'
              image='workerscomp' width={undefined} tab={undefined} />
            <DeptIcon
              name='Human Resources'
              link='f4f28e1f-4c45-453d-8fad-c175fffb049a'
              image='hr' width={undefined} tab={undefined} />
            <DeptIcon
              name='Continuing Education'
              link='6665d94f9e3b41b096b88737af9b7a6a'
              image='contued' width={undefined} tab={undefined} />
            <DeptIcon
              name='Compliance'
              link='69ff00c706b347fdbdc7550348af998b'
              image='compliance' width={undefined} tab={undefined} />
            <DeptIcon
              name='Revenue Cycle'
              link='50c77c6b40ef448ba564f9df89c3d8b5'
              image='accounting' width={undefined} tab={undefined} />
          </div>
          </div>
  )
}

export default Departments