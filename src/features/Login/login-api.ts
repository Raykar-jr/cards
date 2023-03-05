import { instance } from 'common/api/main-api'

export const loginApi = {
  signIn(data: LoginParamsType) {
    return instance.post<ResponseLoginType>('auth/login', data)
  },
}

export type LoginParamsType = {
  email: string
  password: string
  rememberMe: boolean
}

export type ResponseLoginType = {
  _id: string
  name: string
  email: string
  publicCardPacksCount: number
  avatar?: string
  // количество колод
  error?: string
}
