import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobalStyle from './GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>
);