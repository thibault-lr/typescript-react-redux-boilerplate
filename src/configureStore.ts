import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';
import { createRootReducer } from 'store/rootReducer';
import { rootSaga } from 'store/rootSaga';

// Import the state interface and our combined reducers/sagas.
import { ApplicationState } from './store/appState';

// eslint-disable-next-line max-len
export default function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState> {
  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({});
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // We'll create our store with the combined reducers/sagas, and the initial Redux state that
  // we'll be passing from our entry point.
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
  );

  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run(rootSaga);
  return store;
}
