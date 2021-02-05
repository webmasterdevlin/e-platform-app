import { ENABLE_REDUX_DEV_TOOLS } from '../constants';
import rootReducer, { createReducer } from './rootReducer';

import createSagaMiddleware from 'redux-saga';
import { heroSaga } from 'features/heroes/hero-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import logger from 'redux-logger';

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
const { run: runSaga } = sagaMiddleware;
// Create the store with saga middleware
const middlewares = [sagaMiddleware, logger];

const enhancers = [
  createInjectorsEnhancer({
    createReducer,
    runSaga,
  }),
];
// Create the store with saga middleware

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
    ...middlewares,
  ],
  devTools: ENABLE_REDUX_DEV_TOOLS,
  enhancers,
});
// run Saga here
runSaga(heroSaga);

/*export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch = () => useReduxDispatch<AppDispatch>();

export default store;*/
