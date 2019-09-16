import * as React from 'react';

import Main from 'layouts/Main';

import { Header } from 'components/molecules/Header';

class Home extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    const menuItems = [
      { content: 'Home', path: '/', active: true },
      { content: 'Blog', path: '/blog', active: false },
    ];

    return (
      <Main>
        <Header items={menuItems} />
        Home page
      </Main>
    );
  }
}

export default Home;
