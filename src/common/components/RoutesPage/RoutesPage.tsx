import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Error404 } from 'common/components/Error404/Error404'
import { PrivateRoutes } from 'common/components/PrivateRoutes/PrivateRoutes'
import { PATH } from 'common/path/path'
import { Login } from 'features/Login/Login'
import { Cards } from 'features/Packs/Card/Card'
import { PacksList } from 'features/Packs/PackList/PacksList'
import { CheckEmail } from 'features/Password/CheckEmail/CheckEmail'
import { CreateNewPassword } from 'features/Password/CreateNewPassword/CreateNewPassword'
import { RecoveryPassword } from 'features/Password/RecoveryPassword/RecoveryPassword'
import Profile from 'features/Profile/Profile'
import Registration from 'features/Registration/Registration'

export const RoutesPage = () => {
  const routes = [
    { path: PATH.LOGIN.LOGIN, component: <Login /> },
    { path: PATH.LOGIN.CREATE_NEW_PASSWORD, component: <CreateNewPassword /> },
    { path: PATH.LOGIN.REGISTRATION, component: <Registration /> },
    { path: PATH.LOGIN.RECOVERY_PASSWORD, component: <RecoveryPassword /> },
    { path: PATH.COMMON.ERROR404, component: <Error404 /> },
    { path: PATH.LOGIN.CHECK_EMAIL, component: <CheckEmail /> },
    { path: PATH.PACKS.PACKS, component: <PacksList /> },
    { path: '*', component: <Error404 /> },
  ]

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path={PATH.PROFILE.PROFILE} element={<Profile />} />
        <Route path={PATH.PACKS.PACKS} element={<PacksList />} />
        <Route path={PATH.PACKS.CARD} element={<Cards />} />
      </Route>
      <Route path="/" element={<Navigate to={PATH.LOGIN.LOGIN} />} />
      {routes.map(route => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
    </Routes>
  )
}
