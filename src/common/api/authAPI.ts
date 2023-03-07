import { LoginParamsType, RegisterData, ResponseLoginType } from 'common/api/DataTypes'
import { instance } from 'common/api/main-api'

export const authAPI = {
  register(data: RegisterData) {
    return instance.post('auth/register', data)
  },
  login(data: LoginParamsType) {
    return instance.post<ResponseLoginType>('auth/login', data)
  },
  me() {
    return instance.post('auth/me')
  },
}
