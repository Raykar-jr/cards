import React, { useEffect, useState } from 'react'

import './App.css'

import Backdrop from '@mui/material/Backdrop/Backdrop'
import CircularProgress from '@mui/material/CircularProgress/CircularProgress'

import { initializeAppTC, requestStatus } from 'app/app-reducer'
import { useAppDispatch, useAppSelector } from 'app/store'
import { Header } from 'common/components/Header/Header'
import { RoutesPage } from 'common/components/RoutesPage/RoutesPage'
import { SnackBar } from 'common/components/SnackBar/SnackBar'

export const App = () => {
  const [open, setOpen] = useState(false)

  const status = useAppSelector((state): requestStatus => state.app.status)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === requestStatus.LOADING) setOpen(true)
    else setOpen(false)
  }, [status])

  useEffect(() => {
    dispatch(initializeAppTC())
  }, [])

  return (
    <div className="App">
      {status === requestStatus.LOADING && (
        <Backdrop open={open} sx={{ color: '#fff', zIndex: 10 }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Header />
      <RoutesPage />
      <SnackBar />
    </div>
  )
}
