import React, { memo } from 'react'

import { useAppDispatch } from 'app/store'
import removeCard from 'assets/icons/trash.svg'
import { BasicModal } from 'common/components/Modals/BasicModal'
import { deleteCard } from 'features/Packs/Card/card-reducer'

type PropsType = {
  packId: string
  cardId: string
  cardName: string
}
export const DeleteCardModal: React.FC<PropsType> = memo(({ packId, cardId, cardName }) => {
  const dispatch = useAppDispatch()
  const handleDeleteCard = () => {
    dispatch(deleteCard(packId, cardId))
  }

  return (
    <BasicModal deleteMode={true} onClick={handleDeleteCard} iconSrc={removeCard} modalTitle={'Delete card'}>
      <p>
        Do you really want to remove <b>{cardName}</b>? This card will be deleted.
      </p>
    </BasicModal>
  )
})
