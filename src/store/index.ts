import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { all, fork } from 'redux-saga/effects';


import peopleSaga from './people/saga';
import { peopleReducer } from './people/reducer';
import { PeopleState } from './people/types';

// The top-level state object
export interface ApplicationState {
  people: PeopleState
  router: RouterState
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = (history: History) => combineReducers({
  people: peopleReducer,
  router: connectRouter(history),
});

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
  yield all([fork(peopleSaga)]);
}
