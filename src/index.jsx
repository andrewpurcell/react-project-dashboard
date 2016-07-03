import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import PROJECTS from './projects';

import appReducer from './reducers/appReducer'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialStoreState = {
  projects: PROJECTS,
  user: null,
  currentFilter: null,
}

const store = createStore(appReducer, initialStoreState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));
