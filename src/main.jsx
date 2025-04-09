import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router'; // Make sure this is correctly imported
import './index.css'; // or App.css, whichever you use

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
