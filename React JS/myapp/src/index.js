import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import User from './User';
import Demo from './Demo';
import Navbar from './compo/Navbar';

import Navbar01 from './compo/Navbar01';




import 'bootstrap5/src/css/bootstrap.min.css'   //bootstrap five calling path .... callevery files




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
        {/* <User />
        <Demo /> */}
    <Navbar/>
    {/* <Navbar01/> */}
   
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
