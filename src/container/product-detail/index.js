import React, { Component } from 'react';
import {connect} from 'react-redux';

import Breadcrumbs from '../../components/Breadcrumbs';
import Gallery from '../../components/Gallery';
import ProductDetailContent from '../../components/ProductDetailContent'

import { FETCH_PRODUCT_SUCESS } from '../../actions/action-type';
import {HOME_URI, CATEGORY_URI, PRODUCT_DETAIL_URI} from '../../const/route';
import { fetchCategories } from '../../actions/categories';
import {fetchProduct} from '../../actions/product';
import {addItemToCart} from '../../actions/cart';

import './style.scss';

const delimiter = <i className="fa fa-angle-right" aria-hidden="true"></i>;
class ProductDetail extends Component {
    crumbs = [{
        label: 'Home',
        active: false,
        url: HOME_URI
    }];

    quantity = 1;
    
    componentDidMount(){
        const {dispatch, match} = this.props;
        const id = match.params.id || null;

        if(id !== null){
            dispatch(fetchProduct(id)).then(state => {
                if( state.type === FETCH_PRODUCT_SUCESS ){
                    dispatch(fetchCategories(state.payload.item.categoryId));
                }
                
            } );
        }
    }

    updateQuantity = (quantity) => {
        this.quantity = quantity;
    }
    onAddItemToCart = () => {
        const {dispatch, product} = this.props;
        dispatch(addItemToCart({
            product,
            quantity: this.quantity
        }));
    }

    componentWillUpdate(nextProps) {
        const { product = null, category = null } = nextProps;

        if(category !== null){
            let crumb = {
                label: category.name || '',
                active: false,
                url: `${CATEGORY_URI}/${category.id}`
            };
            if(this.crumbs[1] === undefined){
                this.crumbs.push(crumb);
            }else {
                this.crumbs[1] = crumb;
            }
        }
        if(product !== null){
            let  crumb = {
                label: product.name || '',
                active: true,
                url: `${PRODUCT_DETAIL_URI}/${product.id}`
            }

            if(this.crumbs[2] === undefined){
                this.crumbs.push(crumb);
            }else {
                this.crumbs[2] = crumb;
            }
        }
    }

    render() {
        const { product } = this.props;
       
        return (
            <div className="container single_product_container">
                <div className="row">
                    <div className="col">
                        {/* Breadcrumbs */}
                        <div className="breadcrumbs d-flex flex-row align-items-center">
                            <Breadcrumbs items={this.crumbs} delimiter={delimiter} />
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        {product !== null ? <Gallery images={product.images} thumbnails={product.thumbnails} /> : '' }
                    </div>
                    <div className="col-lg-5">
                        {product !== null ? <ProductDetailContent updateQuantity={this.updateQuantity} addItemToCart={this.onAddItemToCart}  {...product} /> : '' }
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    product: state.product.item || null,
    category: state.categories.item || null,
});
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);