import React from 'react'

import Grid from '@mui/material/Grid'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { CreateNewPasswordForm } from 'features/Password/CreateNewPassword/CreateNewPasswordForm'
import s from 'features/Password/RecoveryPassword/RecoveryPassword.module.css'

type Props = {}

export const CreateNewPassword: React.FC<Props> = () => {
  return (
    <Grid container display="flex" justifyContent={'center'} className={s.wrapper}>
      <Grid item justifyContent={'center'}>
        <Formik
          initialValues={{ password: '' }}
          validationSchema={Yup.object().shape({
            password: Yup.string()
              .min(5, 'Password must be at least 5 characters')
              .required('Required field'),
          })}
          // todo 'убрать лог, прописать логику'
          onSubmit={(values, actions) => {
            // console.log(JSON.stringify(values))
            // dispatch

            actions.resetForm()
            // редирект на Check Email component
          }}
        >
          {formik => <CreateNewPasswordForm formik={formik} />}
        </Formik>
      </Grid>
    </Grid>
  )
}
