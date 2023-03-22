import React, { ChangeEvent, useState } from 'react'

import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'

import { useAppDispatch } from 'app/store'
import editPack from 'assets/icons/edit-2.svg'
import { BasicCardModal } from 'common/components/Modals/BasicCardModal'
import style from 'features/Modal/PackModal/PackModalForm/PackModalForm.module.scss'
import { createPackTC, updatePackTC } from 'features/Packs/packs-reducer'

type PropsType = {
  nameProp: string
  privateProp: boolean
  packId: string
}
export const EditPackModal: React.FC<PropsType> = ({ packId, privateProp, nameProp }) => {
  const [packName, setPackName] = useState(nameProp)
  const [privatePack, setPrivatePack] = useState(privateProp)

  const handleChangePackName = (e: ChangeEvent<HTMLInputElement>) => setPackName(e.currentTarget.value)
  const handleChangePackPrivate = (e: ChangeEvent<HTMLInputElement>) => setPrivatePack(e.currentTarget.checked)
  const dispatch = useAppDispatch()
  const handleEditPack = () => {
    dispatch(
      updatePackTC({
        params: {},
        data: {
          name: packName,
          private: privatePack,
          _id: packId,
        },
      })
    )
  }

  return (
    <BasicCardModal deleteMode={false} onClick={handleEditPack} modalTitle={'Edit card'} iconSrc={editPack}>
      <FormControl className={style.field} fullWidth variant="standard">
        <TextField value={packName} onChange={handleChangePackName} fullWidth label={'Name Pack'} variant="standard" />
      </FormControl>

      <FormControlLabel
        className={style.checkbox}
        label="Private cards"
        control={<Checkbox onChange={handleChangePackPrivate} />}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}></div>
    </BasicCardModal>
  )
}
