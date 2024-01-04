'use client';

import React, { useEffect, useState, useReducer, useMemo } from 'react';
import { createColumnHelper, ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  ColumnFiltersState,
  PaginationState,
  getPaginationRowModel,
  enableMultiRowSelection,
  onChangeFn,
  getFilteredRowModel,
  getPreFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  FilterFn,
  FilterFns,
 } from '@tanstack/react-table';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import DebouncedInput from './DebouncedInput';

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
  // columnHelper.accessor('departments', {
  //   header: () => 'Department',
  //   cell: info => info.renderValue(),
  //   footer: info => info.column.id,
  // }),
]

const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank,
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

const fuzzySort = (rowA, rowB, columnId) => {
  let dir = 0

  // Only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId]?.itemRank,
      rowB.columnFiltersMeta[columnId]?.itemRank
    )
  }

  // Provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
}

function Table({range, deptId, printable}) {
  const [data, setData] = useState([])
    const [sorting, setSorting] = useState([])
  const [queryParams, setQueryParams] = useState('')
  const [rowSelection, setRowSelection] = useState({})

  const [columnFilters, setColumnFilters] = useState(
    []
  )

    const rerender = useReducer(() => ({}), {})[1]


    useEffect(() => {
    if (range == 'global') {
      setQueryParams('')
    }
  }, [range])

  const getTableData = async () => {
  const supabase = createClientComponentClient();
  if (deptId === '*') {
    const {data, error} = await supabase.from('pages').select(`
    title, id, tags, departments!pages_departments_fkey ( id, department_name )`).eq('document', true);
    setData(data)
  } else if (printable) {
    const {data, error} = await supabase.from('pages').select().eq('printable', printable);
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
        filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      sorting,
      rowSelection,
      columnFilters
    },
    onColumnFiltersChange: setColumnFilters,
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),

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
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="px-6 py-3"
                  >
                    {header.isPlaceholder ? null : (
                      <>
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                      <div>
                      {header.column.getCanFilter() ? (
                            <DefaultFilter column={header.column} table={table} />
                        ) : null}
                          </div>
                          </>
                    )}
                  </th>
                )
              })}
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

const DefaultFilter = ({ column, table}) => {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  const sortedUniqueValues = useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues(), column, firstValue]
  )



  return typeof firstValue === 'number' ? (
    <div>
      <div className="flex space-x-2">
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={(columnFilterValue)?.[0] ?? ''}
          onChange={value =>
            column.setFilterValue((old) => [value, old?.[1]])
          }
          placeholder={`Min ${
            column.getFacetedMinMaxValues()?.[0]
              ? `(${column.getFacetedMinMaxValues()?.[0]})`
              : ''
          }`}
          className="w-24 border rounded shadow"
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={(columnFilterValue)?.[1] ?? ''}
          onChange={value =>
            column.setFilterValue((old) => [old?.[0], value])
          }
          placeholder={`Max ${
            column.getFacetedMinMaxValues()?.[1]
              ? `(${column.getFacetedMinMaxValues()?.[1]})`
              : ''
          }`}
          className="w-24 border rounded shadow"
        />
      </div>
      <div className="h-1" />
    </div>
  )  : (
    <>
      <datalist id={column.id + 'list'}>
        {sortedUniqueValues.slice(0, 5000).map((value) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? '')}
        onChange={value => column.setFilterValue(value)}
        placeholder={`Search...`}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        list={column.id + 'list'}
      />
      <div className="h-1" />
    </>
  )
}


export default Table
