import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App';
import configureStore from './store/configureStore'
import initialState from './store/initialState'

// I'm ignoring warnings about not using this in production.
import DevTools from './containers/DevTools'

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app'));
