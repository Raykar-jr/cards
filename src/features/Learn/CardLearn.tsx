import React, { useEffect, useState } from 'react'

import { Card } from '@mui/material'
import Button from '@mui/material/Button'

import s from './Style.module.scss'

import { useAppDispatch, useAppSelector } from 'app/store'
import confetti from 'assets/icons/confetti.svg'
import { common_button } from 'common/styles/LoginStyles'
import { getRandomCard } from 'common/utils'
import { Answer } from 'features/Learn/Answer'
import { setCard } from 'features/Learn/learn-reducer'

export const CardLearn = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [isAllStudied, setIsAllStudied] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const card = useAppSelector(state => state.learn.card)
  const cards = useAppSelector(state => state.cards.cards)
  const randomCard = () => {
    const resultRandom = getRandomCard(cards)

    if (resultRandom) cards?.length && dispatch(setCard(resultRandom))
    else setIsAllStudied(true)
  }

  useEffect(() => {
    randomCard()
  }, [])
  const onNext = () => {
    setIsChecked(false)
    randomCard()
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
        gap: '0.5rem',
        borderRadius: '2px',
        boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.1)',
        maxWidth: '450px',
      }}
    >
      {!isAllStudied ? (
        <>
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
        </>
      ) : (
        <span className={s.allStudied}>
          <img src={confetti} alt="confetti img" />
          All cards learned <img src={confetti} alt="confetti img" />
        </span>
      )}
    </Card>
  )
}
