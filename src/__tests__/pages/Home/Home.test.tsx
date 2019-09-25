import * as React from 'react';

import { mount, ReactWrapper } from 'enzyme';
import Home from 'pages/Home/Home';

import * as infosService from 'services/v1/infos';

import { Title } from 'components/atoms/Title';
import { Header } from 'components/molecules/Header';

import { MemoryRouter } from 'react-router';

const infos = {
  results: [
    { email: 'test' },
  ],
};
infosService.default.getInfos = jest.fn();

describe('Home', () => {
  beforeEach(() => {
    (infosService.default.getInfos as jest.Mock).mockClear();
  });

  it('Should match the snapshort', () => {
    const wrapper: ReactWrapper = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render the Home page correctly', async () => {
    (infosService.default.getInfos as jest.Mock).mockResolvedValue(infos);

    const wrapper: ReactWrapper = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const instance = wrapper.find(Home).instance();


    // test before api call
    expect(wrapper.find('.loading').text().includes('Loading user ...')).toBe(true);

    await (instance as Home).componentDidMount();

    wrapper.update();

    expect(wrapper.find(Header).length).toBe(1);

    expect(wrapper.find(Title).text().includes('Hello test')).toBe(true);
  });

  it('Should render an error on API fails', async () => {
    (infosService.default.getInfos as jest.Mock).mockRejectedValue('error');
    const wrapper: ReactWrapper = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const instance = wrapper.find(Home).instance();

    await (instance as Home).componentDidMount();
    wrapper.update();

    expect(wrapper.find('.error').text().includes('Error loading')).toBe(true);
  });
});
