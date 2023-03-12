import * as React from 'react'

import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom'

export const PacksBody = () => {
  return (
    <TableRow>
      <TableCell scope={'row'} component="th" padding="none">
        <Link to={'id'}>{'Name'}</Link>
      </TableCell>
      <TableCell align="right">
        <img alt={'avatar'} src={'sadfsadf'} />
      </TableCell>
      <TableCell align="right">{'cards'}</TableCell>
      <TableCell align="right">{'date'}</TableCell>
      <TableCell align="right">{'user_name'}</TableCell>
      <TableCell align="right">{'learn/edite,delete'}</TableCell>
    </TableRow>
  )
}
