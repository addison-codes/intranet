import React from 'react'
import Image from 'next/image'

type Props = {}

function Policies({}: Props) {
  return (
    <div>
      <h2 className='mt-10 mb-4 text-6xl font-extrabold text-white font-universSubheading dark:text-white'><Image src={'/icons/intranet-icons_icon-policies.png'} width={45} height={45} alt='quicklinks' /><span className='ml-2'>Policies</span></h2>
      <div className="text-sm font-medium text-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <a
          href="/0bfdf96d-8df8-4757-a866-d0fe072d3a17"
          aria-current="true"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          Inclement Weather Guidelines
        </a>
        <a
          href="/8908a50b-83cd-488e-a931-c67f2fdb80c5"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          Employee Handbook
        </a>
        <a
          href="/8908a50b-83cd-488e-a931-c67f2fdb80c5#689a915e5ff84d9cab0865fadcb11d3b"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          Attendance Policy
        </a>
        <a
          href="/5e21547a-b5bc-40ae-b02a-0122023d0265"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          Requesting PTO
        </a>
        <a
          href="/c57ff274-2016-407c-bfca-3d1d58e219a1"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          2023 Holiday Schedule
        </a>
        <a
          href="/575ded7d-9543-4669-987d-9d713a053d36"
          className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          Social Media Policy
        </a>
        <a
          href="/9118cb1e-c342-4cfc-850d-837bbe263684"
          className="block w-full px-4 py-2 border-b border-gray-200 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          Referral Bonus Policy
        </a>

      </div>
      <div className="flex content-center mt-4">
        <button
          type="button"
          className="text-white font-bold bg-aptpred border-b border-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800 center"
        >
          <a href='/ff6ad39844fc42c0a0bd6500aa96ad77'>Expense Report</a>
        </button>
        <button
          type="button"
          className="text-white bg-aptpred border-b border-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800 center"
        >
          <a href='/ed7859e2-8e75-471b-a096-8f6b1643a696'>Documents</a>
        </button>
        <button
          type="button"
          className="text-white bg-aptpred border-b border-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800 center"
        >
          <a href='/new-page'>New Page</a>
        </button>
      </div>
    </div>
  )
}

export default Policies