/* eslint-disable react/no-unescaped-entities */
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import React from 'react';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';



const AnnouncementSection = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from('announcements').select('*');

  return (
    <div className='col-span-2 sm:col-span-1'>
      <div className='relative w-full p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-gray-50'>
        <a className='flex justify-around' href={`/news`}>
          <h5 className='mt-0 mb-4 text-4xl tracking-tight text-gray-900 drop-shadow-lg w-60 dark:text-white font-universSubheading'>
            <Image
              src={'/icons/intranet-icons_icon-announcements.png'}
              width={35}
              height={35}
              alt='announcements'
            />
            <span className='ml-2 text-center'>News & Events</span>
          </h5>
        </a>
        <div className='flex flex-col gap-6'>
          {data?.map((announcement) => (
            <a
              key={announcement.id}
              href={`/announcements/${announcement.id}`}
              className='transition-all hover:scale-110'
            >
              <div className='flex gap-4'>
                <div
                  className='flex items-center justify-center w-20 h-20 font-mono font-bold text-gray-700 bg-cover rounded-md shrink-0'
                  style={{
                    backgroundImage: announcement.image
                      ? `url(${announcement.image})`
                      : announcement.type === 'ceo'
                        ? `url('/favicon.png')`
                        : announcement.type === 'newsletter'
                          ? `url('/icons/intranet-icons_icon-newsletter.png')`
                          : `url('/icons/intranet-icons_icon-announcements.png')`
                  }}
                ></div>
                <div className='flex flex-col gap-2 grow-0'>
                  <span className='text-gray-400'>
                    {announcement?.date?.split(' ')[0]}
                  </span>
                  <p className='font-bold text-gray-600'>
                    {announcement.title}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        {/* <a
          href={`/news`}
          className='bottom-[20px] mt-4 left-0 right-0 inline-flex items-center justify-center w-48 mx-auto px-3 py-2 text-sm font-medium text-center text-white bg-aptpblue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-aptpblue dark:focus:ring-blue-800 font'
        >
          View All
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
        </a> */}
      </div>
    </div>
  );
};

export default AnnouncementSection;
