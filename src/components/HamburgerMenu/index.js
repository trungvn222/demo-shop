import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { HOME_URI, CART_URI, CATEGORY_URI, CONTACT_URI, ACCOUNT_URI, SIGN_IN_URI, SHOP_URI, PROMOTION_URI, REGISTER_URI } from '../../const/route';
import './style.css';

class HamburgerMenu extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="fs_menu_overlay" />
                    <div className="hamburger_menu">
                        <div className="hamburger_close"><i className="fa fa-times" aria-hidden="true" /></div>
                        <div className="hamburger_menu_content text-right">
                            <ul className="menu_top_nav">
                                <li className="menu_item has-children">
                                    <a href="javascript:void(0)">
                                        usd
                                        <i className="fa fa-angle-down" />
                                    </a>
                                    <ul className="menu_selection">
                                        <li><a href="javascript:void(0)">cad</a></li>
                                        <li><a href="javascript:void(0)">aud</a></li>
                                        <li><a href="javascript:void(0)">eur</a></li>
                                        <li><a href="javascript:void(0)">gbp</a></li>
                                    </ul>
                                </li>
                                <li className="menu_item has-children">
                                    <a href="javascript:void(0)">
                                        English
                                        <i className="fa fa-angle-down" />
                                    </a>
                                    <ul className="menu_selection">
                                        <li><a href="javascript:void(0)">French</a></li>
                                        <li><a href="javascript:void(0)">Italian</a></li>
                                        <li><a href="javascript:void(0)">German</a></li>
                                        <li><a href="javascript:void(0)">Spanish</a></li>
                                    </ul>
                                </li>
                                <li className="menu_item has-children">
                                    <Link to={ACCOUNT_URI}>
                                        My Account
                                        <i className="fa fa-angle-down" />
                                    </Link>
                                    <ul className="menu_selection">
                                        <li><Link to={SIGN_IN_URI}><i className="fa fa-sign-in" aria-hidden="true" />Sign In</Link></li>
                                        <li><Link to={REGISTER_URI}><i className="fa fa-user-plus" aria-hidden="true" />Register</Link></li>
                                    </ul>
                                </li>
                                <li className="menu_item"><Link to={HOME_URI}>home</Link></li>
                                <li className="menu_item"><Link to={SHOP_URI}>shop</Link></li>
                                <li className="menu_item"><Link to={PROMOTION_URI}>promotion</Link></li>
                                <li className="menu_item"><a>pages</a></li>
                                <li className="menu_item"><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
                                <li className="menu_item"><Link to={CONTACT_URI}>contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HamburgerMenu;