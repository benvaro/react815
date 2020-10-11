import React from 'react';

import './card.css'

const Card = () => {
    const src = "https://robohash.org/avatar.png";

    return <div className="col-10 col-md-6 col-lg-4 card">
        <h2>Avatar</h2>
        <img src={src} />
        <div>
            <p><b>Year:</b>2012</p>
            <p><b>Genre:</b>Fantazy</p>
        </div>
    </div>
}

export default Card;