import React, { memo } from 'react'

import { AddCardModal } from 'features/Modal/CardsModal/AddCardModal'
import s from 'features/Packs/Card/Card.module.scss'

type Props = {
  packId?: string
}
export const EmptyPack: React.FC<Props> = memo(({ packId }) => {
  return (
    <div className={s.wrapperEmptyPack}>
      <p className={s.emptyPackText}>This pack is empty. Click add new card to fill this pack</p>
      <AddCardModal packId={packId} />
    </div>
  )
})
