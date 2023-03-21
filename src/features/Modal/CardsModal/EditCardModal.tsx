import React, { ChangeEvent, useState } from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'

import { useAppDispatch } from 'app/store'
import editCard from 'assets/icons/edit-2.svg'
import { BasicCardModal } from 'common/components/Modals/BasicCardModal'
import { updateCard } from 'features/Packs/Card/card-reducer'

type PropsType = {
  packId: string
  cardId: string
  questionProp: string
  answerProp: string
}
export const EditCardModal: React.FC<PropsType> = ({ packId, cardId, questionProp, answerProp }) => {
  const dispatch = useAppDispatch()

  const [questionFormat, setQuestionFormat] = useState('')
  const [question, setQuestion] = useState(questionProp)
  const [answer, setAnswer] = useState(answerProp)
  const handleEditCard = () => {
    dispatch(updateCard(packId, cardId, question, answer))
  }
  const handleChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => setQuestion(e.currentTarget.value)
  const handleChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => setAnswer(e.currentTarget.value)
  const handleChangeSelect = (event: SelectChangeEvent) => setQuestionFormat(event.target.value)

  return (
    <BasicCardModal deleteMode={false} onClick={handleEditCard} iconSrc={editCard} modalTitle={'Edit card'}>
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
    </BasicCardModal>
  )
}
