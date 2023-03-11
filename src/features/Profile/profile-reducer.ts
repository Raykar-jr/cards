import { Dispatch } from 'redux'

import { appSetStatus, AppSetStatusType } from 'app/app-reducer'
import { UserDataType } from 'common/api/DataTypes'
import { requestStatus } from 'common/enums/requestStatus'
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

export const setUserData = (data: UserDataType) => {
  return {
    type: 'PROFILE/SET-USER-DATA',
    payload: { data },
  } as const
}

//thunk
export const changeUserDataTC =
  (data: UpdateDataUserType) => async (dispatch: Dispatch<ProfileActionsType>) => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      const response = await profileAPI.updateUserData(data)
      const { name, email, _id, avatar } = response.data.updatedUser

      dispatch(setUserData({ name, _id, email, avatar }))
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    } catch (e: any) {
      handleError(e, dispatch)
    }
  }

//types
type InitStateType = typeof initState
export type ProfileActionsType = SetUserDataActionType | AppSetStatusType
export type SetUserDataActionType = ReturnType<typeof setUserData>
