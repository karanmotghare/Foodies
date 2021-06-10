import React from 'react';
import { IoIosNotifications} from 'react-icons/io';

const User = () =>{
    return (
        <div className='user-display'>
            <IoIosNotifications size={45}/>
            <img src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg' alt="user" />
        </div>
    );
}

export default User;