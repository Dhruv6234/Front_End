import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap5/src/css/bootstrap.min.css'
import Showdata from './CRUDAPP/Showdata';
import { Provider } from 'react-redux';
import store from './store';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './CRUDAPP/Home';
import Update from './CRUDAPP/Update';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/showdata' element={<Showdata/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
   </Router>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
