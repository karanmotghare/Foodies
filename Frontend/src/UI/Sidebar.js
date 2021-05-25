import React from 'react';
import logo from './logo.jpg';
import { useGlobalContext } from '../context';
import { FaTimes } from 'react-icons/fa';
import {links} from './Data';

const Sidebar = () =>{
    const {isSidebarOpen,closeSidebar} = useGlobalContext();

    return (
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className='sidebar-header'>
                <img src={logo} className='logo' alt='Foodies' />Foodies
                <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>
            </div>
            <ul className='links'>
                {links.map((link)=>{
                    const {id,url,text,icon} =link;
                    return(
                        <li key ={id}>
                            <a href={url}>
                            {icon}
                            {text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}

export default Sidebar;