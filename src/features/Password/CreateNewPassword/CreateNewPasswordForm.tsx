import React, { useState } from 'react'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import { FormikProps } from 'formik'

import s from './CreateNewPassword.module.css'

import { common_button, errorTextStyle, login_formLabelTwoStyle } from 'common/styles/LoginStyles'
import textStyle from 'common/styles/Text.module.scss'

type Props = {
  formik: FormikProps<{ password: string }>
}
export const CreateNewPasswordForm: React.FC<Props> = ({ formik }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={formik.handleSubmit} className={s.form}>
      <FormControl sx={{ width: '100%' }}>
        <FormLabel>
          <p className={textStyle.h1}>Create new password</p>
        </FormLabel>
        <FormGroup>
          <FormControl variant="standard" margin="normal">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              type={showPassword ? 'text' : 'password'}
              {...formik.getFieldProps('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

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
