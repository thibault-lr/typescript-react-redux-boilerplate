import * as React from 'react';

import { mount } from 'enzyme';

import Main from 'layouts/Main';
import Home from 'pages/Home/Home';
import Blog from 'pages/Blog/Blog';

import { MemoryRouter } from 'react-router';

import App from './App';

describe('App rendering', () => {
  it('Should render the app and Home as basic route', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    // expected app layout
    expect(wrapper.find(Main)).toHaveLength(1);

    // expected router elements
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Blog)).toHaveLength(0);
  });
});
