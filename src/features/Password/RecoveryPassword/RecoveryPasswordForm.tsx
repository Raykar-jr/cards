import React from 'react'

import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import { FormikProps } from 'formik'
import { Link } from 'react-router-dom'

import s from './RecoveryPassword.module.css'

import { PATH } from 'common/path/path'
import { common_button, errorTextStyle, login_formLabelTwoStyle, login_linkStyleTwo } from 'common/styles/LoginStyles'
import textStyle from 'common/styles/Text.module.scss'

type Props = {
  formik: FormikProps<{ email: string }>
}
export const RecoveryPasswordForm: React.FC<Props> = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit} className={s.form}>
      <FormControl sx={{ width: '100%' }}>
        <FormLabel>
          <p className={textStyle.h1}>Forgot your password?</p>
        </FormLabel>
        <FormGroup>
          <TextField variant="standard" label="Email" margin="normal" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email && <div style={errorTextStyle}> {formik.errors.email} </div>}

          <FormLabel sx={login_formLabelTwoStyle}>
            <p className={textStyle.optionalText}>Enter your email address and we will send you further instructions</p>
          </FormLabel>

          <Button sx={common_button} type={'submit'} variant={'contained'} color={'primary'}>
            Send Instructions
          </Button>

          <FormLabel sx={login_formLabelTwoStyle}>
            <p className={textStyle.optionalText}>Did your remember your password?</p>
            <Link style={login_linkStyleTwo} to={PATH.LOGIN.LOGIN}>
              {'Try logging in'}
            </Link>
          </FormLabel>
        </FormGroup>
      </FormControl>
    </form>
  )
}
