import { Dispatch } from 'redux'

import { authAPI } from 'common/api/authAPI'
import { handleError } from 'common/utils/error-util'
import { setIsLoggedIn } from 'features/Login/login-reducer'
import { setUserData } from 'features/Profile/profile-reducer'

const initialState: AppInitialStateType = {
  status: 'idle', // idle - начальное значение (простаивание)
  error: null,
  isInitialized: false,
}

export const appReducer = (
  state: AppInitialStateType = initialState,
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
export const appSetStatus = (status: AppInitialStateStatusType) =>
  ({ type: 'APP/SET_STATUS', status } as const)
export const setAppError = (error: string | null) => ({ type: 'APP/SET-ERROR', error } as const)

// types
export type AppInitialStateType = {
  // происходит ли сейчас взаимодействие с сервером
  status: AppInitialStateStatusType
  // текст ошибки запишем сюда
  error: string | null
  isInitialized: boolean
}

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
export type AppInitialStateStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type ApplicationActionType = ReturnType<typeof appSetStatus> | ReturnType<typeof setAppError>
