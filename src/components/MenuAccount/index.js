import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import { ACCOUNT_URI, SIGN_IN_URI, REGISTER_URI } from '../../const/route';
import './style.css';
import PropTypes from 'prop-types';

class MenuAccount extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <Link to={ACCOUNT_URI}>
                    My Account
                    <i className="fa fa-angle-down" />
                </Link>
                <ul className="account_selection">
                    <li><Link to={SIGN_IN_URI}><i className="fa fa-sign-in" aria-hidden="true" />Sign In</Link></li>
                    <li><Link to={REGISTER_URI}><i className="fa fa-user-plus" aria-hidden="true" />Register</Link></li>
                </ul>
            </React.Fragment>
        );
    }
}

MenuAccount.propTypes = {

};

export default MenuAccount;