import React, { useState } from 'react'

import { Paper } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { useParams } from 'react-router-dom'

import s from './Learn.module.scss'

import { useAppSelector } from 'app/store'
import { ArrowBackToPacks } from 'common/components/ArrowBackToPacks/ArrowBackToPacks'
import { common_button } from 'common/styles/LoginStyles'
import { Answer } from 'features/Learn/Answer'

export const Learn = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const { packId } = useParams()
  const pack = useAppSelector(state => state.packs.packList.cardPacks.filter(p => p._id === packId))
  const cards = useAppSelector(state => state.cards.cards)
  const showHandler = () => setIsChecked(true)

  return (
    <>
      <ArrowBackToPacks />
      <Grid container display="flex" alignItems="center" flexDirection="column" gap="2rem" marginY="27px">
        <span className={s.title}>{`Learn "${pack[0].name.trim()}"`}</span>
        <Paper
          elevation={2}
          sx={{
            p: '30px 33px 48px 33px',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            gap: '1rem',
            borderRadius: '2px',
            boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span>
            <b>Question: </b>
            {}
          </span>
          <p className={s.text}>Количество попыток ответов на вопрос:{}</p>
          {isChecked ? (
            <Answer />
          ) : (
            <Button
              onClick={showHandler}
              color="primary"
              variant="contained"
              style={common_button}
              sx={{ mt: '1rem', width: '100%' }}
            >
              Show Answer
            </Button>
          )}
        </Paper>
      </Grid>
    </>
  )
}
