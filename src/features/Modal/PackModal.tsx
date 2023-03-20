import React from 'react'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { AppRootStateType, useAppDispatch, useAppSelector } from 'app/store'
import { UpdatePackDataType } from 'common/api/DataTypes'
import { modal } from 'features/Modal/modal-constant'
import { closeModal } from 'features/Modal/modal-reducer'
import { PackModalForm } from 'features/Modal/PackModalForm'
import { createPackTC, updatePackTC } from 'features/Packs/packs-reducer'

export const PackModal = () => {
  const dispatch = useAppDispatch()
  const title = useAppSelector((state: AppRootStateType) => state.modals.title)
  const data = useAppSelector((state: AppRootStateType) => state.modals.data) as UpdatePackDataType
  const validatePackModalForm = Yup.object().shape({
    packName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Please enter pack name'),
  })

  const submitModal = async (values: PackModalFormValueType): Promise<void> => {
    if (title === modal.ADD_PACK) {
      await dispatch(
        createPackTC({
          params: {},
          data: {
            name: values.packName,
            private: values.packPrivate,
          },
        })
      )
    }

    if (title === modal.EDIT_PACK) {
      await dispatch(
        updatePackTC({
          params: {},
          data: {
            name: values.packName,
            private: values.packPrivate,
            _id: data._id,
          },
        })
      )
    }

    dispatch(closeModal())
  }

  return (
    <Formik
      initialValues={{
        packName: data.name,
        packPrivate: data.private,
      }}
      validationSchema={validatePackModalForm}
      onSubmit={submitModal}
    >
      {formik => <PackModalForm formik={formik} />}
    </Formik>
  )
}

export type PackModalFormValueType = {
  packName: string
  packPrivate: boolean
}
