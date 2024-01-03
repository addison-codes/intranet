import React from 'react'

const Bug = () => {
  return (
    <div className="flex flex-wrap justify-center mx-auto mt-20">
      <div className="flex flex-col content-center mt-4">
        <button
          type="button"
          className="text-white font-bold bg-aptpred border-b border-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800 center"
        >
          <a href='/pages/109'>Expense Report</a>
        </button>
        <button
          type="button"
          className="text-white bg-aptpred border-b border-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800 center"
        >
          <a href='/documents'>Documents</a>
        </button>
        {/* <button
          type="button"
          className="text-white bg-aptpred border-b border-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800 center"
        >
          <a href='/new-page'>New Page</a>
        </button> */}
        <button
          type="button"
          className="text-white bg-aptpred border-b border-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-aptpblue focus:outline-none dark:focus:ring-blue-800 center"
        >
          <a href='/comment'>Submit a suggestion or bug</a>
        </button>
      </div>

        </div>
  )
}

export default Bug