import React from 'react'

import { ButtonGroup, Typography } from '@mui/material'
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
  const activeMy = userId ? 'outlined' : 'contained'
  const activeAll = !userId ? 'outlined' : 'contained'

  return (
    <Grid flex={'0 0 auto'}>
      <Typography margin={'0 0 8px 0'} fontSize={15} fontWeight={500}>
        Show packs cards
      </Typography>
      <ButtonGroup variant="contained">
        <Button disabled={!!userId} variant={activeMy} onClick={onClickChanger(onClickMy)} size={'large'}>
          My
        </Button>
        <Button disabled={!userId} variant={activeAll} onClick={onClickChanger(onClickAll)} size={'large'}>
          All
        </Button>
      </ButtonGroup>
    </Grid>
  )
})
