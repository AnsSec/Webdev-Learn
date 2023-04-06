import React from 'react';
import ReactDOM from 'react-dom/client';

// Component import 
import App from './App';

// css Property
import "./styles/app.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
