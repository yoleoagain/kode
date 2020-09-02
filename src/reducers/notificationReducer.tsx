import { 
    SHOW_NOTIFICATION,
    HIDE_NOTIFICATION,
    SET_NOTIFICATION_OPTIONS,
    NotificationActionTypes, 
    NotificationState 
} from '../reducers/types/Notification'

const initialState: NotificationState = {
    type: "error",
    text: "",
    show: false
}

export function notificationReducer(state = initialState, action: NotificationActionTypes) : NotificationState {
    switch(action.type){
        case SHOW_NOTIFICATION:
            return {...state, ...action.payload, show: true}

        case HIDE_NOTIFICATION: 
            return {...state, show: false}
            
        case SET_NOTIFICATION_OPTIONS: 
            return {...state, ...action.payload}

        default: return state
    }
}