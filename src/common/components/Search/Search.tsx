import React from 'react'

import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'

import s from './Search.module.scss'

export const Search = () => {
  return (
    <div className={s.searchContainer}>
      <p>Search</p>
      <TextField
        variant="outlined"
        size="small"
        InputProps={{ startAdornment: <SearchIcon sx={{ height: '36px' }} /> }}
      />
    </div>
  )
}
