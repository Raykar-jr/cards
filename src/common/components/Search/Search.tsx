import React from 'react'

import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'

export const Search = () => {
  return (
    <div>
      <TextField variant="outlined" InputProps={{ startAdornment: <SearchIcon /> }} />
    </div>
  )
}
