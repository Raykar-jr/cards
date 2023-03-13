import { Dispatch } from 'redux'

import { appSetStatus, AppSetStatusType } from 'app/app-reducer'
import { AppThunk } from 'app/store'
import { authAPI } from 'common/api/authAPI'
import { RegisterData } from 'common/api/DataTypes'
import { requestStatus } from 'common/enums/requestStatus'
import { handleError } from 'common/utils/error-util'

const initState = {
  isRegistered: false,
}

export const registrationReducer = (
  state: initStateType = initState,
  action: ActionType
): initStateType => {
  switch (action.type) {
    case 'login/SET-IS-REGISTRATION':
      return { ...state, isRegistered: action.value }
    default:
      return state
  }
}
// actions
export const setIsRegistration = (value: boolean) =>
  ({ type: 'login/SET-IS-REGISTRATION', value } as const)

// thunks
export const registration =
  (data: RegisterData): AppThunk =>
  async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      await authAPI.register(data)

      dispatch(setIsRegistration(true))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }
type initStateType = typeof initState
type ActionType = ReturnType<typeof setIsRegistration> | AppSetStatusType
