import Image from 'next/image';
import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';






const Announcements = async () => {


  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.from('announcements').select('*')

  const newsletter = data?.find((e) => {
    return e.type === 'newsletter'
  })
  const ceo = data?.find((e) => {
    return e.type === 'ceo'
  })
  const latest = data?.find((e) => {
    return e.type === 'announcement'
  })

  return (
    <div className='mt-4'>
      {/* {session?.user?.name ===
      ('Addison Wanlass' ||
        'Samantha Lewakowski' ||
        'Richard Leaver' ||
        'Anthony Placek' ||
        'Linda Kerrick' ||
        'Tiffany Warden' ||
        'Jami Farkas' ||
        'Benjamin Fedewa' ||
        'Terry Tyler' ||
        'Gretchen Walsh' || 'Catie Butler' || 'Cameron Smith') ? (
        <button
          type='button'
          className='text-white ml-4 sm:ml-0 bg-aptpblue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800'
        >
          <a href='/new-announcement'>New Announcement</a>
        </button>
      ) : (
        ''
      )} */}
      <div className='container flex flex-wrap gap-8 md:flex-nowrap'>
        <div className='relative w-full max-w-sm transition-all bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105'>
          <a href={`/announcements/${newsletter?.id}`}>
            <Image
              src={'/aoa.png'}
              alt='Aligning Our Alliance'
              width={400}
              height={200}
            />
            <div className='p-6'>
              <p className='pb-2 text-sm text-gray-400'>{newsletter?.date?.split(' ')[0]}</p>
              <h5 className='mb-4 text-2xl font-bold tracking-tight font-universSubheading drop-shadow-sm w-60 dark:text-white'>
                {newsletter?.title}
              </h5>

              <p className='mb-12 font-normal text-gray-700 dark:text-gray-400'>
                {newsletter?.excerpt ?? 'Check out the latest newsletter!'}
              </p>
              <p className='absolute bottom-[20px] mt-4 left-0 right-0 inline-flex items-center justify-center w-48 mx-auto px-3 py-2 text-sm font-medium text-center text-white bg-aptpblue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-aptpblue dark:focus:ring-blue-800'>
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
              </p>
            </div>
          </a>
        </div>
        <div className='relative w-full max-w-sm transition-all bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105'>
          <a href={`/announcements/${ceo?.id}`}>
            <Image
              src={'/ceo-desk.png'}
              alt='From the CEOs Desk'
              width={400}
              height={200}
            />
            <div className='p-6'>
              <p className='pb-2 text-sm text-gray-400'>{ceo?.date?.split(' ')[0]}</p>
              <h5 className='mb-4 text-2xl font-bold tracking-tight font-universSubheading drop-shadow-sm w-60 dark:text-white'>
                {ceo?.title}
              </h5>

              <p className='mb-12 font-normal text-gray-700 dark:text-gray-400'>
                {ceo?.excerpt ?? 'Check out the latest CEO communication!'}
              </p>
              <p className='absolute bottom-[20px] mt-4 left-0 right-0 inline-flex items-center justify-center w-48 mx-auto px-3 py-2 text-sm font-medium text-center text-white bg-aptpblue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-aptpblue dark:focus:ring-blue-800'>
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
              </p>
            </div>
          </a>
        </div>
        <div className='relative w-full max-w-sm transition-all bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105'>
          <a href={`/announcements/${latest?.id}`}>
            <Image
              src={latest?.image ? latest?.image : '/generic-announcement.png'}
              alt='Latest Announcement'
              width={400}
              height={200}
              objectFit='cover'
            />
            <div className='p-6'>
              <p className='pb-2 text-sm text-gray-400'>{latest?.date?.split(' ')[0]}</p>
              <h5 className='mb-4 text-2xl font-bold tracking-tight font-universSubheading drop-shadow-sm w-60 dark:text-white'>
                {latest?.title}
              </h5>

              <p className='mb-12 font-normal text-gray-700 dark:text-gray-400'>
                {latest?.excerpt ?? 'Check out the latest announcement!'}
              </p>
              <p className='absolute bottom-[20px] mt-4 left-0 right-0 inline-flex items-center justify-center w-48 mx-auto px-3 py-2 text-sm font-medium text-center text-white bg-aptpblue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-aptpblue dark:focus:ring-blue-800'>
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
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Announcements
