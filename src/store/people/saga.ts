import API from 'utils/api';
import {
  all, call, fork, put, takeEvery,
} from 'redux-saga/effects';
import { PeopleActionTypes } from './types';
import { fetchError, fetchSuccess } from './action';

function* handleFetch() {
  try {
    const res = yield call(API.getRequest, 'https://randomuser.me/api/?results=5&inc=gender,email&noinfo');
    if (res && res.error) {
      yield put(fetchError(res.error));
    } else {
      yield put(fetchSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack));
    } else {
      yield put(fetchError('An unknown error occured.'));
    }
  }
}

export function* watchFetchRequest() {
  yield takeEvery(PeopleActionTypes.FETCH_REQUEST, handleFetch);
}

function* peopleSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default peopleSaga;
