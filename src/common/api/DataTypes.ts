export type RegisterData = {
  email: string
  password: string
}

export type ResponseRegisterType = {
  addedUser: any
  error?: string
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
  publicCardPacksCount: number // количество колод
  avatar?: string
  error?: string
}

export type UserDataType = {
  name: string
  email?: string
  _id?: string
  avatar?: string
}

export interface ResponseUpdateUserDataType {
  updatedUser: ResponseType
  token: string
  tokenDeathTime: number
}

type ResponseType = {
  _id: string
  email: string
  name: string
  avatar?: string
  publicCardPacksCount: number

  created: Date
  updated: Date
  isAdmin: boolean
  verified: boolean
  rememberMe: boolean

  error?: string
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
export type PasswordType = {
  password: string
}

export type ResponseSetNewPassType = {
  info: string
  error?: string
}

export type ResponseRecoveryPassType = {
  info: string
  success: boolean
  answer: boolean
  error?: string
}

export type GetPacksResponseType = {
  cardPacks: Array<PackType>
  page: number
  pageCount: number
  cardPacksTotalCount: number
  minCardsCount: number
  maxCardsCount: number
  token: string
  tokenDeathTime: number
}

export type PackType = {
  _id: string
  user_id: string
  user_name: string
  private: boolean
  name: string
  path: string
  grade: number
  shots: number
  cardsCount: number
  type: string
  rating: number
  created: string
  updated: string
  more_id: string
  __v: number
  deckCover: string
}

export type PackParamsType = {
  packName?: string
  min?: number
  max?: number
  sortPacks?: number
  page?: number
  pageCount?: number
  user_id?: string
}

export type CreatePacksDataType = {
  cardsPack: { name: string }
}

export type CreatePackResponseType = {
  newCardsPack: PackType
}

export type UpdatePackDataType = {
  cardsPack: {
    _id: string
    name: string
  }
}

export type UpdatePackResponseType = {
  updatedCardsPack: PackType
}

export type DeletePackResponseType = {}
