import React, { useCallback } from 'react'

import { useAppDispatch } from 'app/store'
import { Filters } from 'common/components/Filters/Filters'
import { RangeCards } from 'common/components/RangeCards/RangeCards'
import { Search } from 'common/components/Search/Search'
import { getPackTC } from 'features/Packs/packs-reducer'

export const FilterPanel = () => {
  const dispatch = useAppDispatch()
  const onSearchChange = useCallback((search: string) => {
    dispatch(getPackTC({ packName: search }))
  }, [])

  return (
    <Filters>
      <Search onChange={onSearchChange} />
      <RangeCards />
    </Filters>
  )
}
