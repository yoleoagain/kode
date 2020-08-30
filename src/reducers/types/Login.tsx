export const CHANGE_LOGIN = 'CHANGE_LOGIN'
export const VALIDATE_LOGIN = 'VALIDATE_LOGIN'

export interface LoginState {
    login: string,
    loginIsValid: boolean,
    channel: 'phone' | 'email' | null
}

export interface ChangeLoginAction {
  type: typeof CHANGE_LOGIN
  payload: string
}

export interface ValidateLogin {
  type: typeof VALIDATE_LOGIN
  payload: any
}

export type loginActionTypes = ChangeLoginAction | ValidateLogin// | DeleteMessageAction