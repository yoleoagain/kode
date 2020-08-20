export const CHANGE_LOGIN = 'CHANGE_LOGIN'

export interface LoginState {
    login: string,
    loginIsValid: boolean,
    channel: 'phone' | 'email' | null
}

export interface ChangeLoginAction {
  type: typeof CHANGE_LOGIN
  payload: string
}

export type loginActionTypes = ChangeLoginAction// | DeleteMessageAction