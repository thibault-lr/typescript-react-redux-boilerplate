import * as React from 'react';

import { mount, ReactWrapper } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';


import Home from 'pages/Home/Home';


import { MemoryRouter } from 'react-router';


const mockStore = configureStore([]);


describe('Home', () => {
  it('Should match the snapshot', () => {
    const initialState = { people: { loading: false, error: false, results: false } };

    const store = mockStore(initialState);
    const wrapper: ReactWrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Should display the user list', () => {
    const initialState = {
      people: {
        loading: false,
        error: false,
        results: [
          {
            email: 'test@mail.com',
          },
        ],
      },
    };

    const store = mockStore(initialState);
    const wrapper: ReactWrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );
    expect(wrapper.find('.user').text()).toBe('test@mail.com');
  });

  it('Should display the loading ', () => {
    const initialState = {
      people: {
        loading: true,
        error: false,
        results: [
        ],
      },
    };

    const store = mockStore(initialState);
    const wrapper: ReactWrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );

    expect(wrapper.text()).toContain('Loading user');
  });
});
