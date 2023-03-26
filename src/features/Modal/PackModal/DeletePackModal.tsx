import React from 'react'

import { useAppDispatch } from 'app/store'
import removePack from 'assets/icons/trash.svg'
import { BasicModal } from 'common/components/Modals/BasicModal'
import { deletePackTC } from 'features/Packs/packs-reducer'

type PropsType = {
  packId: string
  packName: string
  menuName?: string
  onClose?: () => void
  redirectToPacks?: () => void
}
export const DeletePackModal: React.FC<PropsType> = ({ onClose, packId, packName, redirectToPacks, ...restProps }) => {
  const dispatch = useAppDispatch()
  const handleDeletePack = () => {
    dispatch(deletePackTC({ packId: packId }))
    restProps.menuName && redirectToPacks && redirectToPacks()
  }
  const handleCloseMenu = () => {
    onClose && onClose()
  }

  return (
    <BasicModal
      deleteMode={true}
      onClick={handleDeletePack}
      onCloseMenu={handleCloseMenu}
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
