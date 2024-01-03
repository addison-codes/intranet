'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react'

const SearchNew = () => {

  const [results, setResults] = React.useState([])

  const setSearch = async (e) => {
    console.log(e)
  // e.preventDefault()
  const supabase = createClientComponentClient()
  const { data } = await supabase.from('pages').select().textSearch('title_blocks', e)
  setResults(data)
  console.log('searchdata', data)
  }

  return (
  <div className="">
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 text-xl font-semibold text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-xl placeholder:font-semibold"
          placeholder="Search for what you need"
          required=""
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
        {/* <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-aptpblue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button> */}
      </div>
    </form>
    {results.length > 0 ? (
    <div className="absolute z-20 bg-gray-300 border rounded animate-in results">
      <ul className='pr-10'>
        {results.map((result) => {
          return (<li className='p-2 list-none animate-in hover:text-gray-700'><a href={`/pages/${result.id}`}>{result.title}</a></li>)
        })}
      </ul>
    </div>
    ) : ''}

  </div>
  )
}

export default SearchNew