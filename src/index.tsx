import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'scss/_normalize.scss';
import 'scss/global.scss';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// Hot Module Replacement
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    const NewApp = require('./App').default;

    ReactDOM.render(<NewApp />, document.getElementById('root'));
  });
}
