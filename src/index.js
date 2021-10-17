import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { AppProvider } from './hook/context';
import {HashRouter} from 'react-router-dom'

ReactDOM.render(
  <React.Fragment>
    <HashRouter>
    <AppProvider>
      <App />
    </AppProvider>
    </HashRouter>
  </React.Fragment>,
  document.getElementById('root')
);

