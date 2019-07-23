import React, { PureComponent } from 'react';
import ProductListItem from '../ProductListItem';
import PropTypes from 'prop-types';
import './style.scss';

class ProductList extends PureComponent {

    render() {
        const {products = [], addItemToCart = () => {}} = this.props;
        if(products.length === 0){
            return null;
        }
        return (
            <div className="row">
                <div className="col">
                    <div className="product-grid">
                        {
                            products.map((value, index) => {
                                return <ProductListItem onAddToCart={ () => addItemToCart(value) }  key={value.id} {...value}/>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

ProductList.propTypes = {
    products: PropTypes.array,
    loading: PropTypes.bool
};

export default ProductList;