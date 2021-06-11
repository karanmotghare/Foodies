import React from 'react';

const Details=({v}) =>{
    let id = v.venue.default_template
    return(
    <div className="item-info">
        <header>
            <h1>{v.venue.name}</h1>
            <h2>Average bill: {v.venue.average_bill_size}{v.venue.currency_symbol}</h2>
        </header>

    <p className="item-text">{v.templates[id]["content"]["en-us"]["about"]["body"]}</p>
    </div>
    );
}

export default Details;