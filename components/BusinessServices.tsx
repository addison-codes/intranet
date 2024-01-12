import React from 'react'
import Image from 'next/image'

type Props = {}

function BusinessServices({ }: Props) {
  return (
    <div>
      <h2 className='mt-10 mb-4 text-4xl font-extrabold text-white font-universSubheading dark:text-white'><span className='ml-2'>Business Services</span></h2>
      <div className="text-sm font-medium text-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <a
          href="/pages/247"
          aria-current="true"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          Who We Are
        </a>
        {/* <a
          href="#"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          How We Work
        </a>
        <a
          href="#"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          Our Partners
        </a>
 */}
      </div>
    </div>
  )
}

export default BusinessServices