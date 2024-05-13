import React from 'react'

const quotes_url = 'https://zenquotes.io/api/today'

async function getquote() {
  const response = await fetch(quotes_url)
  const data = await response.json()
  return data
}

const data = await getquote()

const DailyQuote = () => {
  return (
    <div className='mb-8 ml-2'>
      <h5 className='mb-4 text-4xl tracking-tight text-gray-900 drop-shadow-lg w-60 dark:text-white font-universSubheading'>
        <span className=''>Daily Quote</span>
      </h5>
      <p className='italic'>
        {data[0].q}
      </p>
        <p className="font-bold">
          - {data[0].a}
        </p>
    </div>
  )
}

export default DailyQuote