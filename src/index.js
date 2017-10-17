import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/style.css';

import Main from './components/Main';

const renderApp = (NewRoot) => {
  render(
    <AppContainer>
      <NewRoot />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};

renderApp(Main);

if (module.hot) {
  module.hot.accept('./components/Main', () => {
    const Main = require('./components/Main').default;
    renderApp(Main);
  });
}
