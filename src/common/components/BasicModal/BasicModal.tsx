import React, { ReactNode } from 'react'

import IconButton from '@mui/material/IconButton/IconButton'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography/Typography'

import { useAppDispatch } from 'app/store'
import closeIcon from 'assets/icons/closeIcon.svg'
import styles from 'common/components/BasicModal/BasicModal.module.scss'
import { closeModal } from 'features/Modal/PackModal/modal-reducer'

type PropsType = {
  children?: ReactNode
  title: string | null
}

export const BasicModal: React.FC<PropsType> = ({ children, title }) => {
  const dispatch = useAppDispatch()

  const onCloseHandler = () => {
    dispatch(closeModal())
  }

  return (
    <div>
      <Modal open={!!title} sx={{ zIndex: 1 }} onClose={onCloseHandler}>
        <div className={styles.main}>
          <div className={styles.header}>
            <Typography className={styles.title}>{title}</Typography>
            <IconButton onClick={onCloseHandler}>
              <img src={closeIcon} alt="close" />
            </IconButton>
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      </Modal>
    </div>
  )
}
