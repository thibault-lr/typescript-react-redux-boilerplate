import { action } from 'typesafe-actions';
import { PeopleActionTypes, IPeopleFetchResultsType } from './types';

export const fetchRequest = () => action(PeopleActionTypes.FETCH_REQUEST);

// eslint-disable-next-line max-len
export const fetchSuccess = (data: IPeopleFetchResultsType) => action(PeopleActionTypes.FETCH_SUCCESS, data);

export const fetchError = (message: string) => action(PeopleActionTypes.FETCH_ERROR, message);
