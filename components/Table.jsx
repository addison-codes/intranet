'use client';

import React, { useEffect, useState } from 'react';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor(row => row.title, {
    id: 'title',
    // cell: info => <a href={`/pages/${info.}`}>{info.getValue()}</a>,
    cell: ({row}) => (
    <a className='font-bold text-aptpblue hover:text-black' href={`/pages/${row.original.id}`}>{row.original.title}</a>
    ),
    header: () => <span>Title</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('tags', {
    header: () => 'tags',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
]

function Table({deptId}) {
  const [data, setData] = useState([])

  const getTableData = async () => {
  const supabase = createClientComponentClient();
  if (deptId === '*') {
    const {data, error} = await supabase.from('pages').select().eq('document', true);
    setData(data)
  } else {
    const {data, error} = await supabase.from('pages').select().eq('document', true).eq('departments', deptId);
    setData(data)
  }
  }

  useEffect(() => {
    getTableData()
  }, [])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className="">
      <h1 className='mb-4 text-4xl font-bold font-universHeading'>Documents</h1>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className='px-6 py-3'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className='border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700'>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className='px-6 py-4'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className='h-4' />
      </div>
    </div>
  )
}

export default Table
