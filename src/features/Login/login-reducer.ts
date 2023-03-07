import { Dispatch } from 'redux'

import { setAppError } from 'app/app-reducer'
import { authAPI } from 'common/api/authAPI'
import { LoginParamsType } from 'common/api/DataTypes'
import { handleError } from 'common/utils/error-util'
import { setUserData, SetUserDataAT } from 'features/Profile/profile-reducer'

const initState = {
  isLoggedIn: false,
}

export const loginReducer = (state: initStateType = initState, action: ActionType) => {
  switch (action.type) {
    case 'login/SET-IS-LOGGED-IN':
      return { ...state, isLoggedIn: action.value }
    default:
      return state
  }
}

// actions
export const setIsLoggedIn = (value: boolean) =>
  ({ type: 'login/SET-IS-LOGGED-IN', value } as const)

// thunks
export const login = (data: LoginParamsType) => async (dispatch: Dispatch<ActionType>) => {
  try {
    let response = await authAPI.login(data)
    let { email, name, publicCardPacksCount, _id, avatar } = response.data

    dispatch(setUserData({ email, name, publicCardPacksCount, _id, avatar }))
    dispatch(setIsLoggedIn(true))
  } catch (e) {
    handleError(e, dispatch)
  }
}
// types
type initStateType = typeof initState
type ActionType = ReturnType<typeof setIsLoggedIn> | ReturnType<typeof setAppError> | SetUserDataAT
