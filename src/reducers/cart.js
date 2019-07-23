import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, UPDATE_CART, LOAD_CART } from '../actions/action-type';
import { addItemToCart, saveCart, getCart, updateCart, removeItemInCart } from '../helpers/cart';

const initialState = {
    items: [],
    totalPrice: 0,
    totalItem: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM_TO_CART:
        {
            let item = action.payload.item;
            let oldCart = getCart();
            oldCart = {...state, ...oldCart};
            const newCart = addItemToCart(oldCart, item);
            saveCart(newCart);
            return newCart;
        }
            
        case UPDATE_CART:
        {
            let oldCart = getCart();
            let {items} = action.payload;
            let newCart = updateCart(oldCart, items);
            saveCart(newCart)
            return newCart;;
        }
        case REMOVE_ITEM_FROM_CART:
        {
            let oldCart = getCart();
            let {item} = action.payload;
            let newCart = removeItemInCart(oldCart, item);
            saveCart(newCart);
            return newCart;
        }
        case LOAD_CART:
        default:
            let cart = getCart();
            return {...state, ...cart};
    }
}

export default cartReducer;