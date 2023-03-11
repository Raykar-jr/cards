import {
  RecoveredDataType,
  LoginParamsType,
  PassDataType,
  RegisterData,
  ResponseLoginType,
  ResponseRegisterType,
  ResponseSetNewPassType,
  ResponseRecoveryPassType,
} from 'common/api/DataTypes'
import { herokuInstance, instance } from 'common/api/main-api'

export const authAPI = {
  register(data: RegisterData) {
    return instance.post<ResponseRegisterType>('auth/register', data)
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
    return instance.post<ResponseSetNewPassType>('auth/set-new-password', data)
  },
  recoveryPass(data: RecoveredDataType) {
    return herokuInstance.post<ResponseRecoveryPassType>('auth/forgot', data)
  },
}
