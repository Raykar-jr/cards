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

import { useAppDispatch, useAppSelector } from 'app/store'
import photo from 'assets/images/photo.svg'
import { PATH } from 'common/path/path'
import { common_button } from 'common/styles/LoginStyles'
import { logout } from 'features/Login/login-reducer'

export const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const name = 'Snezhok'
  const isLoggedIn = useAppSelector<boolean>(state => state.login.isLoggedIn)
  const loginHandler = () => {
    navigate(PATH.LOGIN.LOGIN)
  }
  const logOutHandler = () => {
    dispatch(logout())
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
                  <Button sx={common_button} variant="contained" onClick={logOutHandler}>
                    Log out
                  </Button>
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
