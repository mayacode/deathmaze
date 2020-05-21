import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from '../Layout/Layout';

export function App() {
  return (
    <BrowserRouter>
      <div>App</div>
      <Layout />
    </BrowserRouter>
  );
}

App.displayName = 'App';
App.propTypes = {};
App.whyDidYouRender = true;

export default App;