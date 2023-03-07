import React from 'react'

import { Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'

import s from './User.module.scss'

import { useAppSelector } from 'app/store'
import edit_name from 'assets/images/edit_name.svg'
import edit_photo from 'assets/images/edit_photo.svg'
import photo from 'assets/images/photo.svg'
import { EditableSpan } from 'common/components/EditableSpan/EditableSpan'

export const User = () => {
  const email = useAppSelector<string>(state => state.profile.email) || 'weqwewe@sad.ru'
  const name = useAppSelector<string>(state => state.profile.name) || 'Alex'
  const avatar = useAppSelector<string>(state => state.profile.avatar) || photo
  const editName = () => {}

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
          <img src={edit_name} alt="edit" />
        </div>
        <span className={s.email}>{email}</span>
      </div>
    </>
  )
}
