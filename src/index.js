  import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './Context'; 
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Routes />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);