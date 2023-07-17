import axios from "axios";
export async function AxiosReqiest(url,method,headers,params)
{
    return params?axios({
        url:url,
        method:method,
        headers:headers,
        data:params
    }):axios({
        url:url,
        method:method,
        headers:headers,
        data:{}
    })
}


const GetAPIDetails=()=>{
    const headers={
        'content-type':'application/json'
    }
    return AxiosReqiest('http://localhost:3000/details', 'GET',headers,{})
}



//delete data

const DeleteAPIDetails=(id)=>{
    const headers={
        'content-type':'application/json'
    }
    return AxiosReqiest('http://localhost:3000/details/'+id, 'DELETE',headers,{})
}

//add  data
const PostAPIDetails=(data)=>{
    axios.post('http://localhost:3000/details',data)
}

//edit data


const EditAPIDetails=(id)=>{
    const headers={
        'content-type':'application/json'
    }
    return AxiosReqiest('http://localhost:3000/details/'+id, 'GET',headers,{})
}

export {GetAPIDetails,DeleteAPIDetails,PostAPIDetails, EditAPIDetails};



