import { AxiosResponse } from 'axios'

import { ResponseUpdateUserDataType } from 'common/api/DataTypes'
import { instance } from 'common/api/main-api'

export const profileAPI = {
  updateUserData(data: UpdateDataUserType) {
    return instance.put<UpdateDataUserType, AxiosResponse<ResponseUpdateUserDataType>>('auth/me', data)
  },
}

export type UpdateDataUserType = {
  name?: string
  avatar?: string
}
