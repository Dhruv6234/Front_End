import React from 'react';

function Explore(props) {
    return (
      <>
      <div className="container explore mt-5">
            <div className="row">
                <div className="col-4 ">
                    <button className='text-white p-4 d-flex justify-content-start'><i class="fa-solid fa-hotel mx-2 p-1"></i>Hotels</button>
                </div>
                <div className="col-4">
                    <button className='text-white p-4 d-flex justify-content-start'><i class="fa-solid fa-car-side mx-2 p-1"></i>Car Hire</button>
                </div>
                <div className="col-4">
                    <button className='text-white p-4 d-flex justify-content-start'><i class="fa-solid fa-globe mx-2 p-1"></i>Explore EveryWhere</button>
                </div>
                
            </div>
            <img src="img/hotle.webp" alt=""  className='mt-5 hotel-rounded'/>
      </div>
    
      </>
    );
}

export default Explore;