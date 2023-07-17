import React from 'react';


function HelpHeader(props) {
    return (
        <>
            <div className="container d-flex justify-content-between mt-5 align-items-center">
                <div className="logo">
                    <img src="img/logo2.png" alt="" />
                </div>
                <div className="txt">
                        <a href="#">Go Back to skyscanner.com</a>
                        <button >en-us</button>
                </div>
            </div>
        </>
    );
}

export default HelpHeader;