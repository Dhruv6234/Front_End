const IntialData = {
    list:[]
}
const AllData = (state=IntialData,action)=>
{
    switch(action.type)
    {
        case 'ADDTODO':
            const id = action.payload.id
            const data = action.payload.data
            console.log(data,"from action");
            return{
                ...state,
                list:[
                    ...state.list,{
                        id:id,
                        data:data
                    }
                ]
            }
        case 'DELETODO':
            const list=state.list.filter((ele)=>ele.id!==action.id)
            return{
                ...state,
                list:list
            }
        default:return state;
    }
}
export default AllData;