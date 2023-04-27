import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TaskProvider } from './contexts/task.context';

import GlobalStyle from './GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Fragment>
    <TaskProvider>
      <GlobalStyle />
      <App />
    </TaskProvider>
  </Fragment>
);