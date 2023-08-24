import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import './bootstrap.css';
import Hello from './hello';
import { BrowserRouter } from 'react-router-dom';
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  <React.StrictMode>
   
  <Hello/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

