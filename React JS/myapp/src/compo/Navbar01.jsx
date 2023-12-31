import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  

import Home01 from './Home01';
import About01 from './About01';

class Navbar01 extends Component {
    render() {
        return (
            <div>
                <>
                <Router>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to={'/home01'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/about01'}>About</Link>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search"/>
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
<Routes>
    <Route path='/home01' element={<Home01/>}></Route>
    <Route path='/about01' element={<About01/>}></Route>
</Routes>
</Router>
                </>
            </div>
        );
    }
}

export default Navbar01;