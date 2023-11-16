import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>,
)
