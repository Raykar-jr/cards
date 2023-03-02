const initState = {}

export const registrationReducer = (state = initState, action: ActionType) => {
	switch (action.type) {
		case 'CHANGE_REGISTRATION':
			return state
	}
}

export const registrationAC = () => ({
	type: 'CHANGE_REGISTRATION',
})

type initStateType = typeof initState
type ActionType = ReturnType<typeof registrationAC>
