import React from 'react'

import './App.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'

import { Error404 } from 'common/components/Error404/Error404'
import { Header } from 'common/components/Header/Header'
import { PATH } from 'common/path/path'
import { Login } from 'features/Login/Login'
import { CreateNewPassword } from 'features/Password/CreateNewPassword/CreateNewPassword'
import { RecoveryPassword } from 'features/Password/RecoveryPassword/RecoveryPassword'
import Profile from 'features/Profile/Profile'
import Registration from 'features/Registration/Registration'

function App() {
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
      </div>

      <Routes>
        <Route path={PATH.LOGIN.LOGIN} element={<Login />} />
        <Route path={PATH.PROFILE.PROFILE} element={<Profile />} />
        <Route path={PATH.LOGIN.CREATE_NEW_PASSWORD} element={<CreateNewPassword />} />
        <Route path={PATH.LOGIN.REGISTRATION} element={<Registration />} />
        <Route path={PATH.LOGIN.RECOVERY_PASSWORD} element={<RecoveryPassword />} />
        <Route path={PATH.COMMON.ERROR404} element={<Error404 />} />
        <Route path={'*'} element={<Navigate to={PATH.COMMON.ERROR404} />} />
      </Routes>
    </div>
  )
}

export default App
