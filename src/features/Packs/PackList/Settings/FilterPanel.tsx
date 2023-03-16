import React from 'react'

import { Search } from 'common/components/Search/Search'
import s from 'features/Packs/PackList/Settings/FilterPanel.module.scss'
import { RangeCards } from 'features/Packs/PackList/Settings/RangeCards/RangeCards'

export const FilterPanel = () => {
  return (
    <div className={s.settingsBlock}>
      <Search />
      <RangeCards />
    </div>
  )
}
