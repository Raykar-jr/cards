import React, { useEffect } from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'app/store'
import { createCard, getCards } from 'features/Packs/Card/card-reducer'
import { CardBody } from 'features/Packs/Card/CardParts/CardBody'
import { CardHeader } from 'features/Packs/Card/CardParts/CardHeader'

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

  return (
    <>
      <TableContainer className={'commonContainer'}>
        <TableContainer>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <button onClick={createCardHandler}>Create Card</button>
            <Table sx={{ minWidth: 700 }} aria-labelledby="tableTitle">
              <CardHeader />

              <TableBody>
                {cards.map(card => (
                  <CardBody key={card._id} card={card} />
                ))}
              </TableBody>
            </Table>
          </Paper>
        </TableContainer>

        {/*<SuperPaginationTable page={page} itemsCount={pageCount} totalCount={cardPacksTotalCount} onChange={() => {}} />*/}
      </TableContainer>
    </>
  )
}
