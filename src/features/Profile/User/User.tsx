import React from 'react'

import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'

import s from './User.module.scss'

import { useAppDispatch, useAppSelector } from 'app/store'
import edit_photo from 'assets/images/edit_photo.svg'
import { EditableSpan } from 'common/components/EditableSpan/EditableSpan'
import { changeUserDataTC } from 'features/Profile/profile-reducer'

export const User = () => {
  const email = useAppSelector<string>(state => state.profile.email)
  const name = useAppSelector<string>(state => state.profile.name)
  const avatar = useAppSelector<string>(state => state.profile.avatar)
  const dispatch = useAppDispatch()
  const editName = (newName: string) => {
    dispatch(changeUserDataTC({ name: newName, avatar }))
  }

  return (
    <>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={<Avatar alt="Remy Sharp" src={edit_photo} sx={{ width: 32, height: 32 }} />}
      >
        <Avatar sx={{ width: 96, height: 96 }} alt="UserName" src={avatar} sizes="small" />
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
