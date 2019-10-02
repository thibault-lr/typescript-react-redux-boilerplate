/* eslint-disable no-undef */
interface IPeople {
  gender: string,
  email: string,
}

interface IPeopleFetchResultsType {
  results : IPeople[]
}


enum PeopleActionTypes {
  FETCH_REQUEST = '@@people/FETCH_REQUEST',
  FETCH_SUCCESS = '@@people/FETCH_SUCCESS',
  FETCH_ERROR = '@@people/FETCH_ERROR'
}


// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
interface PeopleState {
  readonly loading: boolean
  readonly results: IPeople[]
  readonly errors?: string
}

export {
  IPeople,
  IPeopleFetchResultsType,
  PeopleActionTypes,
  PeopleState,
};
