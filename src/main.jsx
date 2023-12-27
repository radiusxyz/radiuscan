import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import TxsContext from './contexts/TxsContext.jsx';

document.getElementById('root') &&
  ReactDOM.createRoot(
    document.getElementById('root')
  ).render(
    <React.StrictMode>
      <TxsContext>
        <App />
      </TxsContext>
    </React.StrictMode>
  );
