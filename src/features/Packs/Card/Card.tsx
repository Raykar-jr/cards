import React, { useEffect } from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'app/store'
import arrow_down from 'assets/icons/arrow_down.svg'
import { createCard, deleteCard, getCards, updateCard } from 'features/Packs/Card/card-reducer'
import s from 'features/Packs/PackList/PacksHeader/PacksHeader.module.scss'

export const Cards = () => {
  const { packId } = useParams<{ packId: string }>()
  const dispatch = useAppDispatch()
  const cards = useAppSelector(state => state.cards.cards)

  useEffect(() => {
    packId && dispatch(getCards(packId))
  }, [])

  const createCardHandler = () => {
    packId && dispatch(createCard(packId))
  }
  const updateCardHandler = (cardId: string) => {
    packId && dispatch(updateCard(packId, cardId))
  }
  const deleteCardHandler = (cardId: string) => {
    packId && dispatch(deleteCard(packId, cardId))
  }

  return (
    <>
      <TableContainer className={'commonContainer'}>
        <TableContainer>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <button onClick={createCardHandler}>Create Card</button>
            <Table sx={{ minWidth: 700 }} aria-labelledby="tableTitle">
              {/*Header*/}

              <TableHead>
                <TableRow className={`${s.head} ${s.wrap}`}>
                  <TableCell>Question</TableCell>
                  <TableCell align={'right'}>Answer</TableCell>
                  <TableCell className={s.head_cursor} align={'right'}>
                    Last Updated
                    <img src={arrow_down} alt={'sort'} />
                  </TableCell>
                  <TableCell align={'right'}>Grade</TableCell>
                  <TableCell align={'right'}>Actions</TableCell>
                </TableRow>
              </TableHead>
              {/* header_end*/}

              <TableBody>
                {/*body_start*/}
                {cards.map(card => (
                  <TableRow key={card._id}>
                    <TableCell scope={'row'} component="th" padding="none">
                      {/* <Link to={pack._id}>{pack.name}</Link>*/}
                    </TableCell>
                    <TableCell align="right">{card.question}</TableCell>
                    <TableCell align="right">{card.answer}</TableCell>
                    <TableCell align="right">{card.grade}</TableCell>
                    <TableCell align="right">
                      {'learn/edite,delete'}
                      <button onClick={() => updateCardHandler(card._id)}>Update Card</button> <br />
                      <button onClick={() => deleteCardHandler(card._id)}>Delete Card</button>
                    </TableCell>
                  </TableRow>
                ))}
                {/* body_end*/}
              </TableBody>
            </Table>
          </Paper>
        </TableContainer>

        {/*<SuperPaginationTable page={page} itemsCount={pageCount} totalCount={cardPacksTotalCount} onChange={() => {}} />*/}
      </TableContainer>
    </>
  )
}
