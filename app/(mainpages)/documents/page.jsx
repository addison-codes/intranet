import React from 'react'
import Table from '@/components/Table'


export const dynamic = 'force-dynamic'


const connect = () => {
  return (
    <div className='container'>
      <Table deptId={'*'}/>
    </div>
  )
}

export default connect
