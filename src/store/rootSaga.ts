import { all, fork } from 'redux-saga/effects';
import peopleSaga from './people/saga';

// eslint-disable-next-line import/prefer-default-export
export function* rootSaga() {
  yield all([fork(peopleSaga)]);
}
