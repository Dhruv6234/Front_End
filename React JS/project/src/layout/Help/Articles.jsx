import React, { useState } from 'react';
import ArticleAPI from '../API/ArticleAPI';

function Articles(props) {
    const[api,setapi]=useState(ArticleAPI)
    console.log(api);
    return (
       <>
            <div className="container mt-5">
                <h1>Browse articles by topic</h1>
                <div className="row d-flex justify-content-center">
                    {api.map((res)=>{
                        console.log(res);
                        return(
                            <div className="col-3 text-center article mt-5 mx-2 p-3">
                                <div>
                                    <img src={res.image} alt=""/>
                                    <h3>{res.title}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
       </>
    );
}

export default Articles;