const whyDidYouRender = require('@welldone-software/why-did-you-render');
whyDidYouRender(React, {
  trackAllPureComponents: true,
  trackHooks: true,
});

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

ReactDOM.render(
  <App />,
  document.getElementById('deathmaze-app'),
);
