import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

class FilterByPrice extends Component {
    render() {
        const {items = []} = this.props;
        let classes = {
            'filter-price-list__item': true,
            'active': false,
        };
        if(items.length === 0){
            return null;
        }
        return (
            <div className="filter-price-list">
                {
                    items.map( (value, index) => {
                        classes.active = value.active || false;
                        return <Link key={value.id} className={classnames(classes)} to={value.link}>{value.label}</Link>
                    } )
                }
            </div>
        );
    }
}

FilterByPrice.propTypes = {
    items: PropTypes.array
};

export default FilterByPrice;