const initState = {}

export const profileReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case 'CHANGE_PROFILE':
            return state
    }
}

export const profileAC = () => ({
    type: 'CHANGE_PROFILE'
})

type initStateType = typeof initState
type ActionType = ReturnType<typeof profileAC>