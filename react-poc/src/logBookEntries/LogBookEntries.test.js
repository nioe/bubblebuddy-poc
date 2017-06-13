import React from 'react';
import ReactDOM from 'react-dom';
import LogBookEntries from './LogBookEntries';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogBookEntries />, div);
});
