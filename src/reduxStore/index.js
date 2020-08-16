import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import RootReducer from './rootReducers';
import rootSagas from './rootSagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(RootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSagas);

export default store;
