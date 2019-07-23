import React, { PureComponent } from 'react';
import { HOME_URI, SHOP_URI, PROMOTION_URI, CONTACT_URI, CART_URI } from '../../const/route';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

import Cart from '../Cart';

class Navigation extends PureComponent {
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar_menu">
                    <li><Link to={HOME_URI}>home</Link></li>
                    <li><Link to={SHOP_URI}>shop</Link></li>
                    <li><Link to={PROMOTION_URI}>promotion</Link></li>
                    <li><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
                    <li><Link to={CONTACT_URI}>contact</Link></li>
                </ul>
                <ul className="navbar_user">
                    {/* <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li> */}
                    {/* <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i></a></li> */}
                    <li className="checkout">
                        <Link to={CART_URI}>
                            <Cart />
                        </Link>
                    </li>
                </ul>
                <div className="hamburger_container">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
            </nav>
        );
    }
}

export default Navigation;