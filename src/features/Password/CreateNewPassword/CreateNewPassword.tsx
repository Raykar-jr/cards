import React from 'react'

import Grid from '@mui/material/Grid'
import { Formik, FormikHelpers } from 'formik'
import { Navigate, useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'app/store'
import { PassDataType, PasswordType } from 'common/api/DataTypes'
import { PATH } from 'common/path/path'
import { CreateNewPasswordForm } from 'features/Password/CreateNewPassword/CreateNewPasswordForm'
import { validatePass } from 'features/Password/CreateNewPassword/validatePassword'
import { setNewPass } from 'features/Password/RecoveryPassword/recoveryPass-reducer'
import s from 'features/Password/RecoveryPassword/RecoveryPassword.module.css'

type Props = {}

export const CreateNewPassword: React.FC<Props> = () => {
  const { token } = useParams<{ token: string }>()
  const successRecovery = useAppSelector<boolean>(state => state.recovery.success)
  const dispatch = useAppDispatch()

  if (successRecovery) {
    return <Navigate to={PATH.LOGIN.LOGIN} />
  }
  const submitForm = (values: PasswordType, { setSubmitting }: FormikHelpers<PasswordType>) => {
    let passData: PassDataType = { password: values.password, resetPasswordToken: token }

    dispatch(setNewPass(passData))
    setSubmitting(false)
  }

  return (
    <Grid container display="flex" justifyContent={'center'} className={s.wrapper}>
      <Grid item justifyContent={'center'}>
        <Formik initialValues={{ password: '' }} validationSchema={validatePass} onSubmit={submitForm}>
          {formik => <CreateNewPasswordForm formik={formik} />}
        </Formik>
      </Grid>
    </Grid>
  )
}
