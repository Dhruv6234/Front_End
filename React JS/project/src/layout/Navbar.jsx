import React from 'react';

function Navbar(props) {
    return (
       <>
       <div className="container-fluid mynav ">
        <div className="mymenu d-flex justify-content-between align-items-center">
            <div className="logo mt-5">
                <img src="img/logo.png" alt="logo"  />
            </div>
            <div className="menu mt-5">
            <i class="fa-solid fa-globe mx-2"></i>
                <span className='mx-2'><i class="fa-solid fa-user"></i>Login</span>
                <i class="fa-solid fa-bars mx-2"></i>
            </div>
       </div>
       <div className="search">
                <div className="inner-seacrch mt-5">
                <h2 >Quickly scan all your favourite travel sites</h2>
                    <input type="text" placeholder='From' className='from-input1 mx-1 mt-3'/>
                    <input type="text" placeholder='To' className='from-input2 mx-1'/>
                    <input type="text" placeholder='Depart' className='from-input2 mx-1'/>
                    <input type="text" placeholder='Return' className='from-input2 mx-1'/>
                    <input type="text" placeholder='From' className='from-input3 mx-1'/>
                    <button type='button'>Search</button>
                    <div className="search-check text-white mt-3">
                   <input type="checkbox" className='mx-2'/>Direct Flights 
                </div> 
                </div>
               
            </div>
       </div>
       </>
    );
}

export default Navbar;