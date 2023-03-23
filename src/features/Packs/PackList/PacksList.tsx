import * as React from 'react'
import { useEffect } from 'react'

import MoodBadIcon from '@mui/icons-material/MoodBad'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import { useParams } from 'react-router-dom'

import s from './PacksList.module.scss'

import { useAppDispatch, useAppSelector } from 'app/store'
import { SuperPaginationTable } from 'common/components/SuperPaginationTable/SuperPaginationTable'
import { AddPackModal } from 'features/Modal/PackModal/AddPackModal'
import { PacksBody } from 'features/Packs/PackList/PacksBody/PacksBody'
import { PacksHeader } from 'features/Packs/PackList/PacksHeader/PacksHeader'
import { FilterPanel } from 'features/Packs/PackList/Settings/FilterPanel'
import { getPackTC, setQueryParams } from 'features/Packs/packs-reducer'

export const PacksList = () => {
  const dispatch = useAppDispatch()
  const cardPacksTotalCount = useAppSelector(state => {
    return state.packs.packList.cardPacksTotalCount
  })
  const packs = useAppSelector(state => {
    return state.packs.packList.cardPacks
  })
  const queryParams = useAppSelector(state => state.packs.queryParams)

  useEffect(() => {
    dispatch(getPackTC(queryParams))
  }, [queryParams])

  const onChangePagination = (newPage: number, newCount: number) => {
    dispatch(setQueryParams({ page: newPage, pageCount: newCount }))
  }

  return (
    <>
      <TableContainer className={s.container}>
        <Grid container justifyContent={'space-between'} alignItems={'center'}>
          <p className={s.title}>Packs list</p>
          <AddPackModal />
        </Grid>
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
              page={queryParams.page}
              itemsCount={queryParams.pageCount}
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
