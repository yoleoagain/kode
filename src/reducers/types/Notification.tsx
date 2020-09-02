export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'
export const SET_NOTIFICATION_OPTIONS = 'SET_NOTIFICATION_OPTIONS'

export interface NotificationOptions {
    type: "success" | "error",
    text: string
}

export interface DisplayOptions {
    show: boolean
}

export type NotificationState = NotificationOptions & DisplayOptions

export interface ShowNotification {
  type: typeof SHOW_NOTIFICATION
  payload: NotificationOptions
}

export interface HideNotification {
    type: typeof HIDE_NOTIFICATION
    payload: any
}

export interface SetNotificationOptions {
    type: typeof SET_NOTIFICATION_OPTIONS
    payload: NotificationOptions
}

export type NotificationActionTypes = ShowNotification | HideNotification | SetNotificationOptions