import { 
    SHOW_NOTIFICATION,
    HIDE_NOTIFICATION,
    HideNotification, 
    ShowNotification 
} from '../reducers/types/Notification'

export function showNotification(): ShowNotification {
    return{
        type: SHOW_NOTIFICATION,
        payload: {}
    }
}

export function hideNotification(): HideNotification {
    return{
        type: HIDE_NOTIFICATION,
        payload: {}
    }
}