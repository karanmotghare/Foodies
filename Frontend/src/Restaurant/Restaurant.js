import React from 'react';
import data from '../Api/data.json';
import Slideimg from './Slideimg';
import Details from './Details';

const Restaurant = () => {
    const venue = data.results.venues;

    return (
        
            <div className='res-display'>
                {venue.map((v) => {
                   
                    return (
                        <div key={v.venue.id.resy} className='res-display1'>
                            <Slideimg v={v.venue.responsive_images} />
                            <Details v={v}/>
                        </div>
                    )

                })}
            </div>

    );
};

export default Restaurant;