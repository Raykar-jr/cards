import React, { useEffect } from 'react'

import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import { NavLink, useParams } from 'react-router-dom'

import s from './Card.module.scss'

import { useAppDispatch, useAppSelector } from 'app/store'
import vector from 'assets/images/vector.svg'
import { SuperPaginationTable } from 'common/components/SuperPaginationTable/SuperPaginationTable'
import { PATH } from 'common/path/path'
import { common_button } from 'common/styles/LoginStyles'
import { createCard, getCards, setCount, setPage } from 'features/Packs/Card/card-reducer'
import { CardBody } from 'features/Packs/Card/CardParts/CardBody'
import { CardHeader } from 'features/Packs/Card/CardParts/CardHeader'
import {
  selectCardPage,
  selectCardPageCount,
  selectCards,
  selectCardSearch,
  selectCardSort,
  selectCardsTotalCount,
  selectPackName,
} from 'features/Packs/Card/CardSelectors'

export const Cards = () => {
  const { packId } = useParams<{ packId: string }>()
  const dispatch = useAppDispatch()

  const cards = useAppSelector(selectCards)

  const page = useAppSelector(selectCardPage)
  const pageCount = useAppSelector(selectCardPageCount)
  const cardsTotalCount = useAppSelector(selectCardsTotalCount)
  const packName = useAppSelector(selectPackName)
  const sort = useAppSelector(selectCardSort)
  const search = useAppSelector(selectCardSearch)

  useEffect(() => {
    packId && dispatch(getCards(packId))
  }, [page, pageCount, sort, search])

  const createCardHandler = () => {
    packId && dispatch(createCard(packId))
  }
  const ChangePaginationHandler = (newPage: number, newCount: number = 5) => {
    dispatch(setPage(newPage))
    dispatch(setCount(newCount))
  }

  return (
    <>
      <div className={s.arrow}>
        <img src={vector} alt="vector icon" />
        <NavLink to={PATH.PACKS.PACKS}>Back to Packs List</NavLink>
      </div>
      <div className={s.packName}>
        <p className={s.packNameText}>{packName}</p>
      </div>
      {cards.length == 0 ? (
        <div className={s.wrapperEmptyPack}>
          <p className={s.emptyPackText}>This pack is empty. Click add new card to fill this pack</p>
          <Button sx={common_button} onClick={createCardHandler} variant={'contained'} color={'primary'}>
            Add new card
          </Button>
        </div>
      ) : (
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

          <SuperPaginationTable
            page={page}
            itemsCount={pageCount}
            totalCount={cardsTotalCount}
            onChange={ChangePaginationHandler}
          />
        </TableContainer>
      )}
    </>
  )
}
