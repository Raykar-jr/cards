const initState = {}

export const loginReducer = (state = initState, action: ActionType) => {
  switch (action.type) {
    case 'CHANGE_LOGIN':
      return state
  }
}

export const loadingAC = () => ({
  type: 'CHANGE_LOGIN',
})

type initStateType = typeof initState
type ActionType = ReturnType<typeof loadingAC>
