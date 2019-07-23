import React, { PureComponent } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class Languages extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <a href="#">
                    English
                    <i className="fa fa-angle-down" />
                </a>
                <ul className="language_selection">
                    <li><a href="#">French</a></li>
                    <li><a href="#">Italian</a></li>
                    <li><a href="#">German</a></li>
                    <li><a href="#">Spanish</a></li>
                </ul>
            </React.Fragment>
        );
    }
}

Languages.propTypes = {

};

export default Languages;