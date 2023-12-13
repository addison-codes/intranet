import React from 'react';



import Announcements from '@/components/Announcements'
import PreviousAnnouncements from '@/components/PreviousAnnouncements'

const news = () => {
  return (
    <div className='col-span-4 sm:pl-2'>
      <h2 className='pl-4 text-5xl font-bold sm:pl-0 font-universHeading'>Company News</h2>
      <div className='flex'>
        <Announcements />
      </div>
      <hr className='w-full mt-8 border-gray-400 border-sm' />
      <PreviousAnnouncements />
    </div>
  )
}

export default news
