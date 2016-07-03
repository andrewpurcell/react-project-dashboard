import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import PROJECTS from './projects';

render(<App items={PROJECTS} />, document.getElementById('app'));
