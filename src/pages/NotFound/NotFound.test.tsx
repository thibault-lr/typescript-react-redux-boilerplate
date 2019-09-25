import * as React from 'react';

import { mount } from 'enzyme';
import NotFound from 'pages/NotFound/NotFound';


describe.only('Not Found', () => {
  it('Should render the not found page correctly', () => {
    const wrapper = mount(<NotFound />);

    expect(wrapper.text()).toBe('Not Found');
  });
});
