import React from 'react'
import Button from '@/components/Button'


const page = () => {
  return (
    <div className='container flex flex-row w-full mt-8 text-center'>
      <div className='mx-auto '>
      <Button href={'/pages/255'}>Patient Incident Report</Button>
      <Button href={'/pages/256'}>Employee Incident Report</Button>
      </div>
    </div>
  )
}

export default page