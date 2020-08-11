import history from '../services/history';
import { routerMiddleware } from 'connected-react-router';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from '../store/rootReducers';
import rootSaga from '../store/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: createRootReducer,
    middleware: [routerMiddleware(history), sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;