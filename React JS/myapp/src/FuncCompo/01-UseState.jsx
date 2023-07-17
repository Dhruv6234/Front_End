 import React, { useState } from 'react';

function UseState(props) {
    const[name,setname]=useState('Tops')

    

    const[counter,setcounter]=useState(0)
    const clckhndle=()=>{
        setname('React class')
    }
    return (
       <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{name}</h1>
                        <button className='btn btn-primary' onClick={clckhndle}>Click me</button>
                        <h1>{counter}</h1>
                        <button onClick={()=>setcounter(counter+1)} className='btn btn-success'>click me</button>
                    </div>
                </div>
            </div>
       </>
    );
}

export default UseState;