import React from 'react'

import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import { FormikProps } from 'formik'
import { Link } from 'react-router-dom'

import { PATH } from 'common/path/path'
import {
  common_button,
  errorTextStyle,
  login_formLabelStyle,
  login_formLabelTwoStyle,
  login_linkStyle,
  login_linkStyleTwo,
} from 'common/styles/LoginStyles'
import textStyle from 'common/styles/Text.module.css'
import s from 'features/Login/Login.module.css'

type Props = {
  formik: FormikProps<{ email: string; password: string; rememberMe: boolean }>
}
export const LoginForm: React.FC<Props> = ({ formik }) => {
  return (
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
  )
}
