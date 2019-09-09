import * as React from "react"


import { shallow } from 'enzyme';
import Title from './title';

test('CheckboxWithLabel changes the text after click', () => {
  const checkbox = shallow(<Title title='test' />);

  // Interaction demo
  expect(checkbox.text()).toEqual('test');

  // Snapshot demo
  expect(shallow).toMatchSnapshot();
});