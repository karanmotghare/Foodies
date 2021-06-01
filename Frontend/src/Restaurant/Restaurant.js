import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import data from '../Api/data.json';
import Slideimg from './Slideimg';

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
                    let id = v.venue.default_template
                    //let filename = v.venue.responsive_images.file_names[0];
                    //const aspect = v.venue.responsive_images.aspect_ratios
                    //const status = v.venue.responsive_images.aspect_ratios['16:9']
                    return (

                        <div key={v.venue.id.resy} className='res-display'>
                            <h1>{v.venue.name}</h1>
                            <h2>{v.venue.average_bill_size}{v.venue.currency_symbol}</h2>
                            <Slideimg v={v.venue.responsive_images} />
                            <p>{v.templates[id]["content"]["en-us"]["about"]["body"]}</p>
                        </div>
                    )

                })}
            </div>

        </main>
    );
};

export default Restaurant;