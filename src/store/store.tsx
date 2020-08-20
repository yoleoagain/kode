import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from '../saga'
import { RootState, rootReducer } from '../reducers/rootReducer'

export function configureStore() {

    const sagaMiddleware = createSagaMiddleware ()
    const store = createStore(rootReducer, {},  applyMiddleware(sagaMiddleware))
    
    sagaMiddleware.run(saga)

    return store
}

export const store = configureStore()