import React, { useEffect, useState } from 'react'

import Backdrop from '@mui/material/Backdrop/Backdrop'
import CircularProgress from '@mui/material/CircularProgress/CircularProgress'

import { initializeAppTC } from 'app/app-reducer'
import s from 'app/App.module.scss'
import { useAppDispatch, useAppSelector } from 'app/store'
import { BackDrop } from 'common/components/BackDrop/BackDrop'
import { Header } from 'common/components/Header/Header'
import { RoutesPage } from 'common/components/RoutesPage/RoutesPage'
import { SnackBar } from 'common/components/SnackBar/SnackBar'
import { requestStatus } from 'common/enums/requestStatus'

export const App = () => {
  const isInitialized = useAppSelector((state): boolean => state.app.isInitialized)
  const dispatch = useAppDispatch()

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
      <BackDrop />
      <Header />
      <RoutesPage />
      <SnackBar />
    </div>
  )
}
