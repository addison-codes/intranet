import React from 'react'

function StaffReferralBonus() {
  return (
            <div className='max-w-sm p-6 mx-auto mb-8 bg-white border rounded-lg shadow border-aptpblue dark:bg-gray-800 dark:border-gray-700'>
              <a href='/pages/108'>
                <h5 className='mt-0 mb-2 text-4xl font-bold tracking-tight text-gray-900 font-universSubheading dark:text-white'>
                  Staff Referral Bonus
                </h5>
              </a>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                Refer your friends and get rewarded!
              </p>
              <a
                href='/pages/108'
                className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-aptpblue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-aptpblue dark:focus:ring-blue-800'
              >
                Read more
                <svg
                  className='w-3.5 h-3.5 ml-2'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </a>
            </div>
  )
}

export default StaffReferralBonus