import React, { useState } from 'react';
import PopularAPI from './API/PopularAPI'

function Popular(props) {
    const [data, setdata] = useState(PopularAPI)
    console.log(data);
    return (
        <>
            <div className="container mt-5">
                <div className="row text-center mt-5 d-flex justify-content-between">
                    <h4>Popular right now</h4>
                    <p>
                        Other travellers are loving these destinations. Search flights, hotels, and car hire and join them on the adventure.
                    </p>

                    <div className='maindata'>
                        {data.map((res) => {
                            console.log(res);
                            return (

                                <div className=" one d-flex  align-items-center justify-content-between ">
                                    <div className="left">
                                        <img src={res.image} alt="" />
                                    </div>
                                    <div className="right mx-2">
                                        <h5>{res.title}</h5>
                                        <li><a href="#">{res.li}</a></li>
                                    </div>
                                </div>

                            )
                        })}
                    </div>

                </div>
            </div>

        </>
    );
}

export default Popular;