import React from 'react';
import{IncData,DecData} from '../Action/Index'
import { useSelector, useDispatch } from 'react-redux';


function Counter(props) {

    const dispatch=useDispatch();
    const Result = useSelector((state)=>state.ChangeData)
    console.log(Result);
    
    
    return (
       <>

       <div className="container mt-5">
        <div className="row">
            <div className="col text-center">
            <button className='btn btn-primary' onClick={()=>dispatch(DecData())}>Decrement</button>
                <h1>{Result}</h1>
            <button className='btn btn-primary' onClick={()=>dispatch(IncData())}>Increment</button>

            </div>
        </div>
       </div>
       </>
    );
}

export default Counter;