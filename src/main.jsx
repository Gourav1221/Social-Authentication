import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-w9agmywatrq8.frontegg.com',
  clientId: '810cb325-832c-45c2-9ddb-33eb2f417dff'
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>

      <App />

      </FronteggProvider>
 
  </React.StrictMode>
)
