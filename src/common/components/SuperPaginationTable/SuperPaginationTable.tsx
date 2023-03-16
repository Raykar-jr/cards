import * as React from 'react'
import { FC } from 'react'

import Pagination from '@mui/material/Pagination'

import s from 'common/components/SuperPaginationTable/SuperPaginationTable.module.scss'
import { SuperSelectTable } from 'common/components/SuperSelectTable/SuperSelectTable'

export type SuperPaginationTableType = {
  id?: string
  page: number
  itemsCount: number
  totalCount: number
  onChange: (page: number, count: number) => void
}
export const SuperPaginationTable: FC<SuperPaginationTableType> = ({ id, page, itemsCount, totalCount, onChange }) => {
  const lastCount = Math.ceil(totalCount / itemsCount)
  const onChangeHandler = (e: any, page: number) => {
    onChange(page, itemsCount)
  }
  const onChangeSelectHandler = (e: any) => {
    onChange(page, +e.currentTarget.value)
  }

  return (
    <div className={s.pagination}>
      <Pagination
        color="primary"
        sx={{ mr: '20px' }}
        count={lastCount}
        shape="rounded"
        page={page}
        onChange={onChangeHandler}
        id={id}
      />
      <span className={s.show}>Show </span>
      <SuperSelectTable
        id={id}
        value={itemsCount}
        options={[
          { id: 5, value: 5 },
          { id: 10, value: 10 },
          { id: 15, value: 15 },
        ]}
        onChange={onChangeSelectHandler}
      />
      <span className={s.show}>Cards per Page</span>
    </div>
  )
}
