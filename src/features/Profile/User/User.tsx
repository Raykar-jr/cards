import React from 'react'

import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'

import s from './User.module.scss'

import { useAppDispatch, useAppSelector } from 'app/store'
import edit_photo from 'assets/images/edit_photo.svg'
import { EditableSpan } from 'common/components/EditableSpan/EditableSpan'
import { InputTypeFile } from 'common/components/InputTypeFile'
import { changeUserDataTC } from 'features/Profile/profile-reducer'
import { selectAvatar, selectEmail, selectName } from 'features/Profile/profileSelectors'

export const User = () => {
  const email = useAppSelector<string>(selectEmail)
  const name = useAppSelector<string>(selectName)
  const avatar = useAppSelector<string>(selectAvatar)
  const dispatch = useAppDispatch()
  const editName = (newName: string) => {
    dispatch(changeUserDataTC({ name: newName }))
  }
  const changeAvatar = (file64: string) => {
    dispatch(changeUserDataTC({ avatar: file64 }))
  }

  return (
    <>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <InputTypeFile callBack={changeAvatar}>
            <Avatar alt="Remy Sharp" src={edit_photo} sx={{ width: 32, height: 32 }} />
          </InputTypeFile>
        }
      >
        <Avatar sx={{ width: 108, height: 108 }} alt={name} src={avatar} />
      </Badge>
      <div className={s.information}>
        <div className={s.name}>
          <EditableSpan changeTitle={editName} initTitle={name} />
        </div>
        <span className={s.email}>{email}</span>
      </div>
    </>
  )
}
