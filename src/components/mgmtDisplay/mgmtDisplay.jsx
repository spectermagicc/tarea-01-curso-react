import React from 'react'

import './../amDisplay/amDisplay-style.css'

const MgmtDisplay = ({name, year, image}) => (
    <div className="container-am">
    <div className="album-am">
        <h2>{year}</h2>
        <h2>{name}</h2>
        <img src={image} alt={name} />
    </div>
</div>
);

export default MgmtDisplay;