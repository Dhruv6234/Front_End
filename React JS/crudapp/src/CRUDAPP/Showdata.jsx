import React from 'react';
import { GetAPIDetails } from './API';
import { DeleteAPIAction, GetAPIAction } from '../Action';
import { useSelector, useDispatch } from 'react-redux/';
import { useEffect } from 'react';
import Home from './Home';


import {
    Link
  } from "react-router-dom";

function Showdata(props) {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.reducer.details);
    const isDelete = useSelector((state) => state.reducer.isDelete)

    useEffect(() => {
        dispatch(GetAPIAction())
    }, dispatch)
    console.log(result);
    if (isDelete) {
        window.location.reload(false)
    }

    const Returndata = result?result.map((res) => {
        return <>
            <tr>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.phone}</td>
                <td>{res.country}</td>
                <td><button className='btn btn-danger' onClick={() => dispatch(DeleteAPIAction(res.id))}>Delete</button>/
                
                <Link to={`/update/${res.id}`} className='btn btn-success'>Update</Link>
                </td>

            </tr>
        </>
    }):null
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <center><h1 className='text-success'>Welcome to Redux CRUD Application</h1></center>
                    <div className="col mt-3">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        <table className='table text-center text-danger'>
                            <th>Country</th>
                            <th>Action</th>
                            <tbody>
                                {Returndata}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
           
        </>
    );
}

export default Showdata;