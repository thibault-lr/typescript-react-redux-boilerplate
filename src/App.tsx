import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { Title } from 'components/atoms/Title';
import Main from 'layouts/Main';
import Home from 'pages/Home/Home';
import Blog from 'pages/Blog/Blog';


class App extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Main>
        <Title title="test" />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </Router>
      </Main>
    );
  }
}

export default App;
