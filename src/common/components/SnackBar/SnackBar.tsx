import React from 'react'

import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

import { setAppError } from 'app/app-reducer'
import { selectAppError } from 'app/appSelectors'
import { useAppDispatch, useAppSelector } from 'app/store'

export const SnackBar = () => {
  const error = useAppSelector<string | null>(selectAppError)

  const dispatch = useAppDispatch()
  const handleClose = (event?: React.SyntheticEvent<any> | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(setAppError(null))
  }

  return (
    <Snackbar open={error !== null} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  )
}
