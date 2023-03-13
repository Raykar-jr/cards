import * as React from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import { useSelector } from 'react-redux'

import { PacksBody } from 'features/Packs/PackList/PacksBody/PacksBody'
import { PacksHeader } from 'features/Packs/PackList/PacksHeader/PacksHeader'
import s from 'features/Packs/PackList/PacksList.module.scss'



export const PacksList = () => {
  const packs = useSelector(() => {})

  return (
    <>
      <TableContainer className={'commonContainer'}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <Table sx={{ minWidth: 700 }} aria-labelledby="tableTitle">
            <PacksHeader />
            <TableBody>
              {packs.map(pack => (
                <PacksBody key={pack._id} pack={pack}/>
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
