'use client'
import React from 'react'

const Button = ({children, href}) => {
  return (
    <div>
        <button
          type="button"
          className="text-white font-bold bg-aptpred border-b border-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800 center"
        >
          <a href={href}>{children}</a>
        </button>

    </div>
  )
}

export default Button