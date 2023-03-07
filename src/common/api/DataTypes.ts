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
