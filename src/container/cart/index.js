import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { PRODUCT_DETAIL_URI, SHOP_URI } from '../../const/route';
import QuantityButton from '../../components/QuantityButton';
import Currency from '../../components/Currency';

import { updateCart, removeItemToCart } from '../../actions/cart';
import './style.scss';

class Cart extends Component {

    cartLines = [];

    updateQuantity = (cartLine) => {

        return quantity => {
            let p = this.cartLines.find( c => c.product.id === cartLine.product.id );
            if(p === undefined){
                let newCartLine = {...cartLine};
                newCartLine.quantity = quantity;
                this.cartLines.push(newCartLine);
            }else {
                p.quantity = quantity;
            }
        }
        
    }

    updateCartLine = productID => {
        const {dispatch} = this.props;
        let p = this.cartLines.find( c => c.product.id === productID );
        
        if(p !== undefined){
            dispatch(updateCart([p]));
        }
    }

    updateCartLines = () => {
        const {dispatch} = this.props;
        if(this.cartLines.length > 0){
            dispatch(updateCart(this.cartLines));
        }
    }
    removeCartLine = item => {
        const {dispatch} = this.props;
        dispatch(removeItemToCart(item));
    }
    render() {
        const { cartItems = [], totalPrice = 0 } = this.props;
        if(cartItems.length === 0){
            return <div className="container page-cart">
                Cart is empty <Link to={SHOP_URI}>Go To Shop</Link>
            </div>;
        }
        return (
            <div className="container page-cart">
                <div className="row">
                    <div className="col-sm-12">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map( (value, index) => {
                                    return <tr key={value.product.id}>
                                        <td>
                                            <Link to={`${PRODUCT_DETAIL_URI}\${value.product.id}`}>
                                                {value.product.name}<br/>
                                                <img width="50" src={value.product.thumbnail} alt={value.product.name} />
                                            </Link>
                                        </td>
                                        <td><QuantityButton afterChange={this.updateQuantity(value)} initQuantity={value.quantity} /></td>
                                        <td><Currency price={value.product.salePrice} /></td>
                                        <td>
                                            <button onClick={ e => this.removeCartLine(value) } className="btn btn-danger">Remove</button> <button onClick={ e => this.updateCartLine(value.product.id) } className="btn btn-primary">Update</button>
                                        </td>
                                    </tr>
                                })
                            }
                            <tr>
                                <td align="right" colspan="2"><strong>Total Price</strong></td>
                                <td><Currency price={totalPrice} /></td>
                                <td><button onClick={ e => this.updateCartLines() } className="btn btn-primary">Update All</button></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cart.items,
    totalPrice: state.cart.totalPrice,
});
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(Cart);