import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import 'scss/_normalize.scss';
import 'scss/global.scss';
import App from './App';

import configureStore from './configureStore';

const history = createBrowserHistory();

const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root'),
);

// Hot Module Replacement
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require

    ReactDOM.render(<App store={store} history={history} />, document.getElementById('root'));
  });
}
