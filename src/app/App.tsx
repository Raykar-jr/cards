import React, { useEffect } from 'react'

import './App.css'

import CircularProgress from '@mui/material/CircularProgress/CircularProgress'

import { initializeAppTC } from 'app/app-reducer'
import { useAppDispatch, useAppSelector } from 'app/store'
import { BackDrop } from 'common/components/BackDrop/BackDrop'
import { Header } from 'common/components/Header/Header'
import { RoutesPage } from 'common/components/RoutesPage/RoutesPage'
import { SnackBar } from 'common/components/SnackBar/SnackBar'

export const App = () => {
  const isInitialized = useAppSelector((state): boolean => state.app.isInitialized)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeAppTC())
  }, [])

  if (!isInitialized) {
    return (
      <div style={{ margin: '20% 50%' }}>
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
