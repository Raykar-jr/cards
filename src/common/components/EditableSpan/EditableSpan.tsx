import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import s from './EditableSpan.module.scss'

import edit_name from 'assets/images/edit_name.svg'

type EditableSpanPropsType = {
  initTitle: string
  changeTitle: (title: string) => void
}

export const EditableSpan: React.FC<EditableSpanPropsType> = React.memo(({ initTitle, changeTitle }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(initTitle)
  const [error, setError] = useState<string | null>(null)
  const change = () => title !== initTitle && changeTitle(title)

  const activateEditModule = () => {
    if (title !== '' && title.length <= 30) {
      setError(null)
      setIsEditMode(!isEditMode)
      change()
    } else setError('Invalid Nickname')
  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value.trimStart())
  }
  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      change()
      setIsEditMode(!isEditMode)
    }
  }

  return isEditMode ? (
    <TextField
      label="Nickname"
      variant="standard"
      value={title}
      onBlur={activateEditModule}
      onChange={onChangeHandler}
      onKeyDown={onEnter}
      autoFocus
      sx={{ width: '100%' }}
      error={!!error}
      helperText={error}
      InputProps={{
        endAdornment: (
          <Button
            onClick={activateEditModule}
            variant="contained"
            sx={{
              height: 24,
              width: 54,
              fontWeight: 400,
              fontSize: '12px',
              bgcolor: '#366EFF',
              borderRadius: '2px',
              ml: '5px',
            }}
          >
            SAVE
          </Button>
        ),
      }}
    />
  ) : (
    <>
      <span className={s.nickname}>{title}</span>
      <button className={s.button} onClick={activateEditModule}>
        <img src={edit_name} alt="edit" />
      </button>
    </>
  )
})
