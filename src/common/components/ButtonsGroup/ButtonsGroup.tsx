import React from 'react'

import { ButtonGroup, SxProps, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import { useAppSelector } from 'app/store'

type ButtonsGroupPropsType = {
  onClickMy: () => void
  onClickAll: () => void
}
export const ButtonsGroup: React.FC<ButtonsGroupPropsType> = React.memo(({ onClickMy, onClickAll }) => {
  const userId = useAppSelector(state => state.packs.queryParams.user_id)
  const onClickChanger = (f: () => void) => {
    return () => f()
  }

  const allActive: SxProps = {
    backgroundColor: !userId ? '#366EFF' : '',
    width: 80,
  }
  const myActive: SxProps = {
    backgroundColor: userId ? '#366EFF' : '',
    width: 80,
  }

  return (
    <Grid flex={'0 0 auto'}>
      <Typography margin={'0 0 8px 0'} fontSize={15} fontWeight={500}>
        Show packs cards
      </Typography>
      <ButtonGroup variant="outlined">
        <Button disabled={!!userId} onClick={onClickChanger(onClickMy)} size={'large'} sx={myActive}>
          My
        </Button>
        <Button disabled={!userId} onClick={onClickChanger(onClickAll)} size={'large'} color={'primary'} sx={allActive}>
          All
        </Button>
      </ButtonGroup>
    </Grid>
  )
})
