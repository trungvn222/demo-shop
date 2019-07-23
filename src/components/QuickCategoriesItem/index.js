import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class QuickCategoriesItem extends PureComponent {
    render() {
        const { imageUrl = '', name = '', link = '' } = this.props;
        const style = {
            backgroundImage: `url(${imageUrl})`
        }
        return (
            <div className="col-md-4">
                <div className="banner_item align-items-center" style={style}>
                    <div className="banner_category">
                        <Link to={link}>{name}</Link>
                    </div>
                </div>
            </div>
        );
    }
}

QuickCategoriesItem.propTypes = {

};

export default QuickCategoriesItem;