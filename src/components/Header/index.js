import React, { Component } from 'react';
import Languagues from '../Languages'
import MenuAccount from '../MenuAccount';
import Logo from '../Logo';
import Navigation from '../Navigation';
import HamburgerMenu from '../HamburgerMenu';
import './style.css';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="header trans_300">
                    <div className="top_nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="top_nav_left">free shipping on all u.s orders over $50</div>
                                </div>
                                <div className="col-md-6 text-right">
                                    <div className="top_nav_right">
                                        <ul className="top_nav_menu">
                                            {/* Currency / Language / My Account */}
                                            <li className="language">
                                                <Languagues />
                                            </li>
                                            <li className="account">
                                                <MenuAccount />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main_nav_container">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-right">
                                    <Logo />
                                    <Navigation />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <HamburgerMenu />
            </React.Fragment>
        );
    }
}

Header.propTypes = {

};

export default Header;