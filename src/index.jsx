import React from 'react';
import ReactDOM from 'react-dom/client';
// Components
import App from './App';
// Context
import Context from './Components/utils/global.context';
// Router
import { BrowserRouter } from 'react-router-dom';
// Styles
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Context>
  </React.StrictMode>
);


