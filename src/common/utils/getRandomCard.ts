import { CardType } from 'common/api/DataTypes'

export const getRandomCard = (cards: CardType[]) => {
  const sum = cards.reduce((acc, card) => (card.grade === 5 ? acc : acc + (6 - card.grade) ** 3), 0)
  const rand = Math.random() * sum
  let newSum = 0,
    res = -1

  for (let i = 0; newSum < rand; i++) {
    if (cards[i].grade !== 5) {
      newSum += (6 - cards[i].grade) ** 3
      res = i
    }
  }

  return cards[res]
}
