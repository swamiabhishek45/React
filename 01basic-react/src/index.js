import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Sample from './Sample'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Sample />
  </React.StrictMode>
);

