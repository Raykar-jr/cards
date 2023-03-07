import React from 'react'

import { Paper, Typography } from '@mui/material'
import { Formik } from 'formik'
import { Navigate, NavLink } from 'react-router-dom'
import * as Yup from 'yup'

import { useAppDispatch, useAppSelector } from 'app/store'
import { PATH } from 'common/path/path'
import { registration } from 'features/Registration/registration-reducer'
import s from 'features/Registration/Registration.module.scss'
import RegistrationForm from 'features/Registration/RegistrationForm/RegistrationForm'

type Login = {}

const Registration: React.FC<Login> = () => {
  const dispatch = useAppDispatch()
  const isRegistered = useAppSelector<boolean>(state => state.registration.isRegistered)

  if (isRegistered) {
    return <Navigate to={PATH.LOGIN.LOGIN} />
  }

  return (
    <div>
      <Paper elevation={3} className={s.mainContainer}>
        <Typography className={s.title}>Sing Up</Typography>
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          // todo 'Вывести в переменную, создать константы'
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
              .min(7, 'Password must be at least 7 characters')
              .required('Required'),
            confirmPassword: Yup.string()
              .required('Required')
              .oneOf([Yup.ref('password')], 'Passwords must match'),
          })}
          // todo 'Вывести в переменную, убрать лог, прописать логику
          onSubmit={(values, { resetForm }) => {
            dispatch(registration({ email: values.email, password: values.password }))
            resetForm()
          }}
        >
          {formik => <RegistrationForm formik={formik} />}
        </Formik>

        <Typography className={s.optionalText}>Already have an account?</Typography>
        <NavLink to={PATH.LOGIN.LOGIN}>
          <div className={s.textLink}>Sign In</div>
        </NavLink>
      </Paper>
    </div>
  )
}

export default Registration
