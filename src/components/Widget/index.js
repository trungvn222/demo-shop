import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Widget extends PureComponent {
    render() {
        const {label , children} = this.props;
        return (
            <div className="sidebar_section">
                <div className="sidebar_title">
                    <h5>{label}</h5>
                    {children}
                </div>
                
            </div>
        );
    }
}

Widget.propTypes = {
    label : PropTypes.string
};

export default Widget;