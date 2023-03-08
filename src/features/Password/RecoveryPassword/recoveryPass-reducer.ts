import { Dispatch } from 'redux'

import { authAPI } from 'common/api/authAPI'
import { PassDataType, RecoveredDataType } from 'common/api/DataTypes'
import { handleError } from 'common/utils/error-util'

const initialState = {
  email: '',
  success: false,
}

export const recoveryPassReducer = (
  state: RecoveryPassStateType = initialState,
  action: RecoveryPassActionType
) => {
  switch (action.type) {
    case 'SET-RECOVERY-PASSWORD':
      return { ...state, success: action.value }
    case 'SET-EMAIL':
      return { ...state, email: action.email }
    default:
      return state
  }
}

// actions
export const setRecovery = (value: boolean) => ({ type: 'SET-RECOVERY-PASSWORD', value } as const)
export const setEmail = (email: string) => ({ type: 'SET-EMAIL', email } as const)

export const recovery = (recoveredData: RecoveredDataType) => async (dispatch: Dispatch) => {
  try {
    await authAPI.recoveryPass(recoveredData)
  } catch (e) {
    handleError(e, dispatch)
  }
}
export const setNewPass = (passData: PassDataType) => async (dispatch: Dispatch) => {
  try {
    await authAPI.setNewPass(passData)

    dispatch(setRecovery(true))
  } catch (e) {
    handleError(e, dispatch)
  }
}

// types
type RecoveryPassStateType = {
  success: boolean
  email: string
}
type RecoveryPassActionType = ReturnType<typeof setRecovery> | ReturnType<typeof setEmail>
