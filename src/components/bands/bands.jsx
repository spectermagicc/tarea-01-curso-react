import React from 'react';

import {withRouter} from 'react-router-dom';

import './bands-style.css';

const Bands = ( {title, image, linkTo, history, match} ) => (
    <div className="container-bands">
        <div className="bands" onClick={() => history.push(`${match.url}${linkTo}`)}>

            <div className="title">
                {title.toUpperCase()}
            </div>

            <div className="img">
                <img src={image} alt={title} />
            </div>
            
        </div>
    </div>
);

export default withRouter(Bands);