import React from 'react';

function BgHelp(props) {
    return (
        <>
        <div className="container-fluid bghelp mt-5 text-white d-flex justify-content-center align-items-center">
            
            <div>
            <h1>What can we help you with today?</h1>
                <input type="text" className='myinpt'/>
                <button className='mx-3'>Search</button>
            </div>

        </div>
        </>
    );
}

export default BgHelp;