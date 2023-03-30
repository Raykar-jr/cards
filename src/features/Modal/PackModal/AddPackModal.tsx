import React, { ChangeEvent, useState } from 'react'

import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'

import { useAppDispatch } from 'app/store'
import { InputTypeFile } from 'common/components/InputTypeFile'
import { BasicModal } from 'common/components/Modals/BasicModal'
import { createPackTC } from 'features/Packs/packs-reducer'

export const AddPackModal = () => {
  const dispatch = useAppDispatch()

  const [packName, setPackName] = useState('')
  const [privatePack, setPrivatePack] = useState(false)
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState('Name Pack')
  const [packDeckCover, setPackDeckCover] = useState('')

  const handleChangePackName = (e: ChangeEvent<HTMLInputElement>) => {
    setPackName(e.currentTarget.value)
    if (packName.length <= 100) {
      actionError(false, '')
    } else {
      actionError(true, 'Max length of the pack name should be less 100 symbols')
    }
  }
  const handleChangePackPrivate = (e: ChangeEvent<HTMLInputElement>) => setPrivatePack(e.currentTarget.checked)

  const handleCreatPack = () => {
    dispatch(createPackTC({ data: { name: packName, private: privatePack, deckCover: packDeckCover } }))
    setPackName('')
    setError(false)
  }
  const handleError = () => {
    if (packName.trim().length === 0) {
      actionError(true, 'Please enter pack name')
    }
    if (packName.trim().length >= 100) {
      actionError(true, 'Max length of the pack name should be less 100 symbols')
    }
  }

  const actionError = (error: boolean, text: string) => {
    setError(error)
    setHelperText(text)
  }
  const handleAddCover = (file64: string) => setPackDeckCover(file64)

  return (
    <BasicModal
      deleteMode={false}
      onClick={handleCreatPack}
      modalTitle={'Add new pack'}
      buttonName={'Add new pack'}
      disabled={!packName.trim() || packName.length >= 100}
      onClickClose={actionError}
    >
      <img style={{ maxHeight: '200px', width: '100%' }} src={packDeckCover} alt="pack cover" />
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
      <InputTypeFile buttonTitle="Upload pack cover" callBack={handleAddCover} />
    </BasicModal>
  )
}
