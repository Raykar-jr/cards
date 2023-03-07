import { Dispatch } from 'redux'

import { authAPI } from 'common/api/authAPI'
import { RegisterData } from 'common/api/DataTypes'
import { handleError } from 'common/utils/error-util'

const initState = {
  isRegistered: false,
}

export const registrationReducer = (state: initStateType = initState, action: ActionType) => {
  switch (action.type) {
    case 'login/SET-IS-REGISTRATION':
      return { ...state, isRegistered: action.value }
    default:
      return state
  }
}
// actions
export const setIsRegistration = (value: boolean) =>
  ({
    type: 'login/SET-IS-REGISTRATION',
    value,
  } as const)

// thunks
export const registration = (data: RegisterData) => async (dispatch: Dispatch<ActionType>) => {
  try {
    let response = await authAPI.register(data)

    dispatch(setIsRegistration(true))
  } catch (e) {
    handleError(e, dispatch)
  }
}
type initStateType = typeof initState
type ActionType = ReturnType<typeof setIsRegistration>
