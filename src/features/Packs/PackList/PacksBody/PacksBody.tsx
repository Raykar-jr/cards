import * as React from 'react'

import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link, useNavigate } from 'react-router-dom'

import learn from 'assets/icons/teacher.svg'
import { PackType } from 'common/api/DataTypes'
import { makeStringDate } from 'common/utils/makeStringDate'
import { DeletePackModal } from 'features/Modal/PackModal/DeletePackModal'
import { EditPackModal } from 'features/Modal/PackModal/EditPackModal'

type PropsType = {
  // key: string
  pack: PackType
}
export const PacksBody: React.FC<PropsType> = ({ pack }) => {
  const stringDate = makeStringDate(pack.updated)
  const navigate = useNavigate()
  const redirectToLearnHandler = () => {
    navigate('/learn/' + pack._id)
  }

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
        <IconButton onClick={redirectToLearnHandler} size="small">
          <img src={learn} alt="learn icon" />
        </IconButton>
        <EditPackModal nameProp={pack.name} privateProp={pack.private} packId={pack._id} />
        <DeletePackModal packId={pack._id} packName={pack.name} />
      </TableCell>
    </TableRow>
  )
}
