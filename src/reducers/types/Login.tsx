export const CHANGE_LOGIN = 'CHANGE_LOGIN'
export const VALIDATE_LOGIN = 'VALIDATE_LOGIN'
export const GET_ACCESS_CODE = 'GET_ACCESS_CODE'
export const ACCESS_CODE_REQUEST = 'ACCESS_CODE_REQUEST'
export const ACCESS_CODE_SUCCESS = 'ACCESS_CODE_SUCCESS'
export const ACCESS_CODE_FAILURE = 'ACCESS_CODE_FAILURE'

export type Channel = 'phone' | 'email' | null

export interface LoginState {
    login: string,
    loginIsValid: boolean,
    channel: Channel,
    fetching: false
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