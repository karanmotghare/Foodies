import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import data from '../Api/data.json';
import Slideimg from './Slideimg';
import Details from './Details';

const Restaurant = () => {
    const { openSidebar } = useGlobalContext();
    const venue = data.results.venues;

    return (
        <main>
            <img src={venue[0].venue.responsive_images.urls['0e94261739cb7f6651963d67ec6251d439da449f']['16:9'][1600]} alt="" width="1518" height="725" />
            <button onClick={openSidebar} className='sidebar-toggle'>
                <FaBars />Foodies
            </button>
            <div>
                {venue.map((v) => {
                   
                    return (
                        <div key={v.venue.id.resy} className='res-display'>
                            <Slideimg v={v.venue.responsive_images} />
                            <Details v={v}/>
                        </div>
                    )

                })}
            </div>

        </main>
    );
};

export default Restaurant;