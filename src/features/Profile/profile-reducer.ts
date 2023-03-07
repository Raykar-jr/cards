import { UserDataType } from 'common/api/DataTypes'

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

type InitStateType = {
  name: string
  email: string
  _id: string
  avatar: string
}

export type ProfileActionsType = SetUserDataActionType
export type SetUserDataActionType = ReturnType<typeof setUserData>
