const initState = {
  _id: null,
  email: null,
  name: null,
  publicCardPacksCount: 0,
  avatar: null,
  verified: false,
}

export const profileReducer = (state: ProfileInitStateType = initState, action: ActionType) => {
  switch (action.type) {
    case 'PROFILE/SET_USER_DATA':
      return { ...state, ...action.userData }
    default:
      return state
  }
}

// actions
export const setUserData = (userData: ProfileInitStateType) =>
  ({
    type: 'PROFILE/SET_USER_DATA',
    userData,
  } as const)

// types
type ProfileInitStateType = {
  _id: null | string
  email: null | string
  name: null | string
  publicCardPacksCount: number
  avatar?: null | string
  verified?: boolean
}
type ActionType = SetUserDataAT
export type SetUserDataAT = ReturnType<typeof setUserData>
