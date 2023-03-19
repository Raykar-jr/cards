import { AppRootStateType } from 'app/store'

export const selectCards = (state: AppRootStateType) => state.cards.cards
export const selectCardPage = (state: AppRootStateType) => state.cards.page
export const selectCardPageCount = (state: AppRootStateType) => state.cards.pageCount
export const selectCardsTotalCount = (state: AppRootStateType) => state.cards.cardsTotalCount
export const selectPackName = (state: AppRootStateType) => state.cards.packName
export const selectCardSort = (state: AppRootStateType) => state.cards.sort
export const selectCardSearch = (state: AppRootStateType) => state.cards.search
export const selectPackUserId = (state: AppRootStateType) => state.cards.packUserId
