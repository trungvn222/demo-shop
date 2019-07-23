import React, { PureComponent } from 'react';
import QuantityButton from '../QuantityButton';
import AddToCartButton from '../AddToCartButton';
import Currency from '../Currency';

class ProductDetailContent extends PureComponent {
    render() {
        const {name, originalPrice, salePrice, shortDescription, updateQuantity, addItemToCart} =  this.props;
        return (
            <div className="product_details">
                <div className="product_details_title">
                    <h2>{name}</h2>
                    <p>{shortDescription}</p>
                </div>
                <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                    <span className="ti-truck" /><span>free delivery</span>
                </div>
                { originalPrice - salePrice > 0 ? <div className="original_price"><Currency price={originalPrice}/></div> : '' }
                { salePrice > 0 ? <div className="product_price"><Currency price={salePrice}/></div> : '' }
                
                <ul className="star_rating">
                    <li><i className="fa fa-star" aria-hidden="true" /></li>
                    <li><i className="fa fa-star" aria-hidden="true" /></li>
                    <li><i className="fa fa-star" aria-hidden="true" /></li>
                    <li><i className="fa fa-star" aria-hidden="true" /></li>
                    <li><i className="fa fa-star-o" aria-hidden="true" /></li>
                </ul>
                <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                    <span>Quantity:</span>
                    <QuantityButton afterChange={updateQuantity} />
                    <br/>
                    <AddToCartButton addToCart={ addItemToCart } show={true} />
                    <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                    <div className="product_favorite d-flex flex-column align-items-center justify-content-center" />
                </div>
            </div>
        );
    }
}

export default ProductDetailContent;