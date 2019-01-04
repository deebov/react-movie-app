import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App/App';

import './index.css';

function render(App) {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
  );
}

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    const NextRoot = require('./components/App/App').default;
    render(NextRoot);
  });
}
