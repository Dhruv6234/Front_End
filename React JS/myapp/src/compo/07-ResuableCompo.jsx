import React, { Component } from 'react';

class ResuableCompo extends Component {
    render() {
        return (
            <>
                <div className="card">
                                <img src={this.props.imgSrc} alt="" />
                                <div className="card-body text-center">
                                    <h2>{this.props.title}</h2>
                                    <span>Old Price:$ <del>{this.props.OldPrice}</del></span>
                                    <br />
                                    <span>New Price:${this.props.NewPrice}</span>
                                    <br />
                                    <button className='btn btn-primary'>Buy Now</button>
                                </div>
                            </div>
            </>
        );
    }
}

export default ResuableCompo;