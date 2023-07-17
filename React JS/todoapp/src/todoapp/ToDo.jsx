import React, { useState } from 'react';
import { AddToDo,DeletToDo} from '../Action/index';
import{useSelector,useDispatch} from 'react-redux'

function ToDo(props) {
    const[inptdata,setinptdata]= useState('')
    const dispatch=useDispatch();
    const result = useSelector((state)=>state.listdata.list)
    console.log(result);
    return (
        <>

            <div className="container mt-5">
                <div className="row ">
                    <div className="col-3">
                        <input type="text" className='from-control' value={inptdata} onChange={(e)=>setinptdata(e.target.value)}/>
                        <br />
                        <button className='btn btn-primary mt-3 ' onClick={()=>{dispatch(AddToDo(inptdata),setinptdata(''))}}>Add task</button>
                        <br />
                        {result.map((res)=>{
                            return(
                                <div className='d-flex'>
                                <h3 className='mx-2 mt-3'>{res.data}</h3>
                                <button className='btn btn-danger mt-3' onClick={()=>dispatch(DeletToDo(res.id))}>Delate</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ToDo;