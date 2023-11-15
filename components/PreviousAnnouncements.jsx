/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'

import useSWR from 'swr'

const PreviousAnnouncements = () => {
  const [selectedType, setSelectedType] = useState(null)

  const fetcher = (
    url,
    queryParams = selectedType
      ? `?type=${selectedType}&limit=100`
      : '?limit=100'
  ) => fetch(`${url}${queryParams}`).then((res) => res.json())
  const { data } = useSWR(`/api/announcements`, fetcher)

  return (
    <div className='col-span-1 mt-6'>
      <div className='relative w-full max-w-sm p-6 rounded-lg '>
        <h2 className='mb-12 text-5xl font-bold font-universHeading'>
          Previous News
        </h2>
        {/* Filter buttons */}
        <div className='mb-8'>
          <button
            className={`mr-4 px-4 py-2 rounded-md ${
              selectedType === null
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedType(null)}
          >
            All
          </button>
          <button
            className={`mr-4 px-4 py-2 rounded-md ${
              selectedType === 'ceo'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedType('ceo')}
          >
            CEO
          </button>
          <button
            className={`mr-4 px-4 py-2 rounded-md ${
              selectedType === 'newsletter'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedType('newsletter')}
          >
            Newsletter
          </button>
          {/* Add more buttons for other types if needed */}
        </div>
        <div className='flex flex-col gap-6 gap-x-20 sm:flex-wrap sm:max-h-120'>
          {data?.map(
            (announcement) =>
              (!selectedType || announcement.type === selectedType) && (
                <a
                  key={announcement.id}
                  href={`/announcements/${announcement.id}`}
                  className='transition-all hover:scale-110'
                >
                  <div className='flex gap-4 '>
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
              )
          )}
        </div>
      </div>
    </div>
  )
}

export default PreviousAnnouncements
