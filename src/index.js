import React from 'react';
// render function handles rendering our react portion on the dom
import { render } from 'react-dom';
import App from './components/App';
import './index.css';

render(<App />, document.getElementById('root'));