import { appSetStatus } from 'app/app-reducer'
import { AppThunk } from 'app/store'
import { CardType, UpdateGradeRequestType } from 'common/api/DataTypes'
import { requestStatus } from 'common/components/constants/requestStatus'
import { handleError } from 'common/utils/error-util'
import { cardsApi } from 'features/Packs/Card/card-api'
import { gradeCardUpdate } from 'features/Packs/Card/card-reducer'

const learnInitState = {
  card: {
    _id: '',
    cardsPack_id: '',
    user_id: '',
    answer: '',
    question: '',
    grade: 0,
    shots: 0,
  },
}

export const learnReducer = (state = learnInitState, action: ActionType) => {
  switch (action.type) {
    case 'learn/RESET-LEAN-CARD':
      return { ...state, card: { ...learnInitState.card } }
    case 'learn/SET-CARD':
      return { ...state, card: { ...state.card, ...action.payload.data } }
    default: {
      return state
    }
  }
}
// actions
export const resetCardLearn = () => ({ type: 'learn/RESET-LEAN-CARD' } as const)
export const setCard = (data: CardType) => ({ type: 'learn/SET-CARD', payload: { data } } as const)

export const updateGradeTC =
  (data: UpdateGradeRequestType): AppThunk =>
  async dispatch => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      const res = await cardsApi.updateGradeCard(data)
      const tmp = res.data.updatedGrade

      dispatch(gradeCardUpdate({ grade: tmp.grade, shots: tmp.shots }, tmp.card_id))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }

//type
type ActionType = ReturnType<typeof resetCardLearn> | ReturnType<typeof setCard>
