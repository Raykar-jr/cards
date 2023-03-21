import React, { memo } from 'react'

import { useAppDispatch } from 'app/store'
import removeCard from 'assets/icons/trash.svg'
import { BasicCardModal } from 'common/components/Modals/BasicCardModal'
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
    <BasicCardModal deleteMode={true} onClick={handleDeleteCard} iconSrc={removeCard} modalTitle={'Delete card'}>
      <p>
        Do you really want to remove <b>{cardName}</b>? This card will be deleted.
      </p>
    </BasicCardModal>
  )
})
