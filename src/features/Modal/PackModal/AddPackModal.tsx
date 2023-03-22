import React, { ChangeEvent, useState } from 'react'

import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'

import { useAppDispatch } from 'app/store'
import { BasicCardModal } from 'common/components/Modals/BasicCardModal'
import { createPackTC } from 'features/Packs/packs-reducer'

export const AddPackModal = () => {
  const [packName, setPackName] = useState('')
  const [privatePack, setPrivatePack] = useState(false)

  const handleChangePackName = (e: ChangeEvent<HTMLInputElement>) => setPackName(e.currentTarget.value)
  const handleChangePackPrivate = (e: ChangeEvent<HTMLInputElement>) => setPrivatePack(e.currentTarget.checked)
  const dispatch = useAppDispatch()
  const handleCreatPack = () => {
    dispatch(createPackTC({ params: {}, data: { name: packName, private: privatePack } }))
  }

  return (
    <BasicCardModal
      deleteMode={false}
      onClick={handleCreatPack}
      modalTitle={'Add new Pack'}
      buttonName={'Add new Pack'}
    >
      <FormControl fullWidth variant="standard">
        <TextField value={packName} onChange={handleChangePackName} fullWidth label={'Name Pack'} variant="standard" />
      </FormControl>

      <FormControlLabel label="Private cards" control={<Checkbox onChange={handleChangePackPrivate} />} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}></div>
    </BasicCardModal>
  )
}
