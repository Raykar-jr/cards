import React from 'react'

import { Paper, Typography } from '@mui/material'
import { Formik } from 'formik'
import { Navigate, NavLink } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'app/store'
import { RegisterData } from 'common/api/DataTypes'
import { PATH } from 'common/path/path'
import { login_linkStyleTwo } from 'common/styles/LoginStyles'
import { registration } from 'features/Registration/registration-reducer'
import s from 'features/Registration/Registration.module.scss'
import RegistrationForm from 'features/Registration/RegistrationForm/RegistrationForm'
import { validationRegistrationForm } from 'features/Registration/validationRegistrationForm'

const Registration: React.FC = () => {
  const dispatch = useAppDispatch()
  const isRegistered = useAppSelector<boolean>(state => state.registration.isRegistered)

  if (isRegistered) {
    return <Navigate to={PATH.LOGIN.LOGIN} />
  }

  const submitRegistrationForm = async (values: RegisterData): Promise<void> => {
    await dispatch(registration(values))
  }

  return (
    <div>
      <Paper elevation={3} className={s.mainContainer}>
        <Typography className={s.title}>Sign Up</Typography>
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          validationSchema={validationRegistrationForm}
          onSubmit={submitRegistrationForm}
        >
          {formik => <RegistrationForm formik={formik} />}
        </Formik>

        <Typography className={s.optionalText}>Already have an account?</Typography>
        <NavLink to={PATH.LOGIN.LOGIN} style={login_linkStyleTwo}>
          Sign In
        </NavLink>
      </Paper>
    </div>
  )
}

export default Registration
