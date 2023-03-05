import React from 'react'

import { Paper, Typography } from '@mui/material'
import { Formik } from 'formik'
import { NavLink } from 'react-router-dom'
import * as Yup from 'yup'

import { PATH } from 'common/path/path'
import s from 'features/Registration/Registration.module.css'
import RegistrationForm from 'features/Registration/RegistrationForm'

type Login = {}

const Registration: React.FC<Login> = () => {
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
              .min(5, 'Password must be at least 5 characters')
              .required('Required'),
            confirmPassword: Yup.string()
              .required('Required')
              .oneOf([Yup.ref('password')], 'Passwords must match'),
          })}
          // todo 'Вывести в переменную, убрать лог, прописать логику
          onSubmit={values => console.log(JSON.stringify(values))}
        >
          {formik => <RegistrationForm formik={formik} />}
        </Formik>
        <Typography className={s.optionalText}>Already have an account?</Typography>
        <NavLink to={PATH.LOGIN.LOGIN}>Sign In</NavLink>
      </Paper>
    </div>
  )
}

export default Registration
