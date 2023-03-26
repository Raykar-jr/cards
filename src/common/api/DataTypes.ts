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
  deckCover: string
  cardsCount: number
  created: string
  updated: string
}
export type GetCardsResponseType = {
  cards: CardType[]
  packUserId: string
  packName: string
  packDeckCover: string
  page: number
  pageCount: number
  cardsTotalCount: number
  minGrade: number
  maxGrade: number
}
export type CardType2 = {
  answer: string
  question: string
  cardsPack_id: string
  grade: number
  shots: number
  user_id: string
  created: string
  updated: string
  _id: string
}
export type CardType = {
  _id: string
  cardsPack_id: string
  user_id: string
  answer: string
  question: string
  grade: number
  shots: number
  created: string
  updated: string
  answerImg: string
  answerVideo: string
  questionImg: string
  questionVideo: string
  card_id: string
}
export type UpdateGradeRequestType = {
  grade: number
  card_id: string
}
export type UpdateGradeResponseType = {
  updatedGrade: {
    _id: string
    cardsPack_id: string
    card_id: string
    user_id: string
    grade: number
    shots: number
  }
}
export type CreateCardsResponseType = {
  newCard: CardType
}
export type UpdateCardsResponseType = {
  updatedCard: CardType
}
export type DeleteCardsResponseType = {
  deletedCard: CardType
}

export type PackParamsType = {
  packName?: string
  min?: number
  max?: number
  sortPacks?: string
  page?: number
  pageCount?: number
  user_id?: string
  block?: boolean
}
export type QueryParams = {
  packName: string
  min: number
  max: number
  sortPacks: string
  page: number
  pageCount: number
  user_id: string
  block: boolean
}

export type PackListResponse = {
  cardPacks: PackType[]
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
}

export type CreatePacksDataType = {
  name: string
  private: boolean
}

export type CreatePackResponseType = {
  newCardsPack: PackType
}

export type UpdatePackDataType = {
  _id: string
  name: string
  private: boolean
}

export type DeleteParamType = { _id: string; name: string }
export type CardLearnType = {
  _id: string
  cardsPack_id: string
  user_id: string
  answer: string
  question: string
  grade: number
  shots: number
  questionImg: string
  answerImg: string
}
export type UpdatePackResponseType = {
  updatedCardsPack: PackType
}
export type PackCard = {
  cards: CardType[]
  packUserId: string
  packName: string
  packPrivate: boolean
  packDeckCover: string
  page: number
  pageCount: number
  cardsTotalCount: number
  minGrade: number
  maxGrade: number
  search: string
  sort: string
}

export type DeletePackResponseType = {}

export type requestsStatus = 'idle' | 'loading' | 'succeeded' | 'failed'
