import React, { PureComponent } from 'react';
import Currency from '../Currency';
import {Link} from 'react-router-dom';
import { PRODUCT_DETAIL_URI } from '../../const/route';
import AddToCartButton from '../AddToCartButton'
import PropTypes from 'prop-types';

class ProductListItem extends PureComponent {
    render() {
        const { thumbnail = '', discount = 0, name = '', originalPrice = 0, salePrice = 0, id = '', onAddToCart = function() {} } = this.props;
        return (
            <div className="product-item men">
                <div className="product discount product_filter">
                    {
                        thumbnail !== '' ? <div className="product_image"><Link to={`${PRODUCT_DETAIL_URI}/${id}`}><img src={thumbnail} alt={name} /></Link></div> : ''
                    }
                    
                    <div className="favorite favorite_left" />
                    {
                        discount > 0 ? <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-<Currency price={discount} /></span></div> : ''
                    }
                    <div className="product_info">
                        <h6 className="product_name"><Link to={`${PRODUCT_DETAIL_URI}/${id}`}>{name}</Link></h6>
                        <div className="product_price"><Currency price={salePrice} /><span><Currency price={originalPrice} /></span></div>
                    </div>
                </div>
                <AddToCartButton addToCart={onAddToCart} />
            </div>
        );
    }
}

ProductListItem.propTypes = {

};

export default ProductListItem;