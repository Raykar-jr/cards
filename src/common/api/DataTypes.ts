export type RegisterData = {
  email: string
  password: string
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

export type UserDataType = {
  name: string
  email?: string
  _id?: string
  avatar?: string
}

export type PassDataType = {
  password: string
  resetPasswordToken: string | undefined
}
export type RecoveredDataType = {
  email: string
  from: string
  message: string
}
