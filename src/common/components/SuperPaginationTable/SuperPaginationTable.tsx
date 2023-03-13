import * as React from 'react'
import { FC } from 'react'

import Pagination from '@mui/material/Pagination'

import s from './SuperPagination.module.css'

export type SuperPaginationTableType = {
  id?: string
  page: number
  itemsCount: number
  totalCount: number
  onChange: (page: number, count: number) => void
}
export const SuperPaginationTable: FC<SuperPaginationTableType> = ({
  id,
  page,
  itemsCount,
  totalCount,
  onChange,
}) => {
  const onChangeHandler = (e: any, page: number) => {
    onChange(page, e.currentTarget.value)
  }

  const lastCount = Math.ceil(totalCount / itemsCount)

  return (
    <div className={s.pagination}>
      <Pagination count={lastCount} shape="rounded" page={page} onChange={onChangeHandler} id={id} />
      <span className={s.show}>show</span>
      <span className={s.show}>Cards per Page</span>
    </div>
  )
}
