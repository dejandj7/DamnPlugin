import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistingReducer } from './root-reducer';
import { rootSaga } from './root-saga';

export const ConfigureStore = (initialState) => {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    persistingReducer(),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  return { store, persistor };
};

export default ConfigureStore;
