import * as React from 'react';

import { shallow } from 'enzyme';

import Main from 'layouts/Main';

test('Main should render correctly', () => {
  const main = shallow(
    <Main>
      <div>Test</div>
    </Main>,
  );

  expect(main).toMatchSnapshot();
  expect(main.contains(<div>Test</div>)).toBe(true);
});
