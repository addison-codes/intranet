import React from 'react'

function AnnouncementFilter() {
    const [selectedType, setSelectedType] = useState(null)

  return (
        <div className='mb-8'>
          <button
            className={`mr-4 px-4 py-2 rounded-md ${
              selectedType === null
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedType(null)}
          >
            All
          </button>
          <button
            className={`mr-4 px-4 py-2 rounded-md ${
              selectedType === 'ceo'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedType('ceo')}
          >
            CEO
          </button>
          <button
            className={`mr-4 px-4 py-2 rounded-md ${
              selectedType === 'newsletter'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedType('newsletter')}
          >
            Newsletter
          </button>
          {/* Add more buttons for other types if needed */}
        </div>
  )
}

export default AnnouncementFilter