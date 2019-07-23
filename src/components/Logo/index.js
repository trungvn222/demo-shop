import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import { HOME_URI } from '../../const/route';
import './style.css';
import PropTypes from 'prop-types';

class Logo extends PureComponent {
    render() {
        return (
            <div className="logo_container">
                <Link to={HOME_URI}>Nordic<span>Shop</span></Link>
            </div>
        );
    }
}

Logo.propTypes = {

};

export default Logo;