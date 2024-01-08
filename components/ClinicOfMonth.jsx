import React from 'react'

const ClinicOfMonth = () => {
  return (
            <a href={`/news`}>
          <h5 className='mb-4 text-4xl tracking-tight text-gray-900 drop-shadow-lg w-60 dark:text-white font-universSubheading'>
            <span className='ml-2'>Clinic of the Month</span>
            <Image src={'/clinic-of-the-month.png'} alt='Clinic of the Month' width={180} height={100} />
            <p>Huge congratulations to the Rehab Access - Gretna for being named the clinic of the month.  It's clear to see why they've got such rave reviews from patients - a whopping 4.9 out of 5 based on 353 reviews! Keep up the fantastic work, team Gretna. Here's to many more months of success!</p>
          </h5>
        </a>
  )
}

export default ClinicOfMonth