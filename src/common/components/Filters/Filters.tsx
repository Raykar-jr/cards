import { PropsWithChildren } from 'react'

import Grid from '@mui/material/Grid'

export const Filters: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid container justifyContent={'space-between'} alignItems={'center'}>
      {children}
    </Grid>
  )
}
