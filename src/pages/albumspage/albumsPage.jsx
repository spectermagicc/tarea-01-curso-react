import React from 'react';

import ALBUM_DATA from './album.data';

import AlbumInfo from './../../components/albuminfo/albumInfo'

class AlbumsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            albumCollection : ALBUM_DATA
        };
    };

    render () {

        const {albumCollection} = this.state;

        return (
            <div className="album-page">
            {
                albumCollection.map(({id, ...otherAlbumCollectionProps}) => (
                    <AlbumInfo key={id} {...otherAlbumCollectionProps} />
                ))
            }
        </div>
        );
    }
}

export default AlbumsPage;