import React from 'react'

import s from './Settings.module.scss'

import { Search } from 'common/components/Search/Search'
import { RangeCards } from 'features/Packs/PackList/Settings/RangeCards/RangeCards'

export const Settings = () => {
  return (
    <div className={s.settingsBlock}>
      <Search />
      <RangeCards />
    </div>
  )
}
