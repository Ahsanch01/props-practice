import React from 'react';

const Message=(props)=>{
    return(
        <div className='ui message'>
            <h1>{props.heading}</h1>
            <p>{props.para}</p>

        </div>

    )
};
export default Message;