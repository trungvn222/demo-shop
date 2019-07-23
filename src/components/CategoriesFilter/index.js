import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';
class CategoriesFilter extends PureComponent {
    onFilter = (cat) => {
        this.props.onFilter(cat);
    }
    render() {
        const { categories, selectedCategory = 0 } = this.props;
        if(categories.length == 0){
            return null;
        }
        return (
            <div className="row align-items-center">
                <div className="col text-center">
                    <div className="new_arrivals_sorting">
                        <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                            <li key='all' className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${classNames({
                                        'active' : 0 === selectedCategory
                                    })}`} onClick={(e) => this.onFilter(0)}>All</li>
                            {
                                categories.map((value, index) => {
                                    const classes = classNames({
                                        'active' : value.id === selectedCategory
                                    });
                                    return <li key={value.name} className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${classes}`} onClick={(e) => this.onFilter(value.id)}>{value.name}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

CategoriesFilter.propTypes = {
    categoreis : PropTypes.array
};

export default CategoriesFilter;