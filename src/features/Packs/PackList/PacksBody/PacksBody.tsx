import * as React from 'react'

import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom'

import { useAppDispatch } from 'app/store'
import edit from 'assets/icons/edit-2.svg'
import learn from 'assets/icons/teacher.svg'
import trash from 'assets/icons/trash.svg'
import { PackType } from 'common/api/DataTypes'
import { makeStringDate } from 'common/utils/makeStringDate'
import { deletePackTC, updatePackTC } from 'features/Packs/packs-reducer'

type PropsType = {
  // key: string
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
  const stringDate = makeStringDate(pack.updated)

  return (
    <TableRow>
      <TableCell scope={'row'} component="th" padding="none">
        <Link to={pack._id}>{pack.name}</Link>
      </TableCell>
      {/*<TableCell align="right">*/}
      {/*  <img alt={'avatar'} src={'sadfsadf'} />*/}
      {/*</TableCell>*/}
      <TableCell align="right">{pack.cardsCount}</TableCell>
      <TableCell align="right">{stringDate}</TableCell>
      <TableCell align="right">{pack.user_name}</TableCell>
      <TableCell align="right">
        {/*{'learn/edite,delete'}*/}
        {/*<button onClick={updatePackHandler}>Update Pack</button> <br />*/}
        {/*<button onClick={deletePackHandler}>Delete Pack</button>*/}
        <IconButton onClick={() => {}} size="small">
          <img src={learn} alt="learn icon" />
        </IconButton>
        <IconButton onClick={updatePackHandler} size="small">
          <img src={edit} alt="edit icon" />
        </IconButton>
        <IconButton onClick={deletePackHandler} size="small">
          <img src={trash} alt="delete icon" />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
