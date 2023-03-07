import { Dispatch } from 'redux'

import { authAPI } from 'common/api/authAPI'
import { UserDataType } from 'common/api/DataTypes'
import { handleError } from 'common/utils/error-util'
import { profileAPI, UpdateDataUserType } from 'features/Profile/profile-api'

type InitStateType = {
  name: string
  email: string
  _id: string
  avatar: string
}
const initState: InitStateType = {
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
    //dispatch(setAppStatus('loading'));
    try {
      const response = await profileAPI.updateUserData(data)
      const { name, email, _id, avatar } = response.data.updatedUser

      dispatch(setUserData({ name, _id, email, avatar }))
    } catch (e: any) {
      handleError(e, dispatch)
    }
  }

export const getUserDataTC = () => async (dispatch: Dispatch<ProfileActionsType>) => {
  try {
    const response = await authAPI.me()

    console.log(response)
    const { name, email, _id, avatar } = response.data

    dispatch(setUserData({ name, _id, email, avatar }))
  } catch (e: any) {
    handleError(e, dispatch)
  }
}

//types
export type ProfileActionsType = SetUserDataActionType
export type SetUserDataActionType = ReturnType<typeof setUserData>
