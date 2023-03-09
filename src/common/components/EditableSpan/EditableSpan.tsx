import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import s from './EditableSpan.module.scss'

import edit_name from 'assets/images/edit_name.svg'

type EditableSpanPropsType = {
  initTitle: string
  changeTitle: (title: string) => void
}

export const EditableSpan: React.FC<EditableSpanPropsType> = React.memo(
  ({ initTitle, changeTitle }) => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(initTitle)
    const change = () => title !== initTitle && changeTitle(title)
    const activateEditModule = () => {
      setIsEditMode(!isEditMode)
      change()
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
  }
)
