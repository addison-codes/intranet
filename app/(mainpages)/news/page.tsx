import React from 'react';
import Announcements from '@/components/Announcements'
import PreviousAnnouncements from '@/components/PreviousAnnouncements'

export const dynamic = 'force-dynamic'

const news = () => {
  return (
    <div className='col-span-4 mt-8 sm:pl-2'>
      <h2 className='pl-4 text-6xl font-bold sm:pl-0 font-universHeading'>Latest News</h2>
      <div className='flex'>
        <Announcements />
      </div>
      <hr className='w-full mt-8 border-gray-400 border-sm' />
      <PreviousAnnouncements />
    </div>
  )
}

export default news
