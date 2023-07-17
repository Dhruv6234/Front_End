import React, { useState } from 'react';
import { useMemo } from 'react';

function UseMemo(props) {
    const[count,setcount]=useState(0)

    const Btnclck=()=>{
        setcount((c)=>c+1)
    }

    const inc = useMemo(()=>Increment(count))
    return (
        <div>
            <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{count}</h1>
                    <button className='btn btn-primary' onClick={Btnclck}>Click</button>
                </div>
            </div>
            </div>         
        </div>
    );
}

const Increment=(mycount)=>{
   for(let i = 0;i<=100;i++)
   {
    mycount+=1
   }
   return mycount;
}

export default UseMemo;