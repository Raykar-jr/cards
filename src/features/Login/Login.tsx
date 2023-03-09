import React from 'react'

import Grid from '@mui/material/Grid'
import { Formik } from 'formik'
import { Navigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'app/store'
import { LoginParamsType } from 'common/api/DataTypes'
import { PATH } from 'common/path/path'
import { login } from 'features/Login/login-reducer'
import s from 'features/Login/Login.module.scss'
import { LoginForm } from 'features/Login/LoginForm/LoginForm'
import { validateLogin } from 'features/Login/validateLogin'

export const Login = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector<boolean>(state => state.login.isLoggedIn)

  if (isLoggedIn) {
    return <Navigate to={PATH.PROFILE.PROFILE} />
  }

  const submitLoginForm = async (values: LoginParamsType): Promise<void> => {
    await dispatch(login(values))
  }

  return (
    <Grid container display="flex" justifyContent={'center'} className={s.loginGrid}>
      <Grid item justifyContent={'center'}>
        <Formik
          initialValues={{ email: '', password: '', rememberMe: false }}
          validationSchema={validateLogin}
          onSubmit={submitLoginForm}
        >
          {formik => <LoginForm formik={formik} />}
        </Formik>
      </Grid>
    </Grid>
  )
}
