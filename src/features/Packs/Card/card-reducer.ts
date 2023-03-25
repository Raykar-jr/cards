import { Dispatch } from 'redux'

import { appSetStatus, AppSetStatusType } from 'app/app-reducer'
import { AppThunk } from 'app/store'
import { GetCardsResponseType, PackCard } from 'common/api/DataTypes'
import { requestStatus } from 'common/components/constants/requestStatus'
import { handleError } from 'common/utils/error-util'
import { cardsApi } from 'features/Packs/Card/card-api'

const initState: PackCard = {
  cards: [],
  packUserId: '',
  packName: '',
  packDeckCover: '',
  page: 1,
  pageCount: 5,
  cardsTotalCount: 0,
  minGrade: 0,
  maxGrade: 0,
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
    case 'cards/RESET-PACK-CARD':
      return { ...state, ...initState }
    case 'cards/RESET-PACK-DECK-COVER':
      return { ...state, packDeckCover: '' }
    case 'cards/GRADE-CARD-UPDATE':
      return { ...state, cards: state.cards.map(c => (c._id === action.card_id ? { ...c, ...action.data } : c)) }
    default:
      return state
  }
}

// actions
export const setCards = (data: GetCardsResponseType) => ({ type: 'cards/SET-CARDS', payload: { data } } as const)
export const setPage = (page: number) => ({ type: 'cards/SET-PAGE', page } as const)
export const setCount = (count: number) => ({ type: 'cards/SET-COUNT', count } as const)
export const setSort = (sort: string) => ({ type: 'cards/SET-SORT', sort } as const)
export const setSearch = (search: string) => ({ type: 'cards/SEARCH-CARDS-BY-QUESTION', search } as const)
export const resetPackCard = () => ({ type: 'cards/RESET-PACK-CARD' } as const)
export const resetPackDeckCover = () => ({ type: 'cards/RESET-PACK-DECK-COVER' } as const)
export const gradeCardUpdate = (data: { grade: number; shots: number }, card_id: string) =>
  ({
    type: 'cards/GRADE-CARD-UPDATE',
    data,
    card_id,
  } as const)
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
export const getAllCards =
  (cardsPackId: string, cardsCount: number): AppThunk =>
  async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))

      const res = await cardsApi.getAllCards(cardsPackId, cardsCount)

      dispatch(setCards(res.data))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }
export const createCard =
  (cardsPackId: string, question: string, answer: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      await cardsApi.createCard(cardsPackId, question, answer)
      dispatch(getCards(cardsPackId))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }

export const updateCard =
  (packId: string, cardId: string, question: string, answer: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      await cardsApi.updateCard(cardId, question, answer)
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
  | ReturnType<typeof resetPackCard>
  | ReturnType<typeof gradeCardUpdate>
  | ReturnType<typeof resetPackDeckCover>
