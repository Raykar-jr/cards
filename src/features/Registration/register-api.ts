import { instance } from 'common/api/main-api'

export const registerApi = {
  singUp(data: RegisterData) {
    return instance.post('auth/register', data)
  },
}

export type RegisterData = {
  email: string
  password: string
}
