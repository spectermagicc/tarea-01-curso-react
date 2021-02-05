import React from 'react';

import AM_DATA from './am.data';

import AmDisplay from '../amDisplay/amDisplay';

class ArcticMonkeys extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            am_collection : AM_DATA
        };
    };

    render(){

        const {am_collection} = this.state;

        return(
            <div>
                <h2>Arctic Monkeys</h2>
                {
                am_collection.map(({id, ...otherAmCollectionProps}) => (
                    <AmDisplay key={id} {...otherAmCollectionProps} />
                ))
            }
            </div>
        );
    }
}

export default ArcticMonkeys;