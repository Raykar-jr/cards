import { Dispatch } from 'redux'

import { appSetStatus, AppSetStatusType } from 'app/app-reducer'
import { AppThunk } from 'app/store'
import { CreatePacksDataType, GetPacksResponseType, PackParamsType, UpdatePackDataType } from 'common/api/DataTypes'
import { requestStatus } from 'common/components/constants/requestStatus'
import { handleError } from 'common/utils/error-util'
import { packApi } from 'features/Packs/packs-api'

const initState = {
  cardPacks: [
    {
      _id: '',
      user_id: '',
      user_name: '',
      private: false,
      name: '',
      path: '',
      grade: 0,
      shots: 0,
      cardsCount: 0,
      type: '',
      rating: 0,
      created: '',
      updated: '',
      more_id: '',
      __v: 0,
      deckCover: '',
    },
  ],
  page: 1,
  pageCount: 0,
  cardPacksTotalCount: 0,
  minCardsCount: 0,
  maxCardsCount: 0,
  token: '',
  tokenDeathTime: 0,
}

export const packsReducer = (state = initState, action: ActionType): initStateType => {
  switch (action.type) {
    case 'packs/GET-PACKS':
      return { ...state, ...action.payload.data }
    default:
      return state
  }
}

// actions
export const getPacks = (data: GetPacksResponseType) => ({ type: 'packs/GET-PACKS', payload: { data } } as const)

// thunks

export const getPackTC =
  (params: PackParamsType): AppThunk =>
  async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      const res = await packApi.getPacks(params)

      dispatch(getPacks(res.data))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }

export const createPackTC =
  (params: { params: PackParamsType; data: CreatePacksDataType }): AppThunk =>
  async dispatch => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      await packApi.createPack(params.data)
      dispatch(getPackTC(params.params))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }

export const updatePackTC =
  (params: { params: PackParamsType; data: UpdatePackDataType }): AppThunk =>
  async dispatch => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      await packApi.updatePack(params.data)
      dispatch(getPackTC(params.params))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }

export const deletePackTC =
  (params: { params: PackParamsType; packId: string }): AppThunk =>
  async dispatch => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      await packApi.deletePack(params.packId)
      dispatch(getPackTC(params.params))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }

// types
type initStateType = typeof initState
type ActionType = ReturnType<typeof getPacks> | AppSetStatusType
