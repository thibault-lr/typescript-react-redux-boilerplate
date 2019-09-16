import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Blog from 'pages/Blog/Blog';
import NotFound from 'pages/NotFound/NotFound';


class App extends React.PureComponent<{}, {}> {
  public render(): JSX.Element {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
