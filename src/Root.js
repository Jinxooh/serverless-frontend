// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';

const Root = () => (
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Root;
