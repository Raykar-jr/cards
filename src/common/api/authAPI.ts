import {
  RecoveredDataType,
  LoginParamsType,
  PassDataType,
  RegisterData,
  ResponseLoginType,
} from 'common/api/DataTypes'
import { herokuInstance, instance } from 'common/api/main-api'

export const authAPI = {
  register(data: RegisterData) {
    return instance.post('auth/register', data)
  },
  login(data: LoginParamsType) {
    return instance.post<ResponseLoginType>('auth/login', data)
  },
  logout() {
    return instance.delete('auth/me')
  },
  me() {
    return instance.post('auth/me')
  },
  setNewPass(data: PassDataType) {
    return instance.post('auth/set-new-password', data)
  },
  recoveryPass(data: RecoveredDataType) {
    return herokuInstance.post('auth/forgot', data)
  },
}
