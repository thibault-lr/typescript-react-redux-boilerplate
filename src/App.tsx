import * as React from 'react';

import Title from 'components/atoms/Title/Title';
import Main from 'layouts/Main';

class App extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Main>
        <Title title="test" />
      </Main>
    );
  }
}

export default App;
