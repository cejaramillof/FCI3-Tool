import './index.scss';

import AppProvider from './appProvider';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
      <AppProvider></AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
