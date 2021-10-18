import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { AppProvider } from './hook/context';
import {HashRouter} from 'react-router-dom'

ReactDOM.render(
  <React.Fragment>
    <AppProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AppProvider>
  </React.Fragment>,
  document.getElementById('root')
);

