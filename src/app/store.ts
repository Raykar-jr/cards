import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { appReducer } from 'app/app-reducer'
import { loginReducer } from 'features/Login/login-reducer'
import { modalsReducer } from 'features/Modal/PackModal/modal-reducer'
import { cardsReducer } from 'features/Packs/Card/card-reducer'
import { packsReducer } from 'features/Packs/packs-reducer'
import { recoveryPassReducer } from 'features/Password/RecoveryPassword/recoveryPass-reducer'
import { profileReducer } from 'features/Profile/profile-reducer'
import { registrationReducer } from 'features/Registration/registration-reducer'

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  profile: profileReducer,
  registration: registrationReducer,
  recovery: recoveryPassReducer,
  packs: packsReducer,
  cards: cardsReducer,
  modals: modalsReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
