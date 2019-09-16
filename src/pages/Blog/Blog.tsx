import * as React from 'react';

import Main from 'layouts/Main';

import { Header } from 'components/molecules/Header';

class Blog extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    const menuItems = [
      { content: 'Home', path: '/', active: false },
      { content: 'Blog', path: '/blog', active: true },
    ];

    return (
      <Main>
        <Header items={menuItems} />
        Blog page
      </Main>
    );
  }
}

export default Blog;
