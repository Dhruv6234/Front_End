import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("constructor called");
        this.state={count:0}

    }

    // componentWillMount() {
    //         console.log("componentWillMount called");
    // }

    componentDidMount() {
        setTimeout(() => {
            console.log("componentDidMount called");
            
        }, 2000);
    }

    // componentWillReceiveProps(nextProps) {
    //         console.log("componentWillReceiveProps");
    // }

    shouldComponentUpdate(nextProps, nextState) {
            console.log("shouldComponentUpdate called");
            console.log("nextState",nextState);
            return true
    }

    // componentWillUpdate(nextProps, nextState) {
    //         console.log("componentWillUpdate called");
    // }   

    componentDidUpdate(prevProps, prevState) {
            console.log("componentDidUpdate called");
            console.log("prevState",prevState);
    }

    componentWillUnmount() {
            console.log("componentWillUnmount called");
    }

    BtnClck =()=>{
        console.log("btn called");
        this.setState({count:this.state.count+1})
    }

    render() {
        return (
            <div className='container'>
                <h1>{this.state.count}</h1>
                <button className='btn btn-success' onClick={this.BtnClck}> click</button>

            </div>
        );
    }
}



export default LifeCycle;