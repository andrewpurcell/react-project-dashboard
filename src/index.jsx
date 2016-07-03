import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import PROJECTS from './projects';

import appReducer from './reducers/appReducer'
import configureStore from './store/configureStore'

import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
// I'm ignoring warnings about not using this in production.
import DevTools from './containers/DevTools'

const initialStoreState = {
  projects: PROJECTS,
  user: null,
  currentFilter: null,
}

const store = configureStore(initialStoreState);

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app'));
