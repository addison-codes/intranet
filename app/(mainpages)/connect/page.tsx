import Image from 'next/image'
import React from 'react'

import Calendar from '@/components/Calendar'

export const dynamic = 'force-dynamic'


const connect = () => {
  return (
    <div className='container'>
      <h1 className='mb-4 text-6xl font-bold leading-none tracking-tight text-gray-900 font-universHeading md:text-5xl lg:text-6xl dark:text-white'>
        Stay Connected
      </h1>
      <Calendar />
      <div className='mt-6 border-2 rounded-md border-aptpblue'>
        <h1 className='px-6 pt-6 text-6xl font-bold leading-none tracking-tight text-gray-900 font-universHeading md:text-5xl lg:text-6xl dark:text-white'>
          APTQI Advocacy
        </h1>
        <div className='sm:flex'>
          <p className='p-6'>
            APTQI was established in 2014 to defend the profession against
            policy threats that restrict the provider community’s ability to
            provide quality care while also advancing payment policies to
            strengthen the delivery of physical therapy. Alliance PTP is a proud
            member alongside some of the nation’s largest national and regional
            community-based physical therapy provider companies.
            <br />
            <br />
            APTQI works collaboratively with other leading professional groups
            to advocate for transparency, collaboration and an approach that
            will position our profession as vital to the healthcare delivery
            system. APTQI is focused on increasing understanding of what we do
            by proactively advocating for therapists and the patients we serve.{' '}
            <a
              className='text-blue-800'
              href='https://www.aptqi.com/take-action/'
            >
              Take action on the latest here.
            </a>
          </p>
          <div className='flex justify-center mb-4 sm:items-start sm:w-full'>
            <Image
              src={'/APTQI_Logo.svg'}
              width={200}
              height={100}
              alt='APTQI Logo'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect
