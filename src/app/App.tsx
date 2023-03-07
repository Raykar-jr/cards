import React, { useEffect } from 'react'

import './App.css'
import { NavLink } from 'react-router-dom'

import { initializeAppTC } from 'app/app-reducer'
import { useAppDispatch } from 'app/store'
import { Header } from 'common/components/Header/Header'
import { RoutesPage } from 'common/components/RoutesPage/RoutesPage'
import { SnackBar } from 'common/components/SnackBar/SnackBar'
import { PATH } from 'common/path/path'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeAppTC())
  }, [])

  return (
    <div className="App">
      <Header />
      <div style={{ marginTop: '80px' }}>
        <NavLink to={PATH.LOGIN.LOGIN}>Login </NavLink>
        <NavLink to={PATH.PROFILE.PROFILE}>Profile </NavLink>
        <NavLink to={PATH.LOGIN.CREATE_NEW_PASSWORD}>Create New Password </NavLink>
        <NavLink to={PATH.LOGIN.REGISTRATION}>Registration </NavLink>
        <NavLink to={PATH.LOGIN.RECOVERY_PASSWORD}>Recovery password</NavLink>
        <NavLink to={PATH.COMMON.ERROR404}> ERROR</NavLink>
        <NavLink to={PATH.LOGIN.CHECK_EMAIL}> Check email</NavLink>
      </div>

      <RoutesPage />
      <SnackBar />
    </div>
  )
}
