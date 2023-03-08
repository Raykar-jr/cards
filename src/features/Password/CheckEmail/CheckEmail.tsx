import React from 'react'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom'

import checkEmailImage from '../../../assets/images/checkEmail.svg'

import s from './CheckEmail.module.css'

import { useAppSelector } from 'app/store'
import { PATH } from 'common/path/path'
import { checkEmailButton, common_button } from 'common/styles/LoginStyles'

export const CheckEmail = () => {
  const email = useAppSelector<string>(state => state.recovery.email)

  const navigate = useNavigate()
  const onClickHandler = () => {
    navigate(PATH.LOGIN.LOGIN)
  }

  return (
    <div>
      <Grid container display="flex" justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
          <Paper elevation={3} className={s.mainContainer}>
            <p className={s.h1}>Check email</p>
            <div>
              <img src={checkEmailImage} alt="" />
            </div>
            <p className={s.optionalText}>We’ve sent an Email with instructions to {email}</p>
            <Button
              style={checkEmailButton}
              sx={common_button}
              variant={'contained'}
              color={'primary'}
              onClick={onClickHandler}
            >
              Back to login
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
