import React from 'react'

import Rating from '@mui/material/Rating'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { CardType } from 'common/api/DataTypes'
import { makeStringDate } from 'common/utils/makeStringDate'
import { DeleteCardModal } from 'features/Modal/CardsModal/DeleteCardModal'
import { EditCardModal } from 'features/Modal/CardsModal/EditCardModal'

type Props = {
  card: CardType
}
export const CardBody: React.FC<Props> = ({ card }) => {
  const stringDate = makeStringDate(card.updated)

  return (
    <TableRow>
      <TableCell sx={{ maxWidth: '20%', wordBreak: 'break-word' }} align="left">
        {card.question}
      </TableCell>
      <TableCell sx={{ maxWidth: '20%', wordBreak: 'break-word' }} align="left">
        {card.answer}
      </TableCell>
      <TableCell align="center">{stringDate}</TableCell>
      <TableCell align="left">
        <Rating name="simple-controlled" value={card.grade} />
      </TableCell>
      <TableCell align="left">
        <div style={{ display: 'flex' }}>
          <EditCardModal
            packId={card.cardsPack_id}
            cardId={card._id}
            answerProp={card.answer}
            questionProp={card.question}
          />
          <DeleteCardModal cardName={card.question} packId={card.cardsPack_id} cardId={card._id} />
        </div>
      </TableCell>
    </TableRow>
  )
}
