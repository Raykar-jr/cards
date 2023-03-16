import * as React from 'react'
import { useEffect } from 'react'

import MoodBadIcon from '@mui/icons-material/MoodBad'
import { Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import { useSearchParams } from 'react-router-dom'

import s from './PacksList.module.scss'

import { useAppDispatch, useAppSelector } from 'app/store'
import { PackType } from 'common/api/DataTypes'
import { SuperPaginationTable } from 'common/components/SuperPaginationTable/SuperPaginationTable'
import { PacksBody } from 'features/Packs/PackList/PacksBody/PacksBody'
import { PacksHeader } from 'features/Packs/PackList/PacksHeader/PacksHeader'
import { FilterPanel } from 'features/Packs/PackList/Settings/FilterPanel'
import { createPackTC, getPackTC } from 'features/Packs/packs-reducer'

export const PacksList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useAppDispatch()
  const packs = useAppSelector((state): Array<PackType> => {
    return state.packs.cardPacks
  })

  useEffect(() => {
    const params = Object.fromEntries(searchParams)

    dispatch(getPackTC({ page: +params.page, pageCount: +params.count || 5 }))
  }, [])

  const addNewPackHandler = () => {
    dispatch(createPackTC({ params: {}, data: { cardsPack: { name: 'NEW PACK!!!!' } } }))
  }

  const onChangePagination = (newPage: number, newCount: number) => {
    dispatch(getPackTC({ page: newPage, pageCount: newCount }))
    setSearchParams({ page: '' + newPage, count: '' + newCount })
  }

  const page = useAppSelector(state => state.packs.page)
  const pageCount = useAppSelector(state => state.packs.pageCount)
  const cardPacksTotalCount = useAppSelector(state => state.packs.cardPacksTotalCount)

  return (
    <>
      <TableContainer className={s.container}>
        <button onClick={addNewPackHandler}>Add Pack</button>
        <FilterPanel />
        {packs.length ? (
          <>
            <TableContainer>
              <Paper sx={{ width: '100%', mb: 2 }}>
                <Table sx={{ minWidth: 700 }} aria-labelledby="tableTitle">
                  <PacksHeader />
                  <TableBody>
                    {packs.map(pack => (
                      <PacksBody key={pack._id} pack={pack} />
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </TableContainer>
            <SuperPaginationTable
              page={page}
              itemsCount={pageCount}
              totalCount={cardPacksTotalCount}
              onChange={onChangePagination}
            />
          </>
        ) : (
          <Typography className={s.search}>
            <MoodBadIcon color={'warning'} />
            No decks found with given name. Change your search options.
          </Typography>
        )}
      </TableContainer>
    </>
  )
}
