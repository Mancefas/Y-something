import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'components/App/App';
import { DataContextProvider } from 'context/DataContext';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>
);
