import { AppRootStateType } from 'app/store'

export const selectName = (state: AppRootStateType) => state.profile.name
export const selectAvatar = (state: AppRootStateType) => state.profile.avatar
export const selectEmail = (state: AppRootStateType) => state.profile.email
export const selectUserId = (state: AppRootStateType) => state.profile._id
