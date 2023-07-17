import React from 'react';
import {
Link
  } from "react-router-dom";

function Footer(props) {
    return (
      <>
        <div className="container-fluid footer p-5 mt-5">
            <div className="row">
                <div className="col-3">
                    <button>India-English(UK)-INR</button>
                </div>
                <div className="col-3">
                    <ul>
                        <li><Link to={'/help'}>Help</Link></li>
                        <li> <a href="#">Privacy Settings</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                    
                   
                    
                </div>
                <div className="col-3">
                <ul>
                        <li><a href="#">Help</a></li>
                        <li> <a href="#">Privacy Settings</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
                <div className="col-3">
                <ul>
                        <li><a href="#">Help</a></li>
                        <li> <a href="#">Privacy Settings</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </>
    );
}

export default Footer;