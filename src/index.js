import React from 'react';
import ReactDom from 'react-dom';
import Faker from 'faker';
import CommentsDetails from './CommentsDetails';
import ApprovelCard from './ApprovalCard';
import Message from './Message';
import Component1 from './Component1';
import Component2 from './Component2';
const App=()=>{
    return (
        <div className='ui container comments'>
                <ApprovelCard>
                <CommentsDetails  author='ahsan' time='5:00pm' image={Faker.image.avatar()} text='shbash'/>
                </ApprovelCard>
                <ApprovelCard>
                <CommentsDetails author='hassan' time='7:00pm' image={Faker.image.avatar()}text='kmal'/>
                </ApprovelCard>
                <ApprovelCard>
                <CommentsDetails author='tariq' time='9:00pm' image={Faker.image.avatar()} text='welldone'/>
                </ApprovelCard>
                <Message heading='Web developer' para='this is our more powerfull domain'/>
                
                <Component1 >
                    <Component2 />
                </Component1>
                

        </div>
    )
    

}
ReactDom.render(<App />,document.querySelector('#root'));