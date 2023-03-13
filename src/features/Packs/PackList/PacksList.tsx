import * as React from 'react'
import { useEffect } from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'

import { useAppDispatch, useAppSelector } from 'app/store'
import { CreatePacksDataType, PackParamsType, PackType } from 'common/api/DataTypes'
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
    dispatch(createPackTC({ params: {}, data: { cardsPack: { name: 'dsd' } } }))
  }

  return (
    <>
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

      {/*<TablePagination*/}
      {/*  rowsPerPageOptions={[5, 10, 25]}*/}
      {/*  component="div"*/}
      {/*  count={rows.length}*/}
      {/*  rowsPerPage={rowsPerPage}*/}
      {/*  page={page}*/}
      {/*  onPageChange={handleChangePage}*/}
      {/*  onRowsPerPageChange={handleChangeRowsPerPage}*/}
      {/*/>*/}
    </>
  )
}
