import React from 'react'

import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { useAppDispatch, useAppSelector } from 'app/store'
import { Sort } from 'common/components/Sort/Sort'
import { setSort } from 'features/Packs/Card/card-reducer'
import s from 'features/Packs/Card/Card.module.scss'
import { selectCardSort } from 'features/Packs/Card/CardSelectors'

type PropsType = {
  isMyPack: boolean
}
export const CardHeader: React.FC<PropsType> = ({ isMyPack }) => {
  const dispatch = useAppDispatch()

  const sort = useAppSelector(selectCardSort)
  const handleSort = (newSort: string) => dispatch(setSort(newSort))

  return (
    <TableHead>
      <TableRow className={`${s.head} ${s.wrap}`}>
        <TableCell align="left">Question</TableCell>
        <TableCell align="left">Answer</TableCell>
        <TableCell className={s.head_cursor} align={'center'}>
          Last Updated
          <Sort sort={sort} onChange={handleSort} value={'updated'} />
        </TableCell>
        <TableCell align={'left'}>Grade</TableCell>
        {isMyPack && <TableCell align={'left'}>Actions</TableCell>}
      </TableRow>
    </TableHead>
  )
}
