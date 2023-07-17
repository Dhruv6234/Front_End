export const AddToDo=(data)=>{
    return{
        type:'ADDTODO',
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const DeletToDo=(id)=>{
    return{
        type:'DELETODO',
        id:id
    }
}