import { Dispatch } from 'redux'

import { appSetStatus, AppSetStatusType } from 'app/app-reducer'
import { AppThunk } from 'app/store'
import { GetCardsResponseType } from 'common/api/DataTypes'
import { requestStatus } from 'common/components/constants/requestStatus'
import { handleError } from 'common/utils/error-util'
import { cardsApi } from 'features/Packs/Card/card-api'

const initState = {
  cards: [
    {
      _id: '',
      cardsPack_id: '',
      user_id: '',
      answer: '',
      question: '',
      grade: 0,
      shots: 0,
      created: '',
      updated: '',
      answerImg: '',
      answerVideo: '',
      questionImg: '',
      questionVideo: '',
    },
  ],
  packUserId: '',
  packName: '',
  packDeckCover: '',
  page: 1,
  pageCount: 5,
  cardsTotalCount: 0,
  minGrade: 0,
  maxGrade: 0,
  isMyPack: false,
  search: '',
  sort: '',
}

export const cardsReducer = (state = initState, action: ActionType): initStateType => {
  switch (action.type) {
    case 'cards/SET-CARDS':
      return { ...state, ...action.payload.data }
    case 'cards/SET-PAGE':
      return { ...state, page: action.page }
    case 'cards/SET-COUNT':
      return { ...state, pageCount: action.count }
    case 'cards/SET-SORT':
      return { ...state, sort: action.sort }
    case 'cards/SEARCH-CARDS-BY-QUESTION':
      return { ...state, search: action.search }
    case 'cards/SET-IS-MY-PACK':
      return { ...state, isMyPack: action.value }
    default:
      return state
  }
}

// actions
export const setCards = (data: GetCardsResponseType) => ({ type: 'cards/SET-CARDS', payload: { data } } as const)
export const setPage = (page: number) => ({ type: 'cards/SET-PAGE', page } as const)
export const setCount = (count: number) => ({ type: 'cards/SET-COUNT', count } as const)
export const setSort = (sort: string) => ({ type: 'cards/SET-SORT', sort } as const)
export const setIsMyPack = (value: boolean) => ({ type: 'cards/SET-IS-MY-PACK', value } as const)
export const setSearch = (search: string) => ({ type: 'cards/SEARCH-CARDS-BY-QUESTION', search } as const)

// thunks
export const getCards =
  (cardsPackId: string): AppThunk =>
  async (dispatch: Dispatch<ActionType>, getState) => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      const { page, pageCount, sort, search } = getState().cards

      const res = await cardsApi.getCards(cardsPackId, page, pageCount, sort, search)

      dispatch(setCards(res.data))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }
export const createCard =
  (cardsPackId: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      await cardsApi.createCard(cardsPackId)
      dispatch(getCards(cardsPackId))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }

export const updateCard =
  (packId: string, cardId: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      await cardsApi.updateCard(cardId)
      dispatch(getCards(packId))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }
export const deleteCard =
  (packId: string, cardId: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      await cardsApi.removeCard(cardId)
      dispatch(getCards(packId))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }

// types
type initStateType = typeof initState
type ActionType =
  | AppSetStatusType
  | ReturnType<typeof setCards>
  | ReturnType<typeof setCount>
  | ReturnType<typeof setPage>
  | ReturnType<typeof setSort>
  | ReturnType<typeof setSearch>
  | ReturnType<typeof setIsMyPack>
