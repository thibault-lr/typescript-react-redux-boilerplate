import * as React from 'react';

import { mount } from 'enzyme';
import { createBrowserHistory } from 'history';
import { MemoryRouter } from 'react-router';


import Home from 'pages/Home/Home';
import Blog from 'pages/Blog/Blog';

import App from '../App';
import configureStore from '../configureStore';

const history = createBrowserHistory();

const initialState = window.INITIAL_REDUX_STATE;
const mockStore = configureStore(history, initialState);


describe('App rendering', () => {
  it('Should render the app and Home as basic route', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App store={mockStore} history={history} />
      </MemoryRouter>,
    );
    // expected app layout
    expect(wrapper.find(Home)).toHaveLength(1);

    // // expected router elements
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Blog)).toHaveLength(0);
  });
});
