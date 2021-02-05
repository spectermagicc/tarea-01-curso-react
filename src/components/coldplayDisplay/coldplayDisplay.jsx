import React from 'react';

import '../../assets/css/display-style.css';

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