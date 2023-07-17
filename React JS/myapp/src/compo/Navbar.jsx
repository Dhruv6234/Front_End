import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Home';
import About from './About';
import State from './03-State';
import LifeCycle from './04-LifeCycle';
import API from './05-API';
import Compo from './06-Compo';
import UseState from 'D:/myapp/src/FuncCompo/01-UseState'
import UseEffect from 'D:/myapp/src/FuncCompo/02-UseEffect';
import Loader from '../FuncCompo/03-Loader';
import FetchApi from '../FuncCompo/04-Api';
import UseContext from '../FuncCompo/07-UseContext';
import StyleCompo from '../FuncCompo/08-StyleCompo';
import UseMemo from '../FuncCompo/09-UseMemo';

class Navbar extends Component {
  render() {
    const data = {
      '/home': 'Home', '/about': 'About', '/state': 'State', '/lifecycle': 'LifeCycle', '/api': 'API', '/compo': 'Compo', './usestate': 'UseState', './useeffect':'UseEffect', './loader':'Loader','./fetchapi':'FetchApi', './usecontext':'UseContext','./stylecompo':'StyleCompo','./usememo':'UseMemo'
    }
    const AllData = Object.entries(data).map((res, i) => {
      // console.log(res);
      return <li className="nav-item" key={i}  >
        <Link className="nav-link" to={res[0]}>{res[1]}</Link>
      </li>
    })
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
                    {AllData}
                  </ul>
                  {/* <form className="d-flex">
                    <input className="form-control me-2" type="text" placeholder="Search" />
                    <button className="btn btn-primary" type="button">Search</button>
                  </form> */}
                </div>

              </div>
            </nav>
            <Routes>
              <Route path='/Home' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/state' element={<State />} />
              <Route path='/lifecycle' element={<LifeCycle />} />
              <Route path='/api' element={<API />} />
              <Route path='/compo' element={<Compo />} />
              <Route path='/usestate' element={<UseState />} />
              <Route path='/useEffect' element={<UseEffect />} />
              <Route path='/loader' element={<Loader />} />
              <Route path='/fetchapi' element={<FetchApi />} />
              <Route path='/usecontext' element={<UseContext />} />
              <Route path='/stylecompo' element={<StyleCompo />} />
              <Route path='/usememo' element={<UseMemo />} />






              


            </Routes>
          </Router>
        </>
      </div>
    );
  }
}

export default Navbar;