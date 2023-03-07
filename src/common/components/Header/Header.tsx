import * as React from 'react'

import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

// import s from './Header.module.css'

import { useAppSelector } from 'app/store'
import photo from 'assets/images/photo.svg'
import { PATH } from 'common/path/path'
import { common_button } from 'common/styles/LoginStyles'

export const Header = () => {
  const navigate = useNavigate()
  const name = ''
  const isLoggedIn = useAppSelector<boolean>(state => state.login.isLoggedIn) || true
  const loginHandler = () => {
    navigate(PATH.LOGIN.LOGIN)
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ bgcolor: '#FCFCFC' }} position="fixed">
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                Cards
              </Typography>
              {isLoggedIn ? (
                <Typography
                  component="div"
                  sx={{ color: 'black', display: 'flex', alignItems: 'center', gap: '12px' }}
                >
                  <span>{name}</span>
                  <Avatar sx={{ width: 36, height: 36 }} alt="UserName" src={photo} sizes="small" />
                </Typography>
              ) : (
                <Button sx={common_button} variant="contained" onClick={loginHandler}>
                  Sign In
                </Button>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  )
}
