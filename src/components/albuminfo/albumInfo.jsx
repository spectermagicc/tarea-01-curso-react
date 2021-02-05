import React from 'react';

import BandItem from '../bandItem/bandItem';

import './albumInfo-style.css';

const AlbumInfo = ({title, items}) => (
    <div className="container">
        <h2 className="title">{title}</h2>
        <div className="menu">
            {
                items
                    .filter((item, idx) => idx < 3)
                    .map(({id, ...otherItemsProps}) => (
                        <BandItem key={id} {...otherItemsProps} />
                    ))

            }
        </div>
    </div>
);

export default AlbumInfo;