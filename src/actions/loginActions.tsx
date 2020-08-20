import { CHANGE_LOGIN, loginActionTypes, ChangeLoginAction } from '../reducers/types/Login'

export function changeLogin(login: string): ChangeLoginAction {
  return {
    type: CHANGE_LOGIN,
    payload: login
  }
}



