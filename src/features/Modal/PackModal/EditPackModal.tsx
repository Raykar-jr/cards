import React, { ChangeEvent, useState } from 'react'

import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'

import { useAppDispatch } from 'app/store'
import editPack from 'assets/icons/edit-2.svg'
import { BasicModal } from 'common/components/Modals/BasicModal'
import { editCards } from 'features/Packs/Card/card-reducer'
import { updatePackTC } from 'features/Packs/packs-reducer'

type PropsType = {
  nameProp: string
  privateProp: boolean
  packId: string
  menuName?: string
  onClose?: () => void
}
export const EditPackModal: React.FC<PropsType> = ({ onClose, packId, privateProp, nameProp, ...restProps }) => {
  const dispatch = useAppDispatch()

  const [packName, setPackName] = useState(nameProp)
  const [privatePack, setPrivatePack] = useState(privateProp)
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState('Name Pack')

  const handleChangePackName = (e: ChangeEvent<HTMLInputElement>) => {
    setPackName(e.currentTarget.value)
    actionError(false, '')
  }
  const handleChangePackPrivate = (e: ChangeEvent<HTMLInputElement>) => setPrivatePack(e.currentTarget.checked)
  const handleCloseMenu = () => {
    onClose && onClose()
  }
  const handleEditPack = () => {
    dispatch(
      updatePackTC({
        data: {
          name: packName,
          private: privatePack,
          _id: packId,
        },
      })
    )
    restProps.menuName && dispatch(editCards({ packName, packPrivate: privatePack }))
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
  const handleOnClickClose = () => {
    actionError(false, '')
    setPackName(nameProp)
    onClose && onClose()
  }

  return (
    <BasicModal
      deleteMode={false}
      onClick={handleEditPack}
      onCloseMenu={handleCloseMenu}
      modalTitle={'Edit card'}
      iconSrc={editPack}
      disabled={packName === nameProp || packName.trim().length === 0}
      onClickClose={handleOnClickClose}
      {...restProps}
    >
      <FormControl fullWidth variant="standard">
        <TextField
          onBlur={handleError}
          value={packName}
          error={error}
          helperText={helperText}
          onChange={handleChangePackName}
          fullWidth
          label={'Name Pack'}
          variant="standard"
        />
      </FormControl>

      <FormControlLabel label="Private cards" control={<Checkbox onChange={handleChangePackPrivate} />} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}></div>
    </BasicModal>
  )
}
