import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Advertise = () => {
    const { openSidebar } = useGlobalContext();
    return (
        <main>
            <button onClick={openSidebar} className='sidebar-toggle'>
                <FaBars />Foodies
            </button>

        </main>
    );
};

export default Advertise;