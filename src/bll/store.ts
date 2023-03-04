import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { loginReducer } from './login-reducer'
import { profileReducer } from './profile-reducer'
import { registrationReducer } from './registration-reducer'

const reducers = combineReducers({
  login: loginReducer,
  profile: profileReducer,
  registration: registrationReducer,
})

const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store
