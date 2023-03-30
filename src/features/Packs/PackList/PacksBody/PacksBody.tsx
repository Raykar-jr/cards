import * as React from 'react'

import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link, useNavigate } from 'react-router-dom'

import { useAppSelector } from 'app/store'
import { PackType } from 'common/api/DataTypes'
import { makeStringDate } from 'common/utils'
import { DeletePackModal } from 'features/Modal/PackModal/DeletePackModal'
import { EditPackModal } from 'features/Modal/PackModal/EditPackModal'
import { selectUserId } from 'features/Profile/profileSelectors'

type PropsType = {
  // key: string
  pack: PackType
}
export const PacksBody: React.FC<PropsType> = ({ pack }) => {
  const stringDate = makeStringDate(pack.updated)
  const navigate = useNavigate()
  const userId = useAppSelector(selectUserId)
  const redirectToLearnHandler = () => {
    navigate('/learn/' + pack._id)
  }

  return (
    <TableRow>
      <TableCell sx={{ maxWidth: '15%', wordBreak: 'break-word' }} scope={'row'} component="th">
        <Link to={pack._id}>{pack.name}</Link>
      </TableCell>
      {/*<TableCell align="right">*/}
      {/*  <img alt={'avatar'} src={'sadfsadf'} />*/}
      {/*</TableCell>*/}
      <TableCell align="left">{pack.cardsCount}</TableCell>
      <TableCell align="center">{stringDate}</TableCell>
      <TableCell align="left">{pack.user_name}</TableCell>
      <TableCell align="left">
        <IconButton onClick={redirectToLearnHandler} size="small" disabled={!pack.cardsCount}>
          <SchoolOutlinedIcon fontSize={'small'} />
        </IconButton>
        {userId === pack.user_id && (
          <>
            <EditPackModal nameProp={pack.name} privateProp={pack.private} packId={pack._id} />
            <DeletePackModal packId={pack._id} packName={pack.name} />
          </>
        )}
      </TableCell>
    </TableRow>
  )
}
