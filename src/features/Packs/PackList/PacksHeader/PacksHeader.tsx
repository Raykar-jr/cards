import React from 'react'

import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { useAppDispatch, useAppSelector } from 'app/store'
import { Sort } from 'common/components/Sort/Sort'
import s from 'features/Packs/PackList/PacksHeader/PacksHeader.module.scss'
import { setQueryParams } from 'features/Packs/packs-reducer'

export const PacksHeader = () => {
  const dispatch = useAppDispatch()
  const sort = useAppSelector(state => state.packs.queryParams.sortPacks)
  const handleSort = (newSort: string) => {
    dispatch(setQueryParams({ sortPacks: newSort }))
  }

  return (
    <TableHead>
      <TableRow className={`${s.head} ${s.wrap}`}>
        <TableCell>Name</TableCell>
        <TableCell align={'left'}>Cards</TableCell>
        <TableCell className={s.head_cursor} align={'center'}>
          Last Updated
          <Sort sort={sort} onChange={handleSort} value={'updated'} />
        </TableCell>
        <TableCell align={'left'}>Created by</TableCell>
        <TableCell align={'left'}>Actions</TableCell>
      </TableRow>
    </TableHead>
  )
}
