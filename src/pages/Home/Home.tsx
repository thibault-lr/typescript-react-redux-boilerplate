import * as React from 'react';

import { Title } from 'components/atoms/Title';

class Home extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <Title title="Home" />
      </div>
    );
  }
}

export default Home;
