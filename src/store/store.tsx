import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import saga from '../saga'
import { RootState, rootReducer } from '../reducers/rootReducer'

export function configureStore() {

    const sagaMiddleware = createSagaMiddleware()

    return createStore( rootReducer, {},  composeWithDevTools( applyMiddleware(sagaMiddleware) ) )

}

export const store = configureStore()