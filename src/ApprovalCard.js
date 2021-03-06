import React from 'react';


const ApprovelCard=(props)=>{
    
    return(
        
        <div className='ui card'>
            <div className='content'>{props.children}</div>
            <div className='extra content'>
                <div className='ui two buttons'>
                    <div className='ui basic green button'>Approve</div>
                    <div className='ui basic red button'>Rejected</div>
                </div>
            </div>
        </div>

    )
    };
    export default ApprovelCard;