import {
  CreateCardsResponseType,
  DeleteCardsResponseType,
  GetCardsResponseType,
  UpdateCardsResponseType,
} from 'common/api/DataTypes'
import { instance } from 'common/api/main-api'

export const cardsApi = {
  getCards(cardsPackId: string, page: number, pageCount: number = 5) {
    return instance.get<GetCardsResponseType>(`/cards/card`, {
      params: {
        cardsPack_id: cardsPackId,
        page,
        pageCount,
      },
    })
  },
  createCard(cardsPackId: string) {
    return instance.post<CreateCardsResponseType>('cards/card', {
      card: {
        cardsPack_id: cardsPackId,
        question: 'no question!!!',
        answer: 'no answer!!!',
      },
    })
  },
  updateCard(cardId: string) {
    return instance.put<UpdateCardsResponseType>('cards/card', {
      card: {
        _id: cardId,
        question: 'new question!!!',
        answer: 'new answer!!!',
      },
    })
  },
  removeCard(cardId: string) {
    return instance.delete<DeleteCardsResponseType>(`cards/card?id=${cardId}`)
  },
}
