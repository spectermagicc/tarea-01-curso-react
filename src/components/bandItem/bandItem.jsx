import React from 'react';

import './bandItem-style.css'

const BandItem = ({ name, image, year }) => (
    <div className="container-album">
        <div className="album">
            <h2>{year}</h2>
            <h2>{name}</h2>
            <img src={image} alt={name} />
        </div>
    </div>
);

export default BandItem;