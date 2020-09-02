import Eff, { takeEvery, put, select } from 'redux-saga/effects'
import { SHOW_NOTIFICATION, HIDE_NOTIFICATION, NotificationOptions } from './reducers/types/Notification'
import { GET_ACCESS_CODE, VALIDATE_LOGIN, ACCESS_CODE_REQUEST, ACCESS_CODE_FAILURE, ACCESS_CODE_SUCCESS } from './reducers/types/Login'
import Api from './api'
import { delay } from './common/utils'

// Иначе typescript дает ошибку
const call:any = Eff.call

function* showNotification(){
    yield call(delay, 3000)
    yield put({type: HIDE_NOTIFICATION})
}

function* getAccessCode(){
    const isValid = yield select(state => state.login.loginIsValid) 
}

function* login(){
    yield put({type: VALIDATE_LOGIN})
    const login = yield select(state => state.login) 
    
    if (login.isValid){
        try {
            yield put({type: ACCESS_CODE_REQUEST});
            const data = yield call(Api.getAccessCode, {channel: login.channel, login: login.login});
            yield put({type: ACCESS_CODE_SUCCESS, data: data});
         } catch (e) {
            yield put({type: ACCESS_CODE_FAILURE, message: e.message});
         }
    }

}

export default function* saga(){
    yield takeEvery(GET_ACCESS_CODE, login)
    yield takeEvery(SHOW_NOTIFICATION, showNotification)
}