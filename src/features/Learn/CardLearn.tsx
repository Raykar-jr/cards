import React, { useEffect, useState } from 'react'

import { Card } from '@mui/material'
import Button from '@mui/material/Button'

import { useAppDispatch, useAppSelector } from 'app/store'
import { common_button } from 'common/styles/LoginStyles'
import { getRandomCard } from 'common/utils/getRandomCard'
import { Answer } from 'features/Learn/Answer'
import { setCard } from 'features/Learn/learn-reducer'

export const CardLearn = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const card = useAppSelector(state => state.learn.card)
  const cards = useAppSelector(state => state.cards.cards)

  useEffect(() => {
    cards?.length && dispatch(setCard(getRandomCard(cards)))
  }, [cards])
  const onNext = () => {
    setIsChecked(false)
    cards?.length && dispatch(setCard(getRandomCard(cards)))
  }
  const showHandler = () => setIsChecked(true)

  return (
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
        maxWidth: '450px',
      }}
    >
      <span style={{ wordBreak: 'break-word' }}>
        <b>Question: </b>
        {card.questionImg ? (
          <img
            style={{ height: '100%', marginTop: '10px', width: '100%' }}
            src={card.questionImg}
            alt="question card cover"
          />
        ) : (
          card.question
        )}
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
        <Answer onNext={onNext} card_id={card._id} answer={card.answer} answerImg={card.answerImg} />
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
  )
}
