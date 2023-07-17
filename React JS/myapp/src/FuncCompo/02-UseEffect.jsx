import React from 'react';
import {useEffect, useState} from 'react'

function Useeffect(props) {
    const [count,setcount]=useState(0)
    const Btnclck=()=>{
        setcount(count+1)
    }


    useEffect(()=>{
        console.log("useeffect called");
        console.log(document.title=`you have clicked ${count} times`);
    },[Btnclck])

    return (
       <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button className='btn btn-primary' onClick={Btnclck}>You have clicked {count} Times</button>
                    </div>
                </div>
            </div>
       </>
    );
}
export default Useeffect;