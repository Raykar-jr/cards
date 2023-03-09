import React from 'react'

import Grid from '@mui/material/Grid'
import { Formik } from 'formik'
import { Navigate } from 'react-router-dom'
import * as Yup from 'yup'

import s from './Login.module.css'

import { useAppDispatch, useAppSelector } from 'app/store'
import { PATH } from 'common/path/path'
import { login } from 'features/Login/login-reducer'
import { LoginForm } from 'features/Login/LoginForm'

export const Login = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector<boolean>(state => state.login.isLoggedIn)

  if (isLoggedIn) {
    return <Navigate to={PATH.PROFILE.PROFILE} />
  }

  return (
    <Grid container display="flex" justifyContent={'center'} className={s.loginGrid}>
      <Grid item justifyContent={'center'}>
        <Formik
          initialValues={{ email: '', password: '', rememberMe: false }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Invalid email address').required('Required field'),
            password: Yup.string()
              .min(7, 'Password must be at least 7 characters')
              .required('Required field'),
          })}
          onSubmit={values => dispatch(login(values))}
        >
          {formik => <LoginForm formik={formik} />}
        </Formik>
      </Grid>
    </Grid>
  )
}
