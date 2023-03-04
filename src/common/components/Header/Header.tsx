import * as React from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

import s from './Header.module.css'

import { PATH } from 'common/path/path'

export const Header = () => {
  const navigate = useNavigate()

  const loginHandler = () => {
    navigate(PATH.LOGIN.LOGIN)
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ bgcolor: '#FCFCFC' }} position="fixed">
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#366EFF' }}>
                Cards
              </Typography>
              <Button
                sx={{ borderRadius: '30px' }}
                className={s.button}
                variant="contained"
                onClick={loginHandler}
              >
                Sign In
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  )
}
