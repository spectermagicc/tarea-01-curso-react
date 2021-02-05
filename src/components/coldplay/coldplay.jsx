import React from 'react';

import COLDPLAY_DATA from './coldplay.data';

import ColdplayDisplay from '../coldplayDisplay/coldplayDisplay';

class Coldplay extends React.Component {
    constructor(){
        super();

        this.state = {
            coldplay_collection : COLDPLAY_DATA
        }
    };

    render(){

        const {coldplay_collection} = this.state;

        return(
            
            <div>
                <h2>Coldplay</h2>
                {
                    coldplay_collection.map(({id, ...otherColdplayCollectionProps}) => (
                        <ColdplayDisplay key={id} {...otherColdplayCollectionProps} />
                    ))
                }
            </div>

        );
    }
}
export default Coldplay;