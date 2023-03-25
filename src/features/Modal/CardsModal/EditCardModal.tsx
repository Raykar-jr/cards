import React, { ChangeEvent, useState } from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'

import { useAppDispatch } from 'app/store'
import editCard from 'assets/icons/edit-2.svg'
import { InputTypeFile } from 'common/components/InputTypeFile'
import { BasicModal } from 'common/components/Modals/BasicModal'
import { qFormat } from 'features/Modal/CardsModal/AddCardModal'
import { updateCard } from 'features/Packs/Card/card-reducer'

type PropsType = {
  packId: string
  cardId: string
  questionProp: string
  answerProp: string
  questionImgProp?: string
}
export const EditCardModal: React.FC<PropsType> = ({ packId, cardId, questionProp, answerProp, questionImgProp }) => {
  const dispatch = useAppDispatch()

  const [questionFormat, setQuestionFormat] = useState(questionImgProp ? 2 : 1)
  const [question, setQuestion] = useState(questionImgProp ? '' : questionProp)
  const [questionImg, setQuestionImg] = useState('')
  const [answer, setAnswer] = useState(answerProp)
  const [questionError, setQuestionError] = useState(false)
  const [answerError, setAnswerError] = useState(false)

  const isEmptyField = !answer.trim()
  const previousFieldsName = answer === answerProp
  const handleEditCard = () => {
    dispatch(updateCard(packId, cardId, question, answer, questionImg))
  }
  const handleChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.currentTarget.value)
    setQuestionError(false)
  }
  const handleChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.currentTarget.value)
    setAnswerError(false)
  }
  const handleChangeSelect = (event: SelectChangeEvent) => setQuestionFormat(+event.target.value)
  const handleTextFieldError = () => {
    setQuestionError(question.trim() === '')
    setAnswerError(answer.trim() === '')
  }
  const handleChangeQuestionImg = (file64: string) => {
    setQuestionImg(file64)
  }

  return (
    <BasicModal
      deleteMode={false}
      disabled={isEmptyField || previousFieldsName}
      onClick={handleEditCard}
      iconSrc={editCard}
      modalTitle={'Edit card'}
    >
      <FormControl variant="standard" sx={{ m: 0.5, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Question format</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={questionFormat + ''}
          onChange={handleChangeSelect}
          label="Question format"
        >
          <MenuItem value={1}>Text</MenuItem>
          <MenuItem value={2}>Image</MenuItem>
        </Select>
      </FormControl>

      {questionFormat === qFormat.text && (
        <TextField
          error={questionError}
          value={question}
          onBlur={handleTextFieldError}
          onChange={handleChangeQuestion}
          fullWidth
          label="Question"
          variant="standard"
          helperText={question.trim() === '' && 'The question field must not be empty'}
        />
      )}

      {questionFormat === qFormat.image && (
        <>
          <img style={{ maxWidth: '350px', maxHeight: '150px' }} src={questionImgProp} alt="question card cover" />
          <InputTypeFile buttonTitle={'Update question image'} callBack={handleChangeQuestionImg} />
        </>
      )}

      <TextField
        value={answer}
        error={answerError}
        onBlur={handleTextFieldError}
        onChange={handleChangeAnswer}
        fullWidth
        label="Answer"
        variant="standard"
        helperText={answer.trim() === '' && 'The answer field must not be empty'}
      />
    </BasicModal>
  )
}
