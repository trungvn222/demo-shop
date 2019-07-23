import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, UPDATE_CART, LOAD_CART } from './action-type';

export const addItemToCart = (item) => {
    return dispatch => {
        dispatch({
            type: ADD_ITEM_TO_CART,
            payload: {
                item
            }
        });
    }
}

export const removeItemToCart = (item) => {
    return dispatch => {
        dispatch({
            type: REMOVE_ITEM_FROM_CART,
            payload: {
                item
            }
        });
    }
}

export const updateCart = (items) => {
    return dispatch => {
        dispatch({
            type: UPDATE_CART,
            payload: {
                items
            }
        });
    }
}

export const loadCart = () => {
    return dispatch => {
        dispatch({
            type: LOAD_CART
        });
    }
}