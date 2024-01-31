import React from 'react';
import ReactDOM from 'react-dom/client';
import Sample from './Sample';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Sample />
  </React.StrictMode>
);

