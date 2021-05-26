import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Restaurant = () => {
    const { openSidebar } = useGlobalContext();
    return (
        <main>
            <button onClick={openSidebar} className='sidebar-toggle'>
                <FaBars />Foodies
            </button>
        </main>
    );
};

export default Restaurant;