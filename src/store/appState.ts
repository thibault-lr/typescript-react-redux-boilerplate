import { RouterState } from 'connected-react-router';
import { PeopleState } from './people/types';

// The top-level state object
export interface ApplicationState {
  people: PeopleState
  router: RouterState
}
