import React from 'react';
import { IoIosNotifications} from 'react-icons/io';

const User = () =>{
    return (
        <main>
        <div className='user-display'>
            <IoIosNotifications size={25}/>
        </div>
        <div className='user-display-img'>    
            <img src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg'
            alt ="user" />
        </div>
        </main>
    );
}

export default User;