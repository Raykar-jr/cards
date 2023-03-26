import { Dispatch } from 'redux'

import { appSetStatus, AppSetStatusType } from 'app/app-reducer'
import { AppThunk } from 'app/store'
import {
  CreatePacksDataType,
  GetPacksResponseType,
  PackListResponse,
  PackParamsType,
  QueryParams,
  UpdatePackDataType,
} from 'common/api/DataTypes'
import { requestStatus } from 'common/components/constants/requestStatus'
import { handleError } from 'common/utils/error-util'
import { packApi } from 'features/Packs/packs-api'

type InitialStateType = {
  packList: PackListResponse
  queryParams: QueryParams
}

const initState: InitialStateType = {
  packList: {
    minCardsCount: 0,
    maxCardsCount: 0,
    page: 1,
    pageCount: 5,
    cardPacks: [],
    cardPacksTotalCount: 100,
  },
  queryParams: {
    min: 0,
    max: 0,
    packName: '',
    user_id: '',
    block: false,
    page: 1,
    pageCount: 5,
    sortPacks: '0updated',
  },
}

export const packsReducer = (state = initState, action: ActionType): initStateType => {
  switch (action.type) {
    case 'packs/GET-PACKS':
      return { ...state, packList: action.payload.data }
    case 'packs/SET-QUERY-PARAMS': {
      return { ...state, queryParams: { ...state.queryParams, ...action.payload.params } }
    }
    case 'packs/RESET-QUERY-PARAMS': {
      return { ...state, queryParams: { ...initState.queryParams } }
    }
    default:
      return state
  }
}

// actions
export const getPacks = (data: GetPacksResponseType) => ({ type: 'packs/GET-PACKS', payload: { data } } as const)
export const setQueryParams = (params: PackParamsType) =>
  ({ type: 'packs/SET-QUERY-PARAMS', payload: { params } } as const)
export const resetQueryParams = () => ({ type: 'packs/RESET-QUERY-PARAMS' } as const)
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
  (params: { data: CreatePacksDataType }): AppThunk =>
  async (dispatch, getState) => {
    try {
      const queryParams = getState().packs.queryParams

      dispatch(appSetStatus(requestStatus.LOADING))
      await packApi.createPack(params.data)
      dispatch(getPackTC(queryParams))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }

export const updatePackTC =
  (params: { data: UpdatePackDataType }): AppThunk =>
  async (dispatch, getState) => {
    try {
      const queryParams = getState().packs.queryParams

      dispatch(appSetStatus(requestStatus.LOADING))
      await packApi.updatePack(params.data)
      dispatch(getPackTC(queryParams))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }

export const deletePackTC =
  (params: { packId: string }): AppThunk =>
  async (dispatch, getState) => {
    try {
      const queryParams = getState().packs.queryParams

      dispatch(appSetStatus(requestStatus.LOADING))
      await packApi.deletePack(params.packId)
      dispatch(getPackTC(queryParams))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }

// types
type initStateType = typeof initState
type ActionType =
  | ReturnType<typeof setQueryParams>
  | ReturnType<typeof getPacks>
  | ReturnType<typeof resetQueryParams>
  | AppSetStatusType
