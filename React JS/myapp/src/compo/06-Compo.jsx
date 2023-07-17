import React, { Component } from 'react';
import ResuableCompo from './07-ResuableCompo';


class Compo extends Component {
    render() {
        return (
            <div>
                <>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <ResuableCompo imgSrc='img/nike.webp' tittle='Nike Show' OldPrice='6000' newprice='4000'/>
                        </div>

                        <div className="col-3">
                        <ResuableCompo imgSrc='img/decathlone.jpeg' tittle='Nike Show' OldPrice='6000' newprice='4000'/>
                        </div>

                        <div className="col-3">
                        <ResuableCompo imgSrc='img/loffer.jpg' tittle='Nike Show' OldPrice='6000' newprice='4000'/>
                        </div>

                        <div className="col-3">
                        <ResuableCompo imgSrc='img/nike.webp' tittle='Nike Show' OldPrice='6000' newprice='4000'/>
                        </div>
                    </div>
                </div>
                </>
            </div>
        );
    }
}

export default Compo;