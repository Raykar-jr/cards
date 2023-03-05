import React from 'react'

import { Button, FormControl, FormGroup, TextField } from '@mui/material'
import { FormikProps } from 'formik'

import s from 'features/Registration/Registration.module.css'

type Props = {
  formik: FormikProps<{ email: string; password: string; confirmPassword: string }>
}

const RegistrationForm: React.FC<Props> = ({ formik }) => {
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
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          )}
          <TextField
            variant="standard"
            label="Password"
            type="password"
            margin="normal"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          )}
          <TextField
            variant="standard"
            label="Confirm password"
            margin="normal"
            type="password"
            {...formik.getFieldProps('confirmPassword')}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div style={{ color: 'red' }}>{formik.errors.confirmPassword}</div>
          )}
          <Button
            sx={{ borderRadius: '30px' }}
            type={'submit'}
            variant={'contained'}
            color={'primary'}
            className={s.formButton}
          >
            Sign Up
          </Button>
        </FormGroup>
      </FormControl>
    </form>
  )
}

export default RegistrationForm
