import { appSetStatus } from 'app/app-reducer'
import { AppThunk } from 'app/store'
import { CardType, UpdateGradeRequestType, UpdateGradeResponseType } from 'common/api/DataTypes'
import { requestStatus } from 'common/components/constants/requestStatus'
import { handleError } from 'common/utils/error-util'
import { cardsApi } from 'features/Packs/Card/card-api'
import { gradeCardUpdate } from 'features/Packs/Card/card-reducer'

type InitialStateType = {
  card: CardType
}
const learnInitState: InitialStateType = {
  card: {} as CardType,
}

export const learnReducer = (state = learnInitState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'learn/UPDATE-GRADE':
      return { ...state, card: { ...state.card, ...action.payload.updatedGrade } }
    case 'learn/SET-CARD':
      return { ...state, card: { ...action.payload.data } }
    default: {
      return state
    }
  }
}
// actions
export const updateGrade = (data: UpdateGradeResponseType) => ({ type: 'learn/UPDATE-GRADE', payload: data } as const)
export const setCard = (data: CardType) => ({ type: 'learn/SET-CARD', payload: { data } } as const)

export const updateGradeTC =
  (data: UpdateGradeRequestType): AppThunk =>
  async dispatch => {
    try {
      dispatch(appSetStatus(requestStatus.LOADING))
      const res = await cardsApi.updateGradeCard(data)

      dispatch(gradeCardUpdate(res.data))
      // dispatch(updateGrade(res.data))
    } catch (e) {
      handleError(e, dispatch)
    } finally {
      dispatch(appSetStatus(requestStatus.SUCCEEDED))
    }
  }

//type
type ActionType = ReturnType<typeof updateGrade> | ReturnType<typeof setCard>
