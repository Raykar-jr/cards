import React, { ReactNode, useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

import s from 'common/components/Modals/BasicModal.module.scss'
import { common_button } from 'common/styles/LoginStyles'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  gap: 3,
  display: 'flex',
  flexDirection: 'column',
}

type PropsType = {
  children: ReactNode
  modalTitle: string
  buttonName?: string
  iconSrc?: string
  onClick: () => void
  deleteMode: boolean
}
export const BasicModal: React.FC<PropsType> = ({ children, modalTitle, buttonName, iconSrc, onClick, deleteMode }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleOnSaveOrRemove = () => {
    setOpen(false)
    onClick()
  }

  return (
    <div>
      <Button
        variant={buttonName ? 'contained' : undefined}
        sx={iconSrc ? { minWidth: '24px' } : common_button}
        onClick={handleOpen}
        className={iconSrc ? s.button : ''}
      >
        <img src={iconSrc} alt="" />
        {buttonName}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="h2">
              {modalTitle}
            </Typography>
            <Button color="primary" onClick={handleClose} variant="outlined" size="small">
              ✖️
            </Button>
          </Box>

          {children}

          <div className={s.lowerButtonGroup}>
            <Button onClick={handleClose} sx={common_button} variant={'contained'}>
              Cancel
            </Button>
            {deleteMode ? (
              <Button onClick={handleOnSaveOrRemove} sx={common_button} variant={'contained'} color="error">
                Delete
              </Button>
            ) : (
              <Button onClick={handleOnSaveOrRemove} sx={common_button} variant={'contained'}>
                Save
              </Button>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  )
}
