/* eslint-disable react/no-unescaped-entities */
import React from 'react';


const Newsletter = (content) => {
  return (
    <div className='mb-6'>
      <h2 className='mb-6 text-6xl font-bold font-universHeading dark:text-white'>
        This Week's Aligning Our Alliance Newsletter
      </h2>
      <div dangerouslySetInnerHTML={{ __html: content.content }}></div>
    </div>
  )
}

export default Newsletter
