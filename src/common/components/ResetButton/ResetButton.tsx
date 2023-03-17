import React from 'react'

import FilterAltOffIcon from '@mui/icons-material/FilterAltOff'
import IconButton from '@mui/material/IconButton'

type ResetButtonPropsType = {
  onClick: () => void
}

export const ResetButton: React.FC<ResetButtonPropsType> = React.memo(({ onClick }) => {
  return (
    <IconButton
      size={'small'}
      sx={{ backgroundColor: '#fff', border: ' 1px solid #E8E8E8', borderRadius: '2px' }}
      onClick={onClick}
    >
      <FilterAltOffIcon />
    </IconButton>
  )
})
