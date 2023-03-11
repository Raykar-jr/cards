import { appSetStatus, AppSetStatusType } from 'app/app-reducer'
import { AppThunk } from 'app/store'
import { authAPI } from 'common/api/authAPI'
import { PassDataType, RecoveredDataType } from 'common/api/DataTypes'
import { requestStatus } from 'common/enums/requestStatus'
import { handleError } from 'common/utils/error-util'

const initialState = {
  email: '',
  success: false,
}

export const recoveryPassReducer = (state = initialState, action: RecoveryPassActionType): RecoveryPassStateType => {
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

export const recovery =
  (recoveredData: RecoveredDataType): AppThunk =>
  async dispatch => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      await authAPI.recoveryPass(recoveredData)
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }
export const setNewPass =
  (passData: PassDataType): AppThunk =>
  async dispatch => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      await authAPI.setNewPass(passData)

      dispatch(setRecovery(true))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }

// types
type RecoveryPassStateType = typeof initialState
type RecoveryPassActionType = ReturnType<typeof setRecovery> | ReturnType<typeof setEmail> | AppSetStatusType
