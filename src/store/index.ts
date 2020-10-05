import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { ThunkAction } from 'redux-thunk';

import type { Action } from '@reduxjs/toolkit';
import { ENABLE_REDUX_DEV_TOOLS } from 'src/constants';
import rootReducer, { createReducer } from './rootReducer';

import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { heroSaga } from '../features/heroes/hero-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import logger from 'redux-logger';

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
const { run: runSaga } = sagaMiddleware;
// Create the store with saga middleware
const middlewares = [sagaMiddleware, thunk, logger];

const enhancers = [
  createInjectorsEnhancer({
    createReducer,
    runSaga,
  }),
];
// Create the store with saga middleware

const store = configureStore({
  reducer: rootReducer,
  devTools: ENABLE_REDUX_DEV_TOOLS,
  enhancers,
});
// run Saga here
runSaga(heroSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch = () => useReduxDispatch<AppDispatch>();

export default store;
