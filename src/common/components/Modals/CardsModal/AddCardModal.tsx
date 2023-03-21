import React, { ChangeEvent, useState } from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'

import { useAppDispatch } from 'app/store'
import { BasicModal } from 'common/components/Modals/BasicModal'
import { createCard } from 'features/Packs/Card/card-reducer'

type PropsType = {
  packId?: string
}
export const AddCardModal: React.FC<PropsType> = ({ packId }) => {
  const [questionFormat, setQuestionFormat] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const dispatch = useAppDispatch()
  const handleCreatCard = () => {
    packId && dispatch(createCard(packId, question, answer))
  }
  const handleChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => setQuestion(e.currentTarget.value)
  const handleChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => setAnswer(e.currentTarget.value)
  const handleChangeSelect = (event: SelectChangeEvent) => setQuestionFormat(event.target.value)

  return (
    <BasicModal deleteMode={false} onClick={handleCreatCard} modalTitle={'Add new card'} buttonName={'Add new card'}>
      <FormControl variant="standard" sx={{ m: 0.5, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Question format</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={questionFormat}
          onChange={handleChangeSelect}
          label="Question format"
        >
          <MenuItem value={1}>Text</MenuItem>
          <MenuItem value={2}>Image</MenuItem>
        </Select>
      </FormControl>

      <TextField value={question} onChange={handleChangeQuestion} fullWidth label="Question" variant="standard" />

      <TextField value={answer} onChange={handleChangeAnswer} fullWidth label="Answer" variant="standard" />
    </BasicModal>
  )
}
