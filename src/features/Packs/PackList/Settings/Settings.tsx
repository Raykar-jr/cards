import React from 'react'

import s from './Settings.module.scss'

import { Search } from 'common/components/Search/Search'

export const Settings = () => {
  return (
    <div className={s.settingsBlock}>
      <Search />
    </div>
  )
}
