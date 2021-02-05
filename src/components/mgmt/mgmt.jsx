import React from 'react';

import MGMT_DATA from './mgmt.data';

import MgmtDisplay from '../mgmtDisplay/mgmtDisplay';

class ArcticMonkeys extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            mgmt_collection : MGMT_DATA
        };
    };

    render(){

        const {mgmt_collection} = this.state;

        return(
            <div>
                <h2>MGMT</h2>
                {
                mgmt_collection.map(({id, ...otherMgmtCollectionProps}) => (
                    <MgmtDisplay key={id} {...otherMgmtCollectionProps} />
                ))
            }
            </div>
        );
    }
}

export default ArcticMonkeys;