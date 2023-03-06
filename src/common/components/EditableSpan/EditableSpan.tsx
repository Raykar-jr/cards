import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

import { TextField } from '@mui/material'

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
        variant="standard"
        value={title}
        onBlur={activateEditModule}
        onChange={onChangeHandler}
        onKeyDown={onEnter}
        autoFocus
      />
    ) : (
      <span
        onDoubleClick={activateEditModule}
        style={{
          fontSize: '20px',
        }}
      >
        {title}
      </span>
    )
  }
)
