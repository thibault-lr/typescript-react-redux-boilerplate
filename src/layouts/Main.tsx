import * as React from 'react';

import { Header } from 'components/molecules/Header';

import { IHeaderCardProps } from 'components/atoms/HeaderCard';

import './style.scss';

class MainLayout extends React.PureComponent<{children: any}, {}> {
  public render(): JSX.Element {
    const items: IHeaderCardProps[] = [
      { content: 'Header' },
      { content: 'Header2' },
      { content: 'Header3' },
    ];

    const { children } = this.props;

    return (
      <div className="main">
        <Header items={items} />
        {children}
      </div>
    );
  }
}

export default MainLayout;
