import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { peopleReducer } from './people/reducer';

const createRootReducer = (history: History) => combineReducers({
  people: peopleReducer,
  router: connectRouter(history),
});

export {
  // eslint-disable-next-line import/prefer-default-export
  createRootReducer,
};
