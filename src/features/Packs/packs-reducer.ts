const initialState = {}

type PacksStateType = typeof initialState
export const packsReducer = (
  state: PacksStateType = initialState,
  action: PacksActionType
): PacksStateType => {
  switch (action.type) {
    case '':
      return state
    default:
      return state
  }
}

type PacksActionType = any
