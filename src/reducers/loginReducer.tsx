import { LoginState, loginActionTypes, CHANGE_LOGIN, VALIDATE_LOGIN } from './types/Login'
import { isNumberOrEmail, isEmail, isPhoneNumber } from '../common/utils'

const initialState: LoginState = {
  login: '',
  loginIsValid: true,
  channel: null,
  fetching: false
}

export function loginReducer(state = initialState, action: loginActionTypes): LoginState {
  switch (action.type) {
    case CHANGE_LOGIN:
      return {...state, login: action.payload, channel: isNumberOrEmail(action.payload) }
  
    case VALIDATE_LOGIN:
      const { login } = state
      let channel = null
      let loginIsValid = false

      if (isPhoneNumber(login)){
        channel = 'phone'
        loginIsValid = true
      } else if (isEmail(login)){
        channel = 'email'
        loginIsValid = true
      }

      return {...state, loginIsValid}

    default:
      return state;
  }
}