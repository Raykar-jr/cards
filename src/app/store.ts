import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createWhitelistFilter } from 'redux-persist-transform-filter'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { appReducer } from 'app/app-reducer'
import { learnReducer } from 'features/Learn/learn-reducer'
import { loginReducer } from 'features/Login/login-reducer'
import { cardsReducer } from 'features/Packs/Card/card-reducer'
import { packsReducer } from 'features/Packs/packs-reducer'
import { recoveryPassReducer } from 'features/Password/RecoveryPassword/recoveryPass-reducer'
import { profileReducer } from 'features/Profile/profile-reducer'
import { registrationReducer } from 'features/Registration/registration-reducer'

const persistConfig = {
  key: 'packs',
  storage,
  whitelist: ['queryParams'],
  transforms: [createWhitelistFilter('queryParams', ['user_id', 'page', 'pageCount'])],
}

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  profile: profileReducer,
  registration: registrationReducer,
  recovery: recoveryPassReducer,
  packs: persistReducer(persistConfig, packsReducer),
  cards: cardsReducer,
  learn: learnReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
export const persistor = persistStore(store)

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
