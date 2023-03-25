import React from 'react'

import { Radio, RadioGroup } from '@mui/material'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { UpdateGradeRequestType } from 'common/api/DataTypes'
import { common_button } from 'common/styles/LoginStyles'
import { updateGradeTC } from 'features/Learn/learn-reducer'

const grades = ['Did not know', 'Forgot', 'A lot of thought', 'Confused', 'Knew the answer']

type AnswerPropsType = {
  card_id?: string
  onNext: () => void
  answer: string
}
export const Answer: React.FC<AnswerPropsType> = React.memo(({ onNext, card_id, answer }) => {
  const dispatch = useDispatch()
  const { handleSubmit, register } = useForm<UpdateGradeRequestType>()

  const sendGradeHandler = (data: UpdateGradeRequestType) => {
    // @ts-ignore
    dispatch(updateGradeTC({ grade: +data.grade, card_id }))
    onNext()
  }

  return (
    <>
      <span>
        <b>Answer: </b>
        {answer}
      </span>
      <form onSubmit={handleSubmit(sendGradeHandler)} style={{ marginTop: '1rem', width: '100%' }}>
        <FormLabel style={{ color: 'black' }}>Rate yourself:</FormLabel>
        <RadioGroup defaultValue="1">
          {grades.map((grade, i) => (
            <FormControlLabel key={'grade' + i} value={++i} control={<Radio {...register('grade')} />} label={grade} />
          ))}
        </RadioGroup>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          style={common_button}
          sx={{ mt: '2rem', width: '100%' }}
        >
          Next
        </Button>
      </form>
    </>
  )
})
