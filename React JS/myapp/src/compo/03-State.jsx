import React, { Component } from 'react';


class State extends Component {

    constructor(){
        super();
        this.state={name:"tops", movie:"3 idiots",counter:0}
        // this.state={}
    }

    Btnclck=()=>{
        console.log("btn called");
        this.setState({name:"React class"})
    }

    clckHandle=()=>{
        this.setState({counter:this.state.counter+1})
    }

    render() {
        return (
           <>
                <div className="countainer">
                    <div className="row mt-5">
                        <div className="col">
                            <h1>{this.state.name}</h1>
                            <button className='btn btn-primary' onClick={this.Btnclck}>click</button>
                            <h1>{this.state.movie}</h1>
                            <button className='btn btn-warning' onClick={()=>this.setState({movie:'2 state'})}>movie change</button>

                            <h1>{this.state.counter}</h1>
                            <button className='btn btn-primary' onClick={this.clckHandle}> click to change the number</button>
                            <button className='btn btn-primary' onClick={()=>this.setState({counter:this.state.counter-1})}>down</button>
                            <button className='btn btn-primary' onClick={()=>this.setState({counter:0})}>remove</button>

                        </div>
                    </div>
                </div>
           </>
        );
    }
}

export default State;