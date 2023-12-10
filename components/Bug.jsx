import React from 'react'

const Bug = () => {
  return (
    <div className="flex flex-wrap justify-center mx-auto">
        {/* <h5 className='mt-6 mb-4 text-3xl font-bold tracking-tight text-center text-gray-900 w-60 dark:text-white font-universSubheading'>
            Have a comment or suggestion about the intranet?
          </h5> */}
        <button
          type="button"
          className="w-full h-12 mx-auto text-sm font-medium text-white border-b border-gray-200 rounded-lg bg-aptpgrey hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800 center"
        >
          <a href='/comment'>Submit a suggestion or bug</a>
        </button>
        </div>
  )
}

export default Bug