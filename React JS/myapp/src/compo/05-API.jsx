import React, { Component } from 'react';

class API extends Component {

    constructor()
    {
        super()
        this.state={status:"pending" , data:''}
    }

    
    componentDidMount()
    {
        setTimeout(()=>{
    
            fetch('https://jsonplaceholder.typicode.com/albums')
            .then((res)=>res.json())
            .then((resp)=>{
                console.log(resp);
                this.setState({status:"completed",data:resp})
                let output=document.getElementById('display')
                resp.forEach(element => {
                    output.innerHTML+=`
                    <tr>
                    <td>${element.userId}</td>
                    <td>${element.id}</td>
                    <td>${element.title}</td>
                    </tr>
                    
                     `
                });
            }).catch((Error)=>{
                console.log(Error);
            })
        } ,1000)         
        // mention the time= ,timein mili second
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>{this.state.status}</h1>
                            {/* <div>{this.state.status=="completed"?JSON.stringify(this.state.data):"no data found"}</div>     */}


                            {/* un-comment to get  data */}



                            <table className='table border '>
                                <tr>
                                    <td>ID</td>
                                    <td>User Id</td>
                                    <td>Title</td>
                                

                                </tr>
                                <tbody id='display'>

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default API;