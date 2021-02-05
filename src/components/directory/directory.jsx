import React from 'react';

import Bands from './../bands/bands';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            bands: [
                {
                    title: 'Arctic Monkeys',
                    image: 'https://ep01.epimg.net/cultura/imagenes/2018/05/11/miss_festivales/1526050645_642949_1526052440_noticia_normal.jpg',
                    id: 1,
                    linkTo: 'arctic-monkeys'
                },
                {
                    title: 'mgmt',
                    image: 'https://images.squarespace-cdn.com/content/587d33a54402432706c7e9e7/1508269288368-MV84O1OJVOOZ7A624GXQ/mgmt-return-2017.jpg?content-type=image%2Fjpeg',
                    id: 2,
                    linkTo: 'mgmt'
                },
                {
                    title: 'Coldplay',
                    image: 'https://www.latercera.com/resizer/aypfLrHCi5vsHmukdPaYC2R1yVY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/P3VW7ZOAWVFE5DXJNIGHPEUDWI.jpg',
                    id: 3,
                    linkTo: 'coldplay'
                }
            ] // end bands
        }; // end this.state
    }; // end constructor

    render(){
        return(
            <div>
                {
                    this.state.bands.map(( {id, ...otherBandsProps} ) => (
                        <Bands key={id} {...otherBandsProps} />
                    ))
                }
            </div>
        )
    }

    
}

export default Directory;