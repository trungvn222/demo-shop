import { combineReducers } from 'redux';
import categories from './categories';
import products from './products';
import product from './product';
import cart from './cart';

export default combineReducers({
    categories,
    products,
    product,
    cart
});