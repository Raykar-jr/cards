import { Dispatch } from 'redux'

import { appSetStatus, AppSetStatusType } from 'app/app-reducer'
import { AppThunk } from 'app/store'
import { UserDataType } from 'common/api/DataTypes'
import { requestStatus } from 'common/components/constants/requestStatus'
import { handleError } from 'common/utils/error-util'
import { profileAPI, UpdateDataUserType } from 'features/Profile/profile-api'

const initState = {
  name: '',
  email: '',
  _id: '',
  avatar: '',
}

export const profileReducer = (state = initState, action: ProfileActionsType): InitStateType => {
  switch (action.type) {
    case 'PROFILE/SET-USER-DATA':
      return { ...state, ...action.payload.data }
    default: {
      return state
    }
  }
}

export const setUserData = (data: UserDataType) => ({ type: 'PROFILE/SET-USER-DATA', payload: { data } } as const)

//thunk
export const changeUserDataTC =
  (data: UpdateDataUserType): AppThunk =>
  async (dispatch: Dispatch<ProfileActionsType>) => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      const response = await profileAPI.updateUserData(data)
      const { name, email, _id, avatar } = response.data.updatedUser

      dispatch(setUserData({ name, _id, email, avatar }))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }

//types
type InitStateType = typeof initState
export type ProfileActionsType = SetUserDataActionType | AppSetStatusType
export type SetUserDataActionType = ReturnType<typeof setUserData>
