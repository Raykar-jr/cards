import React, { useEffect, useState } from 'react'

import Backdrop from '@mui/material/Backdrop/Backdrop'
import CircularProgress from '@mui/material/CircularProgress/CircularProgress'

import { initializeAppTC } from 'app/app-reducer'
import s from 'app/App.module.scss'
import { useAppDispatch, useAppSelector } from 'app/store'
import { Header } from 'common/components/Header/Header'
import { RoutesPage } from 'common/components/RoutesPage/RoutesPage'
import { SnackBar } from 'common/components/SnackBar/SnackBar'
import { requestStatus } from 'common/enums/requestStatus'

export const App = () => {
  const [open, setOpen] = useState(false)

  const status = useAppSelector((state): requestStatus => state.app.status)
  const isInitialized = useAppSelector((state): boolean => state.app.isInitialized)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (status === requestStatus.LOADING) setOpen(true)
    else setOpen(false)
  }, [status])

  useEffect(() => {
    dispatch(initializeAppTC())
  }, [])

  if (!isInitialized) {
    return (
      <div className={s.initialized}>
        <CircularProgress color="primary" />
      </div>
    )
  }

  return (
    <div className="App">
      {status === requestStatus.LOADING && (
        <Backdrop open={open} className={s.backdrop}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Header />
      <RoutesPage />
      <SnackBar />
    </div>
  )
}
