import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyleFont } from './components/Modal/styled';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyleFont />
    <App />

  </React.StrictMode>
);

