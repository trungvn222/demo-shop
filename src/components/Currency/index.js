import React from 'react';
import Numeral from 'numeral';

const Currency = (props) => {
    return(
        <React.Fragment>
            { Numeral(props.price).format('$0.00') }
        </React.Fragment>
    )
}

export default Currency;