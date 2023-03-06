import React from 'react'

import Grid from '@mui/material/Grid'
import { Formik } from 'formik'
import * as Yup from 'yup'

import s from './RecoveryPassword.module.css'

import { RecoveryPasswordForm } from 'features/Password/RecoveryPassword/RecoveryPasswordForm'

type Props = {}

export const RecoveryPassword: React.FC<Props> = () => {
  return (
    <Grid container display="flex" justifyContent={'center'} className={s.wrapper}>
      <Grid item justifyContent={'center'}>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Invalid email address').required('Required field'),
          })}
          // todo 'убрать лог, прописать логику'
          onSubmit={(values, actions) => {
            console.log(JSON.stringify(values))
            // dispatch
            actions.resetForm()
          }}
        >
          {formik => <RecoveryPasswordForm formik={formik} />}
        </Formik>
      </Grid>
    </Grid>
  )
}
