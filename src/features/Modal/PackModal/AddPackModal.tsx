import React, { ChangeEvent, useState } from 'react'

import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'

import { useAppDispatch } from 'app/store'
import { BasicModal } from 'common/components/Modals/BasicModal'
import { createPackTC } from 'features/Packs/packs-reducer'

export const AddPackModal = () => {
  const dispatch = useAppDispatch()

  const [packName, setPackName] = useState('')
  const [privatePack, setPrivatePack] = useState(false)
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState('Name Pack')

  const handleChangePackName = (e: ChangeEvent<HTMLInputElement>) => {
    setPackName(e.currentTarget.value)
    actionError(false, '')
  }
  const handleChangePackPrivate = (e: ChangeEvent<HTMLInputElement>) => setPrivatePack(e.currentTarget.checked)

  const handleCreatPack = () => {
    dispatch(createPackTC({ params: {}, data: { name: packName, private: privatePack } }))
    setPackName('')
    setError(false)
  }
  const handleError = () => {
    if (packName.trim().length === 0) {
      actionError(true, 'Please enter pack name')
    }
  }

  const actionError = (error: boolean, text: string) => {
    setError(error)
    setHelperText(text)
  }

  return (
    <BasicModal
      deleteMode={false}
      onClick={handleCreatPack}
      modalTitle={'Add new Pack'}
      buttonName={'Add new Pack'}
      disabled={!packName.trim()}
      onClickClose={actionError}
    >
      <FormControl fullWidth variant="standard">
        <TextField
          error={error}
          onBlur={handleError}
          helperText={helperText}
          value={packName}
          onChange={handleChangePackName}
          fullWidth
          label={'Pack Name'}
          variant="standard"
        />
      </FormControl>

      <FormControlLabel label="Private cards" control={<Checkbox onChange={handleChangePackPrivate} />} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}></div>
    </BasicModal>
  )
}
