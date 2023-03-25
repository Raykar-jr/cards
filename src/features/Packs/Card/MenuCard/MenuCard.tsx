import React from 'react'

import { ListItemIcon, Menu, MenuItem } from '@mui/material'

import { useAppDispatch } from 'app/store'
import editPack from 'assets/icons/edit-2.svg'
import learn from 'assets/icons/teacher.svg'
import removePack from 'assets/icons/trash.svg'

type MenuPropsType = {
  anchorEl: null | HTMLElement
  setAnchorEl: (anchorEl: null | HTMLElement) => void
  redirectToLearn: () => void
}
export const MenuCard: React.FC<MenuPropsType> = ({ anchorEl, setAnchorEl, redirectToLearn }) => {
  const dispatch = useAppDispatch()
  const open = Boolean(anchorEl)
  const closeHandler = () => {
    setAnchorEl(null)
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
        <MenuItem onClick={() => {}}>
          <ListItemIcon>
            <img src={editPack} alt="edit icon" />
          </ListItemIcon>
          Edit
        </MenuItem>
        <MenuItem onClick={() => {}}>
          <ListItemIcon>
            <img src={removePack} alt="delete icon" />
          </ListItemIcon>
          Delete
        </MenuItem>
        <MenuItem onClick={redirectToLearn}>
          <ListItemIcon>
            <img src={learn} alt="learn icon" />
          </ListItemIcon>
          Learn
        </MenuItem>
      </Menu>
    </>
  )
}
