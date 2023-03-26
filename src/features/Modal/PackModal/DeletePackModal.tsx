import React from 'react'

import { useAppDispatch } from 'app/store'
import removePack from 'assets/icons/trash.svg'
import { BasicModal } from 'common/components/Modals/BasicModal'
import { deletePackTC } from 'features/Packs/packs-reducer'

type PropsType = {
  packId: string
  packName: string
  menuName?: string
}
export const DeletePackModal: React.FC<PropsType> = ({ packId, packName, ...restProps }) => {
  const dispatch = useAppDispatch()
  const handleDeletePack = () => {
    dispatch(deletePackTC({ packId: packId }))
  }

  return (
    <BasicModal
      deleteMode={true}
      onClick={handleDeletePack}
      iconSrc={removePack}
      modalTitle={'Delete pack'}
      {...restProps}
    >
      <p>
        Do you really want to remove <b style={{ wordBreak: 'break-word' }}>{packName}</b>? <br />
        This pack will be deleted.
      </p>
    </BasicModal>
  )
}
