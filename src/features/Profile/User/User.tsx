import React from 'react'

import { Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'

import edit_name from 'assets/images/edit_name.svg'
import edit_photo from 'assets/images/edit_photo.svg'
import photo from 'assets/images/photo.svg'
import { EditableSpan } from 'common/components/EditableSpan/EditableSpan'

export const User = () => {
  const email = 'j&johnson@gmail.com'
  const name = 'Alex'
  const editName = () => {}

  return (
    <>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={<Avatar alt="Remy Sharp" src={edit_photo} sx={{ width: 32, height: 32 }} />}
      >
        <Avatar sx={{ width: 96, height: 96 }} alt="UserName" src={photo} sizes="small" />
      </Badge>
      <Typography
        component="div"
        sx={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}
      >
        <div style={{ display: 'flex', gap: '5px' }}>
          <EditableSpan changeTitle={editName} initTitle={name} />
          <img src={edit_name} alt="edit" />
        </div>
        <span
          style={{
            fontWeight: '400px',
            fontSize: '14px',
            lineHeight: '24px',
            opacity: 0.5,
          }}
        >
          {email}
        </span>
      </Typography>
    </>
  )
}
