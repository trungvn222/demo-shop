import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import { CATEGORY_URI } from '../../const/route';
import './style.scss';
import PropTypes from 'prop-types';

class CategoriesSidebar extends PureComponent {
    render() {
        const {categories = [], selectedCategory = 0} = this.props;
        if(categories.length  === 0){
            return null;
        }
        return (
            <ul className="sidebar_categories">
                <li className={classnames({
                            'active' : selectedCategory === 0
                })}><Link to={CATEGORY_URI}><span><i className="fa fa-angle-double-right" aria-hidden="true" /></span>All</Link></li>
                {
                    categories.map((value, index) => {
                        const classes = classnames({
                            'active' : selectedCategory === value.id
                        });
                        return <li key={value.id} className={classes}><Link to={value.link}><span><i className="fa fa-angle-double-right" aria-hidden="true" /></span>{value.name}</Link></li>
                    })
                }
            </ul>
        );
    }
}

CategoriesSidebar.propTypes = {
    categories: PropTypes.array,
    selectedCategory: PropTypes.number
};

export default CategoriesSidebar;