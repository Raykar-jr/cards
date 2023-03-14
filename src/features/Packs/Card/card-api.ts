import { instance } from 'common/api/main-api'

export const cardsApi = {
  getCards(cardsPackId: string, page: number, pageCount: number = 5) {
    return instance.get(`/cards/card`, {
      params: {
        cardsPack_id: cardsPackId,
        page,
        pageCount,
      },
    })
  },
  createCard(cardsPackId: string) {
    return instance.post('cards/card', {
      card: {
        cardsPack_id: cardsPackId,
        question: 'no question!!!',
        answer: 'no answer!!!',
      },
    })
  },
  updateCard(cardId: string) {
    return instance.put('cards/card', {
      card: {
        _id: cardId,
        question: 'new question!!!',
        answer: 'new answer!!!',
      },
    })
  },
  removeCard(cardId: string) {
    return instance.delete(`cards/card?id=${cardId}`)
  },
}
