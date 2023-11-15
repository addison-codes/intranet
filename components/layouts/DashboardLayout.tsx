import { useRouter } from 'next/router'
import React from 'react';



import AnnouncementSection from '@/components/AnnouncementSection'
import Sidebar from '@/components/Sidebar'
import SocialFeed from '@/components/SocialFeed'

export const DashboardLayout: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const router = useRouter()


  if (router.pathname === '/') {
    return (
      <div className='container px-2 mx-auto sm:px-0'>
        {/* <div className="mx-auto mt-6">
          <Image src={'/homepage-banner.png'}  width={1200} height={300} alt={'Homepage banner'} />
        </div> */}
        <div className='container grid gap-8 pt-4 mx-auto md:grid-cols-4'>
          <AnnouncementSection />
          <div className='col-span-2 '>{children}</div>
          <Sidebar />
        </div>
      </div>
    )
  } else if (router.pathname === '/jobs') {
    return (
      <div className='container mx-auto'>
        <div className='container grid grid-cols-4 gap-6 pt-4 mx-auto'>
          <div className='col-span-4 sm:col-span-3'>{children}</div>
          <div className='w-full col-span-4 mx-auto sm:col-span-1'>
            <div className='max-w-sm p-6 mx-auto bg-white border rounded-lg shadow border-aptpblue dark:bg-gray-800 dark:border-gray-700'>
              <a href='/9118cb1ec3424cfc850d837bbe263684'>
                <h5 className='mb-2 text-4xl font-bold tracking-tight text-gray-900 font-universSubheading dark:text-white'>
                  Staff Referral Bonus
                </h5>
              </a>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                Refer your friends and get rewarded!
              </p>
              <a
                href='/9118cb1ec3424cfc850d837bbe263684'
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

            <Sidebar />
          </div>
        </div>
      </div>
    )
  } else if (router.pathname === '/connect') {
    return (
      <div className='container mx-auto'>
        <div className='container grid grid-cols-4 gap-6 pt-4 mx-auto'>
          <div className='col-span-4 sm:col-span-3'>{children}</div>
          <SocialFeed />
        </div>
      </div>
    )
  } else if (router.pathname === '/news') {
    return (
      <div className='container mx-auto'>
        <div className='container pt-4 mx-auto'>{children}</div>
      </div>
    )
  } else {
    return <div className='container mx-auto'>{children}</div>
  }
}
