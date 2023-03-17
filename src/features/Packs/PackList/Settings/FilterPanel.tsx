import React, { useCallback } from 'react'

import { useAppDispatch } from 'app/store'
import { ButtonsGroup } from 'common/components/ButtonsGroup/ButtonsGroup'
import { Filters } from 'common/components/Filters/Filters'
import { RangeCards } from 'common/components/RangeCards/RangeCards'
import { Search } from 'common/components/Search/Search'
import { setQueryParams } from 'features/Packs/packs-reducer'

export const FilterPanel = () => {
  const dispatch = useAppDispatch()
  const onSearchChange = useCallback((search: string) => {
    dispatch(setQueryParams({ packName: search }))
  }, [])

  return (
    <Filters>
      <Search onChange={onSearchChange} />
      <ButtonsGroup />
      <RangeCards />
    </Filters>
  )
}
