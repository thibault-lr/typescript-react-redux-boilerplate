import * as React from 'react';

import './style.scss';

class MainLayout extends React.PureComponent<{children: any}, {}> {
  public render(): JSX.Element {
    const { children } = this.props;

    return (
      <div className="main">
        {children}
      </div>
    );
  }
}

export default MainLayout;
