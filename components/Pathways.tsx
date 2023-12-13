import React from 'react'
import Image from 'next/image'

type Props = {}

function Pathways({}: Props) {
  return (
    <div>
      <h2 className='mt-4 mb-4 text-6xl font-extrabold dark:text-white font-universHeading'><Image src={'/icons/intranet-icons_icon-quicklinks.png'} width={45} height={45} alt='quicklinks' /> I want to...</h2>
      <p className='mb-4'>Fast access to commonly used items</p>
      <div className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <a
          href="/60cdc13f-0c5a-47c5-9100-041516b142df"
          aria-current="true"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I am hiring a new teammate...
        </a>
        <a
          href="/f121f8d8-5129-4a51-80df-f506560b7e97"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I want my clinic to participate in an event...
        </a>
        <a
          href="/54b728fc-2416-4383-a768-12e150eb4199"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I have a compliance question/concern...
        </a>
        <a
          href="/f4f28e1f-4c45-453d-8fad-c175fffb049a"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I need help with one of my benefits...
        </a>
        <a
          href="/6a914851-f538-45f2-a8f9-f36477988b6b"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I need help navigating Work Comp claims...
        </a>
        <a
          href="/6665d94f-9e3b-41b0-96b8-8737af9b7a6a"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I'm interested in advancing my career/professional development...
        </a>
        <a
          href="/6665d94f-9e3b-41b0-96b8-8737af9b7a6a"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          What options are available for CEUs?
        </a>
        <a
          href="/52908075-f794-49f7-95f0-6d98bbd1a027"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I would like to place an order with my clinic's branding on it...
        </a>
        <a
          href="/0b573797-a53c-4dab-9574-80bb59365521"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I am opening a new de novo clinic...
        </a>
        <a
          href="/e120d25b-1206-4978-9a0e-da37d6242dda"
          className="block w-full px-4 py-2 border-b border-gray-200 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          I need to get in touch with someone for a patient's billing concerns...
        </a>
      </div>
    </div>
  )
}

export default Pathways