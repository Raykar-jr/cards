import React, { useEffect } from 'react'

import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'app/store'
import { ArrowBackToPacks } from 'common/components/ArrowBackToPacks/ArrowBackToPacks'
import { CardSkeleton } from 'common/components/CardSkeleton/CardSkeleton'
import { CardLearn } from 'features/Learn/CardLearn'
import { resetCardLearn } from 'features/Learn/learn-reducer'
import { getAllCards, resetPackCard } from 'features/Packs/Card/card-reducer'

export const Learn = () => {
  const { packId } = useParams<{ packId: string }>()
  const dispatch = useAppDispatch()
  const packName = useAppSelector(state => state.cards.packName)

  const packs = useAppSelector(state => state.packs.packList.cardPacks.filter(p => p._id == packId))
  const status = useAppSelector(state => state.app.status)

  useEffect(() => {
    packId && dispatch(getAllCards(packId, packs[0].cardsCount))

    return () => {
      dispatch(resetPackCard())
      dispatch(resetCardLearn())
    }
  }, [])

  return (
    <>
      <ArrowBackToPacks />
      <Grid container display="flex" alignItems="center" flexDirection="column" gap="2rem" marginY="27px">
        <Typography variant={'h1'} fontSize={22} fontWeight={600} textAlign={'center'}>
          {`Learn: "${packName}"`}
        </Typography>
        {status === 'loading' ? <CardSkeleton /> : <CardLearn />}
      </Grid>
    </>
  )
}
