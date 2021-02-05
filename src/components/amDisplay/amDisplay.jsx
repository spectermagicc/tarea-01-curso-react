import React from 'react'

import './amDisplay-style.css'

const AmDisplay = ({name, year, image}) => (
    <div className="container-am">
    <div className="album-am">
        <h2>{year}</h2>
        <h2>{name}</h2>
        <img src={image} alt={name} />
    </div>
</div>
);

export default AmDisplay;