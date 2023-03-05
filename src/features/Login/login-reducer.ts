const initState = {
  isLoggedIn: false,
}

export const loginReducer = (state: initStateType = initState, action: ActionType) => {
  switch (action.type) {
    case 'CHANGE_LOGIN':
      return state
    default:
      return state
  }
}

export const loadingAC = () => ({
  type: 'CHANGE_LOGIN',
})

type initStateType = typeof initState
type ActionType = ReturnType<typeof loadingAC>
