import React from 'react'

import Grid from '@mui/material/Grid'
import { Formik } from 'formik'
import { Navigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'

import { useAppDispatch, useAppSelector } from 'app/store'
import { PATH } from 'common/path/path'
import { CreateNewPasswordForm } from 'features/Password/CreateNewPassword/CreateNewPasswordForm'
import { setNewPass } from 'features/Password/RecoveryPassword/recoveryPass-reducer'
import s from 'features/Password/RecoveryPassword/RecoveryPassword.module.css'

type Props = {}

export const CreateNewPassword: React.FC<Props> = () => {
  const { token } = useParams()
  const successRecovery = useAppSelector<boolean>(state => state.recovery.success)
  const dispatch = useAppDispatch()

  if (successRecovery) {
    return <Navigate to={PATH.LOGIN.LOGIN} />
  }

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
