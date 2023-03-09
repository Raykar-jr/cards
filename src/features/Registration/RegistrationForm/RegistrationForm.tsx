import React, { useState } from 'react'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import { FormikProps } from 'formik'

import s from 'features/Registration/RegistrationForm/RegistrationForm.module.scss'

type Props = {
  formik: FormikProps<{ email: string; password: string; confirmPassword: string }>
}

const RegistrationForm: React.FC<Props> = ({ formik }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={formik.handleSubmit} className={s.formContainer}>
      <FormControl sx={{ width: '100%' }}>
        <FormGroup>
          <TextField
            variant="standard"
            label="Email"
            margin="normal"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div className={s.errorText}>{formik.errors.email}</div>
          )}

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
            <div className={s.errorText}>{formik.errors.password}</div>
          )}

          <FormControl variant="standard" margin="normal">
            <InputLabel>Confirm password</InputLabel>
            <Input
              type={showPassword ? 'text' : 'password'}
              {...formik.getFieldProps('confirmPassword')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className={s.errorText}>{formik.errors.confirmPassword}</div>
          )}

          <Button type={'submit'} variant={'contained'} color={'primary'} className={s.formButton}>
            Sign Up
          </Button>
        </FormGroup>
      </FormControl>
    </form>
  )
}

export default RegistrationForm
