import { PeopleActionTypes } from '../../../store/people/types';
import { peopleReducer, initialState } from '../../../store/people/reducer';


describe('People reducer test', () => {
  it('Should display a correct pending fetch request', () => {
    expect(peopleReducer(initialState, { type: PeopleActionTypes.FETCH_REQUEST }))
      .toEqual({ results: [], errors: undefined, loading: true });
  });

  it('Should display a correct success fetch request', () => {
    const reducer = peopleReducer(initialState,
      {
        type: PeopleActionTypes.FETCH_SUCCESS,
        payload: {
          results: {
            msg: 'error',
          },
        },
      });

    expect(reducer)
      .toEqual({ results: { msg: 'error' }, errors: undefined, loading: false });
  });

  it('Should display a correct error fetch request', () => {
    const reqPayload = {
      msg: 'error',
    };

    expect(peopleReducer(initialState,
      { type: PeopleActionTypes.FETCH_ERROR, payload: reqPayload }))
      .toEqual({ results: [], errors: reqPayload, loading: false });
  });
});
