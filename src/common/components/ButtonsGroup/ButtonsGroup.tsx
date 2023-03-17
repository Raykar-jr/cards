import React from 'react'

import { ButtonGroup, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export const ButtonsGroup = () => {
  return (
    <Grid flex={'0 0 auto'}>
      <Typography margin={'0 0 8px 0'} fontSize={15} fontWeight={500}>
        Show packs cards
      </Typography>
      <ButtonGroup variant="contained">
        <Button size={'large'}>My</Button>
        <Button size={'large'}>All</Button>
      </ButtonGroup>
    </Grid>
  )
}
