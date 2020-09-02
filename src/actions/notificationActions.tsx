import { 
    SHOW_NOTIFICATION,
    HIDE_NOTIFICATION,
    HideNotification, 
    ShowNotification,
    NotificationOptions
} from '../reducers/types/Notification'

export function showNotification(options: NotificationOptions): ShowNotification {
    return{
        type: SHOW_NOTIFICATION,
        payload: options
    }
}

export function hideNotification(): HideNotification {
    return{
        type: HIDE_NOTIFICATION,
        payload: {}
    }
}