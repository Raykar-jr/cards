import * as React from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import { useSelector } from 'react-redux'

import { useAppSelector } from 'app/store'
import { PackType } from 'common/api/DataTypes'
import { PacksBody } from 'features/Packs/PackList/PacksBody/PacksBody'
import { PacksHeader } from 'features/Packs/PackList/PacksHeader/PacksHeader'

export const PacksList = () => {
  const packs = useAppSelector((state): Array<PackType> => {
    return state.packs.cardPacks
  })

  return (
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
