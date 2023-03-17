import React, { useEffect, useState } from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import s from './RangeSlader.module.scss'

import { SuperRange } from 'common/components/SuperRange/SuperRange'

type RangeCardsPropsType = {
  values: number[]
  minMax: number[]
  onChange: (event: any, numbers: number[] | number) => void
}
export const RangeCards: React.FC<RangeCardsPropsType> = React.memo(({ values, minMax, onChange }) => {
  const [value, setValue] = useState<number[]>(values)

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  useEffect(() => {
    if (minMax[0] === value[0] && minMax[1] === value[1]) return
    setValue(values)
  }, [values])

  useEffect(() => {
    setValue(values)
  }, [values[0], values[1]])

  return (
    <Grid item flex={'0 0 200px'}>
      <Typography margin={'0 0 8px 0'} fontSize={15} fontWeight={500}>
        Number of cards
      </Typography>
      <div className={s.sliderContainer}>
        <div className={s.number}>{value[0]}</div>
        <SuperRange
          onChangeCommitted={onChange}
          onChange={handleChange}
          value={value}
          min={values[0]}
          max={values[1]}
          disabled={!values[1]}
        />
        <div className={s.number}>{value[1]}</div>
      </div>
    </Grid>
  )
})
