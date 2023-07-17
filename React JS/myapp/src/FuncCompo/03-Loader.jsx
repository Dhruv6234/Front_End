import React, { useEffect, useState } from 'react';
import Compo from '../compo/06-Compo';

function Loader(props) {
    const [loading,setloading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setloading(false)
        } ,1000);
    })
    return (
       <>
       {loading?
       <div className='d-flex justify-content-center mt-5'>
            <div class="spinner-grow text-muted"></div>
            <div class="spinner-grow text-primary"></div>
            <div class="spinner-grow text-success"></div>
            <div class="spinner-grow text-info"></div>
            <div class="spinner-grow text-warning"></div>
            <div class="spinner-grow text-danger"></div>
        </div>
        :
        <Compo/>
}
       </>
    );
}

export default Loader;