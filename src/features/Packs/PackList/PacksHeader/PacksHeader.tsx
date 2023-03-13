import * as React from 'react'

import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import arrow_down from 'assets/icons/arrow_down.svg'
import s from 'features/Packs/PackList/PacksHeader/PacksHeader.module.scss'

export const PacksHeader = () => {
  return (
    <TableHead>
      <TableRow className={s.head}>
        <TableCell>Name</TableCell>
        <TableCell align={'right'}>Cards</TableCell>
        <TableCell className={s.head_cursor}>
          Last Updated
          <img src={arrow_down} alt={'sort'} />
        </TableCell>
        <TableCell>Created by</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  )
}
