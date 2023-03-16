import React, { ChangeEvent, useEffect, useState } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import { useDebounce } from 'common/hooks/use-debounce'

type SearchPropsType = {
  onChange: (search: string) => void
}
export const Search: React.FC<SearchPropsType> = React.memo(({ onChange }) => {
  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 500)
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  useEffect(() => {
    onChange(value)
  }, [debouncedValue])

  return (
    <Grid flex={'0 0 auto'}>
      <Typography margin={'0 0 8px 0'} fontSize={15} fontWeight={500}>
        Search
      </Typography>
      <TextField
        onChange={onChangeHandler}
        value={value}
        variant="outlined"
        size="small"
        placeholder={'Provide your text'}
        InputProps={{ startAdornment: <SearchIcon sx={{ height: 36, mr: '5px' }} color={'disabled'} /> }}
      />
    </Grid>
  )
})
