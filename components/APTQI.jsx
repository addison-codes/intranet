import Image from 'next/image'
import React from 'react'

import DeptIcon from './DeptIcon'

const APTQI = () => {
  return (
    <div className=''>
      <div className='flex justify-around py-8 pt-16 bg-gray-200 rounded'>
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
      </div>
      <div className='flex justify-around mt-6'>
        <p className='italic'>
          Alliance Physical Therapy Partners is a proud member of the Alliance
          for Physical Therapy Quality and Innovation.{' '}
          <a
            className='transition-all bg-blue-200 hover:bg-white hover:text-blue-200'
            href='https://www.aptqi.com/take-action/'
          >
            Take action alongside us.
          </a>
        </p>
        <Image alt='APTQI' width={100} height={50} src={'/APTQI_Logo.svg'} />
      </div>
    </div>
  )
}

export default APTQI
