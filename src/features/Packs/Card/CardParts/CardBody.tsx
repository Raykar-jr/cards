import React from 'react'

import Rating from '@mui/material/Rating'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import s from './styles.module.scss'

import { CardType } from 'common/api/DataTypes'
import { makeStringDate } from 'common/utils'
import { DeleteCardModal } from 'features/Modal/CardsModal/DeleteCardModal'
import { EditCardModal } from 'features/Modal/CardsModal/EditCardModal'

type Props = {
  card: CardType
  isMyPack: boolean
}
export const CardBody: React.FC<Props> = ({ card, isMyPack }) => {
  const stringDate = makeStringDate(card.updated)

  return (
    <TableRow>
      <TableCell sx={{ maxWidth: '20%', wordBreak: 'break-word' }} align="left">
        {card.questionImg ? <img className={s.img} src={card.questionImg} alt="question card cover" /> : card.question}
      </TableCell>
      <TableCell sx={{ maxWidth: '20%', wordBreak: 'break-word' }} align="left">
        {card.answerImg ? <img className={s.img} src={card.answerImg} alt="question card cover" /> : card.answer}
      </TableCell>
      <TableCell align="center">{stringDate}</TableCell>
      <TableCell align="left">
        <Rating name="simple-controlled" value={card.grade} />
      </TableCell>
      {isMyPack && (
        <TableCell align="left">
          <div style={{ display: 'flex' }}>
            <EditCardModal
              packId={card.cardsPack_id}
              cardId={card._id}
              answerProp={card.answer}
              questionProp={card.question}
              questionImgProp={card.questionImg}
            />
            <DeleteCardModal cardName={card.question} packId={card.cardsPack_id} cardId={card._id} />
          </div>
        </TableCell>
      )}
    </TableRow>
  )
}
