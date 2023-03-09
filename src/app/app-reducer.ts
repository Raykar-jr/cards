import { Dispatch } from 'redux'

import { authAPI } from 'common/api/authAPI'
import { handleError } from 'common/utils/error-util'
import { setIsLoggedIn } from 'features/Login/login-reducer'
import { setUserData } from 'features/Profile/profile-reducer'

export enum requestStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

const initialState = {
  status: requestStatus.IDLE, // idle - начальное значение (простаивание)
  error: null as null | string,
  isInitialized: false,
}

export const appReducer = (
  state = initialState,
  action: ApplicationActionType
): AppInitialStateType => {
  switch (action.type) {
    case 'APP/SET_STATUS': {
      return { ...state, status: action.status }
    }
    case 'APP/SET-ERROR':
      return { ...state, error: action.error }
    default:
      return state
  }
}
// actions
export const appSetStatus = (status: requestStatus) => ({ type: 'APP/SET_STATUS', status } as const)
export const setAppError = (error: string | null) => ({ type: 'APP/SET-ERROR', error } as const)

// types
export type AppInitialStateType = typeof initialState

export const initializeAppTC = () => async (dispatch: Dispatch) => {
  try {
    const response = await authAPI.me()
    const { name, email, _id, avatar } = response.data

    dispatch(setIsLoggedIn(true))
    dispatch(setUserData({ name, _id, email, avatar }))
  } catch (e) {
    handleError(e, dispatch)
  }
}

export type AppSetStatusType = ReturnType<typeof appSetStatus>
export type ApplicationActionType = AppSetStatusType | ReturnType<typeof setAppError>
