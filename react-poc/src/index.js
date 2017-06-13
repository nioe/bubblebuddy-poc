import React from 'react';
import ReactDOM from 'react-dom';
import LogBookEntries from './logBookEntries/LogBookEntries';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<LogBookEntries />, document.getElementById('root'));
registerServiceWorker();
