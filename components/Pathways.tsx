import React from 'react'
import Image from 'next/image'

type Props = {}

function Pathways({ }: Props) {
  return (
    <div>
      <h2 className='mt-4 mb-4 text-6xl font-extrabold dark:text-white font-universHeading'><Image src={'/icons/intranet-icons_icon-quicklinks.png'} width={45} height={45} alt='quicklinks' /> I want to...</h2>
      <p className='mb-4'>Fast access to commonly used items</p>
      <div className="text-sm font-medium text-gray-900 border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <a
          href="/pages/110"
          aria-current="true"
          className="block w-full px-2 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I am hiring a new teammate...
        </a>
        <a
          href="/pages/73"
          className="block w-full px-2 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I want my clinic to participate in an event...
        </a>
        <a
          href="/departments/compliance"
          className="block w-full px-2 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I have a compliance question/concern...
        </a>
        <a
          href="/departments/human-resources"
          className="block w-full px-2 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I need help with one of my benefits...
        </a>
        <a
          href="/departments/workers-compensation"
          className="block w-full px-2 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I need help navigating Work Comp claims...
        </a>
        <a
          href="/departments/continuing-education"
          className="block w-full px-2 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I'm interested in advancing my career/professional development...
        </a>
        <a
          href="/departments/continuing-education"
          className="block w-full px-2 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          What options are available for CEUs?
        </a>
        <a
          href="/pages/72"
          className="block w-full px-2 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I would like to place an order with my clinic's branding on it...
        </a>
        <a
          href="/pages/114"
          className="block w-full px-2 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I am opening a new de novo clinic...
        </a>
        <a
          href="/departments/revenue-cycle"
          className="block w-full px-2 py-4 border-b border-gray-200 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I need to get in touch with someone for a patient's billing concerns...
        </a>
      </div>
    </div>
  )
}

export default Pathways