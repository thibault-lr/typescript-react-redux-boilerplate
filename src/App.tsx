import * as React from 'react';
import { History } from 'history';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import Home from 'pages/Home/Home';
import Blog from 'pages/Blog/Blog';
import NotFound from 'pages/NotFound/NotFound';

import { ApplicationState } from 'store';
import { ConnectedRouter } from 'connected-react-router';

interface AppProps {
  store: Store<ApplicationState>
  history: History
}

// eslint-disable-next-line react/prop-types
const App: React.FC<AppProps> = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
