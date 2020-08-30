import { 
  CHANGE_LOGIN, 
  VALIDATE_LOGIN, 
  loginActionTypes,
  ValidateLogin,
  ChangeLoginAction } from '../reducers/types/Login'

export function changeLogin(login: string): ChangeLoginAction {
  return {
    type: CHANGE_LOGIN,
    payload: login
  }
}

export function validateLogin(): ValidateLogin {
  return {
    type: VALIDATE_LOGIN,
    payload: {}
  }
}



