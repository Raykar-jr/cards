import React, { useEffect } from 'react'

import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import { useParams } from 'react-router-dom'

import s from './Card.module.scss'

import { useAppDispatch, useAppSelector } from 'app/store'
import { ArrowBackToPacks } from 'common/components/ArrowBackToPacks/ArrowBackToPacks'
import { Filters } from 'common/components/Filters/Filters'
import { AddCardModal } from 'common/components/Modals/CardsModal/AddCardModal'
import { Search } from 'common/components/Search/Search'
import { SuperPaginationTable } from 'common/components/SuperPaginationTable/SuperPaginationTable'
import { common_button } from 'common/styles/LoginStyles'
import { getCards, setCount, setPage, setSearch } from 'features/Packs/Card/card-reducer'
import { CardBody } from 'features/Packs/Card/CardParts/CardBody'
import { CardHeader } from 'features/Packs/Card/CardParts/CardHeader'
import { EmptyPack } from 'features/Packs/Card/CardParts/EmptyPack'
import {
  selectCardPage,
  selectCardPageCount,
  selectCards,
  selectCardSearch,
  selectCardSort,
  selectCardsTotalCount,
  selectPackName,
  selectPackUserId,
} from 'features/Packs/Card/CardSelectors'
import { selectUserId } from 'features/Profile/profileSelectors'

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
  const userId = useAppSelector(selectUserId)
  const packUserId = useAppSelector(selectPackUserId)

  const isMyPack = userId === packUserId
  const isEmptyPack = !cards.length

  useEffect(() => {
    packId && dispatch(getCards(packId))
  }, [page, pageCount, sort, search])

  useEffect(() => {
    return () => {
      dispatch(setSearch(''))
    }
  }, [])
  const changePaginationHandler = (newPage: number, newCount: number = 5) => {
    dispatch(setPage(newPage))
    dispatch(setCount(newCount))
  }
  const searchHandler = (search: string) => dispatch(setSearch(search))

  return (
    <TableContainer className={s.container}>
      <ArrowBackToPacks />
      <div className={s.packName}>
        <p className={s.packNameText}>{packName}</p>
        {!isEmptyPack && !isMyPack && (
          <Button sx={common_button} variant={'contained'} color={'primary'}>
            Learn to pack
          </Button>
        )}
        {!isEmptyPack && isMyPack && <AddCardModal packId={packId} />}
      </div>
      {isEmptyPack ? (
        <EmptyPack packId={packId} />
      ) : (
        <TableContainer className={'commonContainer'}>
          <TableContainer>
            <Paper sx={{ width: '100%', mb: 2 }}>
              <Filters>
                <Search search={search} onChange={searchHandler} />
              </Filters>
              <Table sx={{ minWidth: 700, mt: 2 }} aria-labelledby="tableTitle">
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
            onChange={changePaginationHandler}
          />
        </TableContainer>
      )}
    </TableContainer>
  )
}
