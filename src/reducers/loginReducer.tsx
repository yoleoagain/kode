import { LoginState, loginActionTypes, CHANGE_LOGIN } from './types/Login'
import { isNumberOrEmail } from '../common/utils'

const initialState: LoginState = {
  login: '',
  loginIsValid: false,
  channel: null
}

export function loginReducer(state = initialState, action: loginActionTypes): LoginState {
  switch (action.type) {
    case CHANGE_LOGIN:
      const { payload } = action  
      return {...state, login: payload, channel: isNumberOrEmail(payload) };
  
    default:
      return state;
  }
}