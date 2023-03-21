import React, { useEffect } from 'react'

import CircularProgress from '@mui/material/CircularProgress/CircularProgress'

import { initializeAppTC } from 'app/app-reducer'
import s from 'app/App.module.scss'
import { selectIsAppInitialized } from 'app/appSelectors'
import { AppRootStateType, useAppDispatch, useAppSelector } from 'app/store'
import { BackDrop } from 'common/components/BackDrop/BackDrop'
import { BasicModal } from 'common/components/BasicModal/BasicModal'
import { modal } from 'common/components/constants/modal-constant'
import { Header } from 'common/components/Header/Header'
import { RoutesPage } from 'common/components/RoutesPage/RoutesPage'
import { SnackBar } from 'common/components/SnackBar/SnackBar'
import { DeletePackModal } from 'features/Modal/PackModal/DeletePackModal/DeletePackModal'
import { PackModal } from 'features/Modal/PackModal/PackModal'

export const App = () => {
  const isInitialized = useAppSelector<boolean>(selectIsAppInitialized)
  const dispatch = useAppDispatch()

  const title = useAppSelector((state: AppRootStateType) => state.modals.title)

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

  const getModalChildren = (title: string) => {
    if (title === modal.ADD_PACK || title === modal.EDIT_PACK) return <PackModal />
    if (title === modal.DELETE_PACK) return <DeletePackModal />
  }

  return (
    <div className="App">
      <BackDrop />
      <Header />
      <RoutesPage />
      <SnackBar />
      <BasicModal title={title}>{getModalChildren(title)}</BasicModal>
    </div>
  )
}
