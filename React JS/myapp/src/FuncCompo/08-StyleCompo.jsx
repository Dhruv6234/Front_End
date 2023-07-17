import React from 'react';
import { styled } from 'styled-components';

const Para=styled.p`
color:red;
border:2px solid;
background:grey;
`

//   ``-till sign



const MyBtn=styled.button`
background:aqua;
color:blueviolet;
border:0;
padding:20px;
font-weight:bold;
`
function StyleCompo(props) {
    return (
        <div>
            <div className="container mt-5">
                <Para>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio similique eveniet voluptate repellendus eius blanditiis laudantium dolorem cupiditate est doloremque ut sed, unde consequatur necessitatibus. Aliquid ipsa voluptatem inventore?</Para>
                <MyBtn>Click</MyBtn>
            </div>
        </div>
    );
}

export default StyleCompo;