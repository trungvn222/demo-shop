import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loadCart } from '../../actions/cart';
import PropTypes from 'prop-types';

class Cart extends Component {
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(loadCart());
    }
    render() {
        const {totalItem} = this.props;
        return (
            <React.Fragment>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span id="checkout_items" className="checkout_items">{totalItem}</span>
            </React.Fragment>
            
        );
    }
}

Cart.propTypes = {
    totalItem: PropTypes.number
};

const mapStateToProps = state => ({
    totalItem: state.cart.totalItem
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Cart);