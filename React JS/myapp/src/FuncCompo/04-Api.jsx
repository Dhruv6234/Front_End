import React, { useEffect, useState } from 'react';

function Api(props) {
    const [loader,setloader]=useState('pending')
    const [data,setdata]=useState('')

    useEffect(()=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res)=>res.json())
            .then((Responce)=>{
                console.log(Responce);
                setloader('completed')
                setdata(Responce)
            }).catch((Error)=>{
                console.log(Error);
            })
        }, 2000);
    })
    return (
      <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{loader}</h1>
                    <div>{loader=="completed"?<>{JSON.stringify(data)}</>:"no data found"}</div>
                </div>
            </div>
        </div>
      </>
    );
}

export default Api;