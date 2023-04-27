import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TaskProvider } from './contexts/task.context';

import GlobalStyle from './GlobalStyle';
import { UserProvider } from './contexts/user.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Fragment>
    <UserProvider>
    <TaskProvider>
      <GlobalStyle />
      <App />
    </TaskProvider>
    </UserProvider>
  </Fragment>
);