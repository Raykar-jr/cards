import React from 'react'

import { useAppDispatch } from 'app/store'
import removePack from 'assets/icons/trash.svg'
import { BasicModal } from 'common/components/Modals/BasicModal'
import { deletePackTC } from 'features/Packs/packs-reducer'

type PropsType = {
  packId: string
  packName: string
}
export const DeletePackModal: React.FC<PropsType> = ({ packId, packName }) => {
  const dispatch = useAppDispatch()
  const handleDeletePack = () => {
    dispatch(deletePackTC({ packId: packId, params: {} }))
  }

  return (
    <BasicModal deleteMode={true} onClick={handleDeletePack} iconSrc={removePack} modalTitle={'Delete card'}>
      <p>
        Do you really want to remove <b>{packName}</b>? This card will be deleted.
      </p>
    </BasicModal>
  )
}
