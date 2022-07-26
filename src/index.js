
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';

// hydrateRoot(<App />, document.getElementById('root'));
const container = document.getElementById("root");
const root = ReactDOM.hydrateRoot(container, <App />);