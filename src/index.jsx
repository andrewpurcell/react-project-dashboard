import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, dispatch } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App';
import configureStore from './store/configureStore'
import initialState from './store/initialState'

// I'm ignoring warnings about not using this in production.
import DevTools from './containers/DevTools'

const store = configureStore(initialState);

fetch('http://localhost:3000/api/projects')
  .then((response) => {
    return response.json()
  })
  .then((body) => {
    store.dispatch({ type: 'LOAD_PROJECTS', projects: body })
  })
  .catch((error) => {
    console.log('Error', arguments)
    store.dispatch({ type: 'LOAD_PROJECTS_ERROR' })
  })

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app'));
