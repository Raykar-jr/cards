const initState = {}

export const registrationReducer = (state: initStateType = initState, action: ActionType) => {
  switch (action.type) {
    case 'CHANGE_REGISTRATION':
      return state
    default:
      return state
  }
}

export const registrationAC = () => ({
  type: 'CHANGE_REGISTRATION',
})

type initStateType = typeof initState
type ActionType = ReturnType<typeof registrationAC>
