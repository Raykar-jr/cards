import React from 'react'

import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link, useNavigate } from 'react-router-dom'

import { useAppSelector } from 'app/store'
import deckCover from 'assets/images/deckCover.jpg'
import { PackType } from 'common/api/DataTypes'
import { makeStringDate } from 'common/utils'
import { DeletePackModal } from 'features/Modal/PackModal/DeletePackModal'
import { EditPackModal } from 'features/Modal/PackModal/EditPackModal'
import { selectUserId } from 'features/Profile/profileSelectors'

type PropsType = {
  pack: PackType
}
export const PacksBody: React.FC<PropsType> = ({ pack }) => {
  const stringDate = makeStringDate(pack.updated)
  const navigate = useNavigate()
  const userId = useAppSelector(selectUserId)
  const redirectToLearnHandler = () => {
    navigate('/learn/' + pack._id)
  }
  const checkDeckCover = pack.deckCover !== 'url' && pack.deckCover !== 'url or base64' && pack.deckCover

  return (
    <TableRow>
      <TableCell align="left" sx={{ display: 'flex', gap: '15px', alignItems: 'center' }} scope={'row'} component="th">
        <img
          style={{ height: '40px', width: '60px', borderRadius: '2px' }}
          alt={'pack deck cover'}
          src={checkDeckCover || deckCover}
        />
        <Link to={pack._id}>{pack.name}</Link>
      </TableCell>
      <TableCell align="left">{pack.cardsCount}</TableCell>
      <TableCell align="center">{stringDate}</TableCell>
      <TableCell align="left">{pack.user_name}</TableCell>
      <TableCell align="left">
        <IconButton onClick={redirectToLearnHandler} size="small" disabled={!pack.cardsCount}>
          <SchoolOutlinedIcon fontSize={'small'} />
        </IconButton>
        {userId === pack.user_id && (
          <>
            <EditPackModal
              packDeckCover={pack.deckCover}
              nameProp={pack.name}
              privateProp={pack.private}
              packId={pack._id}
            />
            <DeletePackModal packId={pack._id} packName={pack.name} />
          </>
        )}
      </TableCell>
    </TableRow>
  )
}
