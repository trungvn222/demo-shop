import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './action-type';
import { PRODUCTS, CATEGORY } from './api';
import axios from 'axios';

export const fetchProductsBegin = () =>({
    type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = (items, pagination) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {
        items,
        pagination
    }
});

export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: {
        error
    }
});

export const fetchProducts = (cat = 0, filter = '') => {
    let url = cat ? CATEGORY.products(cat, filter) : PRODUCTS.get(filter);
    return dispatch => {
        dispatch(fetchProductsBegin());

        return axios.get(url)
            .then( res => res.data )
            .then( res => dispatch(fetchProductsSuccess(res.body, res.pagination)) )
            .catch( error => dispatch(fetchProductsFailure(error)) );
    }
    
}