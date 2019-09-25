import * as React from 'react';

import { mount } from 'enzyme';
import Blog from 'pages/Blog/Blog';
import { Header } from 'components/molecules/Header';

import { MemoryRouter } from 'react-router';


describe.only('Blog', () => {
  it('Should render the blog page correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Header).length).toBe(1);
  });
});
