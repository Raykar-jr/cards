import React, { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from 'app/store'
import { ButtonsGroup } from 'common/components/ButtonsGroup/ButtonsGroup'
import { Filters } from 'common/components/Filters/Filters'
import { RangeCards } from 'common/components/RangeCards/RangeCards'
import { Search } from 'common/components/Search/Search'
import { setQueryParams } from 'features/Packs/packs-reducer'
import { selectUserId } from 'features/Profile/profileSelectors'

export const FilterPanel = () => {
  const dispatch = useAppDispatch()
  const { min, max } = useAppSelector(state => state.packs.queryParams)
  const { page, pageCount } = useAppSelector(state => state.packs.packList)
  const userId = useAppSelector(selectUserId)
  const onSearchChange = useCallback((search: string) => {
    dispatch(setQueryParams({ packName: search }))
  }, [])
  const getMyPacks = useCallback(() => {
    dispatch(setQueryParams({ min, max, user_id: userId, page, pageCount }))
  }, [])
  const getAllPacks = useCallback(() => {
    dispatch(setQueryParams({ user_id: '' }))
  }, [])

  return (
    <Filters>
      <Search onChange={onSearchChange} />
      <ButtonsGroup onClickMy={getMyPacks} onClickAll={getAllPacks} />
      <RangeCards />
    </Filters>
  )
}
