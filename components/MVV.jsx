import React from 'react'

const MVV = () => {
  return (
    <div className='flex flex-wrap'>
      <div className="bg-aptpgreen">
        <div className="flex flex-col justify-center p-4">
          <h5 className='my-1 text-4xl text-white drop-shadow-lg w-60 dark:text-white font-universSubheading'>
            <span className=''>Mission</span>
          </h5>
          <p className='italic text-white'>
            To enhance the lives of our patients and partners with care and compassion.
          </p>
        </div>
      </div>
      <div className="bg-aptppurple">
        <div className="flex flex-col justify-center p-4">
          <h5 className='my-1 text-4xl text-white drop-shadow-lg w-60 dark:text-white font-universSubheading'>
            <span className=''>Vision</span>
          </h5>
          <p className='italic text-white'>
            Deliver world-class patient care to the communities we serve.
          </p>
        </div>
      </div>
      <div className="bg-aptpred">
        <div className="flex flex-col justify-center p-4">
          <h5 className='my-1 text-4xl text-white drop-shadow-lg w-60 dark:text-white font-universSubheading'>
            <span className=''>Values</span>
          </h5>
          <p className='italic text-white'>
            Put PEOPLE FIRST
            Lead with INTEGRITY
            Treat with COMPASSION
            Build lasting RELATIONSHIPS
          </p>
        </div>
      </div>
    </div>
  )
}

export default MVV