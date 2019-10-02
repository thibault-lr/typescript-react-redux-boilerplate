import { Reducer } from 'redux';
import { PeopleState, PeopleActionTypes } from './types';

// Type-safe initialState!
export const initialState: PeopleState = {
  results: [],
  errors: undefined,
  loading: false,
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<PeopleState> = (state = initialState, action) => {
  switch (action.type) {
    case PeopleActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case PeopleActionTypes.FETCH_SUCCESS: {
      console.log('this case', action);
      return { ...state, loading: false, ...action.payload };
    }
    case PeopleActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as peopleReducer };
