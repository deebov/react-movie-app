import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './components/App/App';
import store from './store/store';

import './index.css';

function render(App) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
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
