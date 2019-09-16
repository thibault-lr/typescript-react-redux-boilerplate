import * as React from 'react';

import { Title } from 'components/atoms/Title';

class Blog extends React.PureComponent<{}, {}> {
  componentDidMount() {
    console.log('mount');
  }

  public render(): JSX.Element {
    return (
      <div>
        <Title title="Blog" />
      </div>
    );
  }
}

export default Blog;
