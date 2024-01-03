import React from 'react'
import Image from 'next/image'

type Props = {}

function Links({ }: Props) {
  return (
    <div className='mt-8'>
      <h2 className='mt-4 mb-4 text-6xl font-extrabold dark:text-white font-universHeading'><Image src={'/icons/intranet-icons_icon-quicklinks.png'} width={45} height={45} alt='quicklinks' /> Quick Links</h2>
      <div className="text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <a
          href="https://agilepm.myagilityapps.com/Account/LogIn?ReturnUrl=%2f"
          className="block w-full px-1 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"  target='_blank' rel='noopener'
        >
          Agile EMR
        </a>
        <a
          href="https://outlook.office.com/mail/inbox"
          className="block w-full px-1 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" target='_blank' rel='noopener'
        >
          Email
        </a>
        <a
          href="https://hcm.paycor.com/authentication/signin?ReturnUrl=https%3A%2F%2Fhcm.paycor.com%2Fportal%2F"
          aria-current="true"
          className="block w-full px-1 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" target='_blank' rel='noopener'
        >
          Paycor
        </a>
        <a
          href="mailto:helpdesk@allianceptp.com"
          className="block w-full px-1 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" target='_blank' rel='noopener'
        >
          IT Helpdesk
        </a>
        <a
          href="https://www.waystar.com/login/"
          className="block w-full px-1 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" target='_blank' rel='noopener'
        >
          Waystar
        </a>
        <a
          href="https://www.medbridgeeducation.com/sign-in"
          className="block w-full px-1 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-aptpblue focus:outline-none focus:ring-2 focus:ring-aptpblue focus:text-aptpblue dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" target='_blank' rel='noopener'
        >
          Medbridge
        </a>
      </div>
    </div>
  )
}

export default Links