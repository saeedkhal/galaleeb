import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppProvider from './context/context';
import axios from 'axios';
axios.defaults.headers.common['Authorization'] = 'Bearer keyZ4drcrVYtlksE4';
axios.defaults.baseURL = 'https://api.airtable.com/v0/appAS2roJGcDlQhwh/';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
