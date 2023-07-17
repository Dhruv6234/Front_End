import { useEffect, useState } from "react";
import { GetAPIDetails,DeleteAPIDetails, PostAPIDetails, EditAPIDetails,GetDetails} from "../CRUDAPP/API";

export const GetAPIAction=()=>{
    return function(dispatch){
        return GetAPIDetails().then((res)=>{
            console.log(res);
            dispatch({
                type:'GET_DETAILS',
                payload:res.data
            })
        })
    }
}


//delete data


export const DeleteAPIAction=(id)=>{
    return function(dispatch){
        return DeleteAPIDetails(id).then((res)=>{
            console.log(res);
            dispatch({
                type:'DELETE_DETAILS',
                payload:true
            })
        })
    }
}


//add data


export const PostAPIAction=(request)=>{
    return function(dispatch){
        return PostAPIDetails(request).then((res)=>{
            console.log(res,"post data");
            dispatch({
                type:'POST_DETAILS',
                payload:''
            })
        })
    }
}


//edit data

export default(props)=>{
    const[getdetailsid,setgetdetailsid]= useState({})
    const GetDetails = (requestid)=>{
        console.log(requestid);
        return EditAPIDetails(requestid).then((res)=>{
            console.log("edit id",res);
            setgetdetailsid(res)
        })
    }
    useEffect(()=>{
        GetDetails(props)
    },[])
    return[getdetailsid]
}