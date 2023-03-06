import React from 'react'

import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import { FormikProps } from 'formik'

import s from './CreateNewPassword.module.css'

import { common_button, errorTextStyle, login_formLabelTwoStyle } from 'common/styles/LoginStyles'
import textStyle from 'common/styles/Text.module.css'

type Props = {
  formik: FormikProps<{ password: string }>
}
export const CreateNewPasswordForm: React.FC<Props> = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit} className={s.form}>
      <FormControl sx={{ width: '100%' }}>
        <FormLabel>
          <p className={textStyle.h1}>Create new password</p>
        </FormLabel>
        <FormGroup>
          <TextField
            type="password"
            variant="standard"
            label="Password"
            margin="normal"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={errorTextStyle}> {formik.errors.password} </div>
          )}

          <FormLabel sx={login_formLabelTwoStyle}>
            <p className={textStyle.optionalText}>
              Create new password and we will send you further instructions to email
            </p>
          </FormLabel>

          <Button sx={common_button} type={'submit'} variant={'contained'} color={'primary'}>
            Create new password
          </Button>
        </FormGroup>
      </FormControl>
    </form>
  )
}
