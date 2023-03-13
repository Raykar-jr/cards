import * as React from 'react'

import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom'

import { useAppDispatch } from 'app/store'
import { PackType } from 'common/api/DataTypes'
import { deletePackTC, updatePackTC } from 'features/Packs/packs-reducer'

type PropsType = {
  key: string
  pack: PackType
}
export const PacksBody: React.FC<PropsType> = ({ pack }) => {
  const dispatch = useAppDispatch()
  const updatePackHandler = () => {
    dispatch(updatePackTC({ params: {}, data: { cardsPack: { _id: pack._id, name: 'UPDATE PACK!!!' } } }))
  }
  const deletePackHandler = () => {
    dispatch(deletePackTC({ params: {}, packId: pack._id }))
  }

  return (
    <TableRow>
      <TableCell scope={'row'} component="th" padding="none">
        <Link to={'id'}>{pack.name}</Link>
      </TableCell>
      {/*<TableCell align="right">*/}
      {/*  <img alt={'avatar'} src={'sadfsadf'} />*/}
      {/*</TableCell>*/}
      <TableCell align="right">{'cards'}</TableCell>
      <TableCell align="right">{pack.updated}</TableCell>
      <TableCell align="right">{pack.user_name}</TableCell>
      <TableCell align="right">
        {'learn/edite,delete'}
        <button onClick={updatePackHandler}>Update Pack</button> <br />
        <button onClick={deletePackHandler}>Delete Pack</button>
      </TableCell>
      <TableCell align="right">{'date'}</TableCell>
      <TableCell align="right">{'user_name'}</TableCell>
      <TableCell align="right">{'learn/edite/delete'}</TableCell>
    </TableRow>
  )
}
