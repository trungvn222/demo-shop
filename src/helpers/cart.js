import { reactLocalStorage } from 'reactjs-localstorage';
import {CART} from '../const/assets';

export const saveCart = cart => {
    reactLocalStorage.setObject(CART, cart);
}

export const getCart = () => {
    return reactLocalStorage.getObject(CART);
}

export const calcCart = cart => {
    let totalPrice = 0;
    let totalItem = 0;
    cart.items.forEach( (c, index) => {
        totalPrice += c.quantity * c.product.salePrice;
        totalItem += c.quantity;
    } );

    return {...cart, totalPrice, totalItem};
}

export const addItemToCart = (cart, item) => {
    let newCart = {...cart};
    let p = newCart.items.find( c => c.product.id === item.product.id );
    
    if(p === undefined){
        newCart.items.push(item);
    }else {
        p.quantity += item.quantity;
    }
    newCart = calcCart(newCart);

    return newCart;
}

export const removeItemInCart = (cart, item) => {
    let newCart = {...cart};
    let index = newCart.items.findIndex( c => c.product.id === item.product.id );

    if(index > -1){
        newCart.items.splice(index, 1);
    }
    newCart = calcCart(newCart);
    return newCart;
}

export const updateCart = (cart, items) => {
    let newCart = {...cart};
    let p = null;
    items.forEach( (value, index) => {
        p = newCart.items.find( c => c.product.id === value.product.id );
        if(p !== undefined){
            p.quantity = value.quantity;
        }
    });
    newCart = calcCart(newCart);
    return newCart;
}