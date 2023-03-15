import React from 'react'

import Button from '@mui/material/Button'

import { common_button } from 'common/styles/LoginStyles'
import s from 'features/Packs/Card/Card.module.scss'

type Props = {
  onClick: () => void
}
export const EmptyPack: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={s.wrapperEmptyPack}>
      <p className={s.emptyPackText}>This pack is empty. Click add new card to fill this pack</p>
      <Button sx={common_button} onClick={onClick} variant={'contained'} color={'primary'}>
        Add new card
      </Button>
    </div>
  )
}
