import React, { useEffect, useState } from 'react'

import Backdrop from '@mui/material/Backdrop/Backdrop'
import CircularProgress from '@mui/material/CircularProgress/CircularProgress'

import { useAppSelector } from 'app/store'
import { requestStatus } from 'common/enums/requestStatus'

export const BackDrop = () => {
  const [open, setOpen] = useState(false)
  const status = useAppSelector((state): requestStatus => state.app.status)

  useEffect(() => {
    if (status === requestStatus.LOADING) setOpen(true)
    else setOpen(false)
  }, [status])

  return (
    <>
      {status === requestStatus.LOADING && (
        <Backdrop open={open} sx={{ color: '#fff', zIndex: 10 }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  )
}
