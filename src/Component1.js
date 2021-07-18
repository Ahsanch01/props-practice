import React from 'react';

const Component1=(props)=>{
    return (
            <div className='ui message'>
                <h1 style={{background:'red'}}> here is ahsan</h1>
                <div>{props.children}</div>
            </div>
    )
};

export default Component1;