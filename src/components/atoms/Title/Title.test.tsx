import * as React from 'react';


import { shallow } from 'enzyme';
import Title from './Title';

test('CTitle should be displayed correctly', () => {
  const checkbox = shallow(<Title title="test" />);

  // Interaction demo
  expect(checkbox.text()).toEqual('test');

  // Snapshot demo
  expect(shallow).toMatchSnapshot();
});
