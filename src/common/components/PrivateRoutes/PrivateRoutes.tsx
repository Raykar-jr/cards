import { Navigate, Outlet } from 'react-router-dom'

import { PATH } from '../../path/path'

import { useAppSelector } from 'app/store'
import { selectIsLoggedIn } from 'features/Login/loginSelectors'

export const PrivateRoutes = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  return isLoggedIn ? <Outlet /> : <Navigate to={PATH.LOGIN.LOGIN} />
}
