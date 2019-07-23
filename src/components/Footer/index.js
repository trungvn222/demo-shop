import React, { PureComponent } from 'react';
import './style.css';

class Footer extends PureComponent {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
                                <ul className="footer_nav">
                                    <li><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
                                    <li><a href="/faqs">FAQs</a></li>
                                    <li><a href="contact.html">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
                                <ul>
                                    <li><a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                    <li><a href="https://twitter.com/?lang=vi"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                    <li><a href="https://www.instagram.com/"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                                    <li><a href="javascript:void(0)"><i className="fa fa-skype" aria-hidden="true" /></a></li>
                                    <li><a href="javascript:void(0)"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer_nav_container">
                                <div className="cr">©2018 All Rights Reserverd. This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="javascript:void(0)">Colorlib</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;