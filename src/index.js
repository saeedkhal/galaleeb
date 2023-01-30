import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppProvider from './context/context';
import axios from 'axios';
import {
  Provider as AlertProvider
} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { options } from './utils/alter.options'


axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_AIR_TABLE_API_TOKEN}`;
axios.defaults.baseURL = 'https://api.airtable.com/v0/appAS2roJGcDlQhwh/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <AppProvider>
      <App />
    </AppProvider>
  </AlertProvider>

);
