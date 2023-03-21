import {
  CreateCardsResponseType,
  DeleteCardsResponseType,
  GetCardsResponseType,
  UpdateCardsResponseType,
} from 'common/api/DataTypes'
import { instance } from 'common/api/main-api'

export const cardsApi = {
  getCards(cardsPackId: string, page: number, pageCount: number = 5, sort: string, search: string) {
    return instance.get<GetCardsResponseType>(`/cards/card`, {
      params: {
        cardsPack_id: cardsPackId,
        page,
        pageCount,
        cardQuestion: search,
        sortCards: sort,
      },
    })
  },
  createCard(cardsPackId: string, question: string, answer: string) {
    return instance.post<CreateCardsResponseType>('cards/card', {
      card: {
        cardsPack_id: cardsPackId,
        question,
        answer,
      },
    })
  },
  updateCard(cardId: string, question: string, answer: string) {
    return instance.put<UpdateCardsResponseType>('cards/card', {
      card: {
        _id: cardId,
        question,
        answer,
      },
    })
  },
  removeCard(cardId: string) {
    return instance.delete<DeleteCardsResponseType>(`cards/card?id=${cardId}`)
  },
}
