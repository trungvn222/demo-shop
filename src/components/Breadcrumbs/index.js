import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

/* 
    {
        url : @string
        active: @bool
        label: @string
    }
*/
class Breadcrums extends React.Component {
    render() {
        const { items = [], delimiter } = this.props;
        console.log(items);
        if(items.length === 0){
            return null;
        }
        return (
            <div className="breadcrumbs d-flex flex-row align-items-center">
                <ul>
                    {
                        items.map(( value, index ) => {
                            return(
                                <li key={index} className={ value.active ? 'active': '' }>
                                    <Link to={value.url}>
                                        {index > 0 && delimiter}{value.label}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
			</div>
        );
    }
}


export default Breadcrums;