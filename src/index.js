import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppClean from './App.clean';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppClean />, document.getElementById('root'));
registerServiceWorker();
