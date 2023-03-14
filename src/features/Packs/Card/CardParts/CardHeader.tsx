import React from 'react'

import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import arrow_down from 'assets/icons/arrow_down.svg'
import s from 'features/Packs/Card/Card.module.scss'

export const CardHeader = () => {
  return (
    <TableHead>
      <TableRow className={`${s.head} ${s.wrap}`}>
        <TableCell align="left">Question</TableCell>
        <TableCell align="left">Answer</TableCell>
        <TableCell className={s.head_cursor} align={'center'}>
          Last Updated
          <img src={arrow_down} alt={'sort'} />
        </TableCell>
        <TableCell align={'left'}>Grade</TableCell>
        <TableCell align={'left'}>Actions</TableCell>
      </TableRow>
    </TableHead>
  )
}
