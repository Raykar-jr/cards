import React from 'react'

import { Slider, SliderProps } from '@mui/material'

export const SuperRange: React.FC<SliderProps> = props => {
  return (
    <Slider
      sx={{
        width: '155px',
        color: '#366EFF',
        '& .MuiSlider-rail': {
          color: '#366EFF',
        },
        '& .MuiSlider-thumb': {
          color: '#fff',
          width: '16px',
          height: '16px',
          border: '4px solid #366EFF',
        },
      }}
      step={1}
      getAriaLabel={() => 'Temperature range'}
      {...props}
    />
  )
}
