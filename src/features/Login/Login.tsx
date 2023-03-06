import React from 'react'

import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { useFormik } from 'formik'
import { Link, Navigate } from 'react-router-dom'

import textStyle from '../../common/styles/Text.module.css'

import s from './Login.module.css'

import { useAppDispatch, useAppSelector } from 'app/store'
import { PATH } from 'common/path/path'
import {
  common_button,
  errorTextStyle,
  login_formLabelStyle,
  login_formLabelTwoStyle,
  login_linkStyle,
  login_linkStyleTwo,
} from 'common/styles/LoginStyles'
import { login } from 'features/Login/login-reducer'

type Props = {}
type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}
export const Login = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector<boolean>(state => state.login.isLoggedIn)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: values => {
      const errors: FormikErrorType = {}

      if (!values.email) {
        errors.email = 'Required field'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      if (!values.password) {
        errors.password = 'Required field'
      } else if (values.password.length < 3) {
        errors.password = 'Min length of the password must be 3 symbols'
      }

      return errors
    },
    onSubmit: values => {
      dispatch(login(values))
      formik.resetForm()
    },
  })

  if (isLoggedIn) {
    return <Navigate to={PATH.PROFILE.PROFILE} />
  }

  return (
    <Grid container display="flex" justifyContent={'center'} className={s.loginGrid}>
      <Grid item justifyContent={'center'}>
        <form onSubmit={formik.handleSubmit} className={s.form}>
          <FormControl sx={{ width: '100%' }}>
            <FormLabel>
              <p className={textStyle.h1}>Sign In</p>
            </FormLabel>
            <FormGroup>
              <TextField
                variant="standard"
                label="Email"
                margin="normal"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <div style={errorTextStyle}> {formik.errors.email} </div>
              )}

              <TextField
                variant="standard"
                type="password"
                label="Password"
                margin="normal"
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password && (
                <div style={errorTextStyle}> {formik.errors.password} </div>
              )}

              <FormControlLabel
                label={'Remember me'}
                control={
                  <Checkbox
                    {...formik.getFieldProps('rememberMe')}
                    checked={formik.values.rememberMe}
                  />
                }
              />

              <FormLabel sx={login_formLabelStyle}>
                <Link to={PATH.LOGIN.RECOVERY_PASSWORD} style={login_linkStyle}>
                  Forgot password?
                </Link>
              </FormLabel>

              <Button sx={common_button} type={'submit'} variant={'contained'} color={'primary'}>
                Sign In
              </Button>

              <FormLabel sx={login_formLabelTwoStyle}>
                <p className={textStyle.optionalText}>Already have an account?</p>
                <Link style={login_linkStyleTwo} to={PATH.LOGIN.REGISTRATION}>
                  {'Sign Up'}
                </Link>
              </FormLabel>
            </FormGroup>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  )
}
