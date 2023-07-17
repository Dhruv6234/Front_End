import React, { useContext } from 'react';

const MyTheme={
    dark:{
        foreground:"red",
        background:"grey"
    },

    light:{
        foreground:"grey",
        background:"yellow"
    }
    
    
}
const Theme = React.createContext(MyTheme.dark)
function UsseContext(props) {
    const data  = useContext(Theme)

    return (
        <>

        <div className="container">
            <div className="row mt-5" >
                <div className="col">
                    <button style={{background:data.background, color:data.foreground}}>I am styled by theme</button>

                    <p style={{background:data.background}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus expedita odit cumque voluptatibus ducimus explicabo molestias sequi consectetur, facere eaque provident soluta omnis dolores necessitatibus quam repudiandae, vero vel?
                    </p>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default UsseContext;




//npm i styled-components
//npm audid fix
//npm i styled-components@6.0.0-rc.1
