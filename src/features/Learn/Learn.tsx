import React, { useEffect, useState } from 'react'

import { Card, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'app/store'
import { ArrowBackToPacks } from 'common/components/ArrowBackToPacks/ArrowBackToPacks'
import { common_button } from 'common/styles/LoginStyles'
import { getRandomCard } from 'common/utils/getRandomCard'
import { Answer } from 'features/Learn/Answer'
import { setCard } from 'features/Learn/learn-reducer'
import { getAllCards, resetPackCard } from 'features/Packs/Card/card-reducer'

export const Learn = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const { packId } = useParams<{ packId: string }>()
  const dispatch = useAppDispatch()
  const packName = useAppSelector(state => state.cards.packName)

  const cards = useAppSelector(state => state.cards.cards)
  const card = useAppSelector(state => state.learn.card)
  const packs = useAppSelector(state => state.packs.packList.cardPacks.filter(p => p._id == packId))
  const showHandler = () => setIsChecked(true)

  useEffect(() => {
    packId && dispatch(getAllCards(packId, packs[0].cardsCount))

    return () => {
      dispatch(resetPackCard())
    }
  }, [])

  useEffect(() => {
    cards?.length && dispatch(setCard(getRandomCard(cards)))
  }, [cards])

  const onNext = () => {
    setIsChecked(false)
    if (cards.length > 0) {
      dispatch(setCard(getRandomCard(cards)))
    }
  }

  return (
    <>
      <ArrowBackToPacks />
      <Grid container display="flex" alignItems="center" flexDirection="column" gap="2rem" marginY="27px">
        <Typography variant={'h1'} fontSize={22} fontWeight={600} textAlign={'center'}>
          {`Learn: "${packName}"`}
        </Typography>
        <Card
          variant="outlined"
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            p: '30px 40px 48px 40px',
            gap: '1rem',
            borderRadius: '2px',
            boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span>
            <b>Question: </b>
            {card.question}
          </span>
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              opacity: 0.5,
            }}
          >
            Количество попыток ответов на вопрос: {card.shots}
          </span>
          {isChecked ? (
            <Answer onNext={onNext} card_id={card._id} answer={card.answer} />
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
        </Card>
      </Grid>
    </>
  )
}
