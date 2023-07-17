import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './layout/Layout.css'
import 'bootstrap5/src/css/bootstrap.min.css';
import 'bootstrap5/src/js/bootstrap.bundle.min.js'
import Main from './layout/Main';
import MainHelp from './layout/Help/MainHelp'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='help' element={<MainHelp/>}/>
      </Routes>
    </Router>


    
  </React.StrictMode>
);


reportWebVitals();
