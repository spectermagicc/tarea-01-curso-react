import React from 'react';

import '../amDisplay/amDisplay-style.css';

const ColdplayDisplay = ({name, image, year}) => (
    <div className="container-am">
    <div className="album-am">
        <h2>{year}</h2>
        <h2>{name}</h2>
        <img src={image} alt={name} />
    </div>
</div>
);

export default ColdplayDisplay;