import Image from 'next/image'
import React from 'react'

import DeptIcon from './DeptIcon'

const APTQI = () => {
  return (
    <div className=''>
      {/* <div className='flex justify-around py-8 pt-16 rounded bg-aptpgrey'>
        <DeptIcon
          name='Report a Compliance Concern'
          link='https://alliancephysicaltherapypartners.tfaforms.net/331'
          image='complianceconcern'
          width='64'
          tab
        />
        <DeptIcon
          name='Patient Incident Report'
          link='https://alliancephysicaltherapypartners.tfaforms.net/354'
          image='patientincident'
          width='64'
          tab
        />
      </div> */}
      <div className='flex justify-around mt-6 mb-6'>
        <p className='italic'>
          Alliance Physical Therapy Partners is a proud member of the Alliance
          for Physical Therapy Quality and Innovation.{' '}

          <button
          type="button"
          className="text-white bg-aptpred border-b border-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ml-8 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800 center"
        >
          <a href='https://www.aptqi.com/take-action/' rel='nofollow' target='_blank'>Take action alongside us</a>
        </button>
        </p>
        <Image alt='APTQI' width={200} height={100} src={'/APTQI_Logo.svg'} />
      </div>
    </div>
  )
}

export default APTQI
