import { callApi } from 'utils/api';
import {
  all, call, fork, put, takeEvery,
} from 'redux-saga/effects';
import { PeopleActionTypes } from './types';
import { fetchError, fetchSuccess } from './action';

const API_ENDPOINT = 'https://randomuser.me';

function* handleFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, 'get', API_ENDPOINT, 'api/?results=5&inc=gender,email&noinfo');

    if (res.error) {
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

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(PeopleActionTypes.FETCH_REQUEST, handleFetch);
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* peopleSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default peopleSaga;
