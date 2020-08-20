import { call, takeEvery, put } from 'redux-saga/effects'
import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './reducers/types/Notification'
import { delay } from './common/utils'

function* showNotification(){
    yield call(delay, 3000)
    yield put({type: HIDE_NOTIFICATION})
}

export default function* saga(){
    yield takeEvery(SHOW_NOTIFICATION, showNotification)
}