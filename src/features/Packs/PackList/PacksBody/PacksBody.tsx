import * as React from 'react'

import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom'

import { PackType } from 'common/api/DataTypes'

type PropsType = {
  key: string
  pack: PackType
}
export const PacksBody: React.FC<PropsType> = ({ pack }) => {
  console.log(pack.name, pack.user_name)

  return (
    <TableRow>
      <TableCell scope={'row'} component="th" padding="none">
        <Link to={'id'}>{pack.name}</Link>
      </TableCell>
      <TableCell align="right">
        <img alt={'avatar'} src={'sadfsadf'} />
      </TableCell>
      <TableCell align="right">{'cards'}</TableCell>
      <TableCell align="right">{pack.updated}</TableCell>
      <TableCell align="right">{pack.user_name}</TableCell>
      <TableCell align="right">{'learn/edite,delete'}</TableCell>
    </TableRow>
  )
}
