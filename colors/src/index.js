import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './MainContainer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<MainContainer />, document.getElementById('root'));
registerServiceWorker();
