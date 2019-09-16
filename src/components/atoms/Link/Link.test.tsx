import * as React from 'react';

import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import { CustomLink } from './Link';

describe('Link', () => {
  it('Should render a link properly', () => {
    const wrapper = mount(<MemoryRouter><CustomLink path="/test" active={false} content="test" /></MemoryRouter>);

    expect(wrapper.find('div').hasClass('customlink')).toBe(true);
    expect(wrapper.find('div').hasClass('customlink__active')).toBe(false);
    expect(wrapper.find('a').at(0).text()).toEqual('test');
    expect(wrapper.find('a').at(0).prop('href')).toEqual('/test');
  });

  it('Should render an active link properly', () => {
    const wrapper = mount(<MemoryRouter><CustomLink path="/test" active content="test" /></MemoryRouter>);

    expect(wrapper.find('div').hasClass('customlink__active')).toBe(true);
  });
});
