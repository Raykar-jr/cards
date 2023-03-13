import * as React from 'react'
import { useEffect } from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'

import { useAppDispatch, useAppSelector } from 'app/store'
import { PackType } from 'common/api/DataTypes'
import { SuperPaginationTable } from 'common/components/SuperPaginationTable/SuperPaginationTable'
import { PacksBody } from 'features/Packs/PackList/PacksBody/PacksBody'
import { PacksHeader } from 'features/Packs/PackList/PacksHeader/PacksHeader'
import { createPackTC, getPackTC } from 'features/Packs/packs-reducer'

export const PacksList = () => {
  const dispatch = useAppDispatch()
  const packs = useAppSelector((state): Array<PackType> => {
    return state.packs.cardPacks
  })

  useEffect(() => {
    dispatch(getPackTC({}))
  }, [])

  const addNewPackHandler = () => {
    dispatch(createPackTC({ params: {}, data: { cardsPack: { name: 'NEW PACK!!!!' } } }))
  }

  const page = useAppSelector(state => state.packs.page)
  const pageCount = useAppSelector(state => state.packs.pageCount)
  const cardPacksTotalCount = useAppSelector(state => state.packs.cardPacksTotalCount)

  return (
    <>
      <TableContainer className={'commonContainer'}>
        <button onClick={addNewPackHandler}>Add Pack</button>
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

        <SuperPaginationTable page={page} itemsCount={pageCount} totalCount={cardPacksTotalCount} onChange={() => {}} />
      </TableContainer>
    </>
  )
}
