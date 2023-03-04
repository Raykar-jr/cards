const initialState: AppInitialStateType = {
  status: 'idle', // idle - начальное значение (простаивание)
  error: null,
  isInitialized: false,
}

export const appReducer = (
  state: AppInitialStateType = initialState,
  action: ApplicationActionType
): AppInitialStateType => {
  switch (action.type) {
    case 'APP/SET_STATUS': {
      return { ...state, status: action.status }
    }
    default:
      return state
  }
}
// actions
export const appSetStatusAC = (status: AppInitialStateStatusType) =>
  ({ type: 'APP/SET_STATUS', status } as const)

// types
export type AppInitialStateType = {
  // происходит ли сейчас взаимодействие с сервером
  status: AppInitialStateStatusType
  // текст ошибки запишем сюда
  error: string | null
  isInitialized: boolean
}

export type AppInitialStateStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type ApplicationActionType = ReturnType<typeof appSetStatusAC>
