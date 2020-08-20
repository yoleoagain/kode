import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer'
import { notificationReducer } from './notificationReducer'

export const rootReducer = combineReducers({
    login: loginReducer,
    notification: notificationReducer
})
  
export type RootState = ReturnType<typeof rootReducer>