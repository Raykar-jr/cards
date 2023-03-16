import React from 'react'

import { ListItemIcon, Menu, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from 'app/store'
import user from 'assets/icons/user.svg'
import profile_logout from 'assets/images/profile_logout.svg'
import { PATH } from 'common/path/path'
import { logout } from 'features/Login/login-reducer'

type MenuPropsType = {
  anchorEl: null | HTMLElement
  setAnchorEl: (anchorEl: null | HTMLElement) => void
}
export const AccountMenu: React.FC<MenuPropsType> = ({ anchorEl, setAnchorEl }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const open = Boolean(anchorEl)
  const closeHandler = () => {
    setAnchorEl(null)
  }
  const logoutHandler = () => {
    dispatch(logout())
  }
  const redirectToProfileHandler = () => {
    navigate(PATH.PROFILE.PROFILE)
  }

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={closeHandler}
        onClick={closeHandler}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={redirectToProfileHandler}>
          <ListItemIcon>
            <img src={user} alt="user" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={logoutHandler}>
          <ListItemIcon>
            <img src={profile_logout} alt="edit" />
          </ListItemIcon>
          Log out
        </MenuItem>
      </Menu>
    </>
  )
}
