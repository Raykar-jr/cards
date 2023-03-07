import React from 'react'

import Grid from '@mui/material/Grid'
import { Formik } from 'formik'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'

import { useAppDispatch } from 'app/store'
import { CreateNewPasswordForm } from 'features/Password/CreateNewPassword/CreateNewPasswordForm'
import { setNewPass } from 'features/Password/RecoveryPassword/recoveryPass-reducer'
import s from 'features/Password/RecoveryPassword/RecoveryPassword.module.css'

type Props = {}

export const CreateNewPassword: React.FC<Props> = () => {
  const { token } = useParams()

  const dispatch = useAppDispatch()

  return (
    <Grid container display="flex" justifyContent={'center'} className={s.wrapper}>
      <Grid item justifyContent={'center'}>
        <Formik
          initialValues={{ password: '' }}
          validationSchema={Yup.object().shape({
            password: Yup.string()
              .min(7, 'Password must be at least 7 characters')
              .required('Required field'),
          })}
          onSubmit={(values, actions) => {
            let passData = { password: values.password, resetPasswordToken: token }

            dispatch(setNewPass(passData))
            actions.resetForm()
          }}
        >
          {formik => <CreateNewPasswordForm formik={formik} />}
        </Formik>
      </Grid>
    </Grid>
  )
}
