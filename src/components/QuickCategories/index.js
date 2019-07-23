import React, { PureComponent } from 'react';
import QuickCategoriesItem from '../QuickCategoriesItem';
import Loading from '../Loading';
import PropTypes from 'prop-types';
import './style.css';

class QuickCategories extends PureComponent {
    
    render() {
        const {categories = []} = this.props;
        if(categories.length === 0){
            return null
        }
        return (
            <div className="banner">
                <div className="container">
                    <div className="row">
                        {
                            categories.map( (value, index) => {
                                if(value.name == 'All'){
                                    return null;
                                }
                                return <QuickCategoriesItem key={value.id} {...value} />
                            } )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

QuickCategories.propTypes = {
    categories: PropTypes.array
};

export default QuickCategories;